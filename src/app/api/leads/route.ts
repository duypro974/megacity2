import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "leads.json");

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  interest: string;
  note?: string;
  createdAt: string;
  status: "new" | "contacted" | "closed";
};

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function getLeads(): Promise<Lead[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Lead[];
}

async function saveLeads(leads: Lead[]) {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function GET() {
  try {
    const leads = await getLeads();
    // Sort newest first
    leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(leads);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, interest, note } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const leads = await getLeads();
    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      phone: phone.trim(),
      email: email?.trim() || undefined,
      interest: interest || "khac",
      note: note?.trim() || undefined,
      createdAt: new Date().toISOString(),
      status: "new",
    };

    leads.push(newLead);
    await saveLeads(leads);

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
