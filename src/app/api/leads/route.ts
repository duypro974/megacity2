import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import nodemailer from "nodemailer";

// ─── Types ─────────────────────────────────────────────────────────────────
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

const interestLabels: Record<string, string> = {
  "dau-tu":       "Đầu tư sinh lời",
  "mua-o":        "Mua để ở",
  "xem-mat-bang": "Xem mặt bằng",
  "nha-xay-san":  "Nhà xây sẵn",
  "khac":         "Khác",
};

// ─── Helpers: xác định mode lưu trữ ───────────────────────────────────────
function useSheets(): boolean {
  return !!(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
    process.env.GOOGLE_PRIVATE_KEY &&
    process.env.GOOGLE_SHEET_ID
  );
}

// ─── Google Sheets backend ─────────────────────────────────────────────────
async function sheetsGetLeads(): Promise<Lead[]> {
  const { google } = await import("googleapis");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key:  (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Leads!A2:H",
  });
  const rows = res.data.values ?? [];
  return rows.map((r) => ({
    id:        r[0] ?? "",
    name:      r[1] ?? "",
    phone:     r[2] ?? "",
    email:     r[3] || undefined,
    interest:  r[4] ?? "khac",
    note:      r[5] || undefined,
    createdAt: r[6] ?? new Date().toISOString(),
    status:    (r[7] as Lead["status"]) ?? "new",
  })).reverse(); // newest first
}

async function sheetsAppendLead(lead: Lead): Promise<void> {
  const { google } = await import("googleapis");
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key:  (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Leads!A:H",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        lead.id,
        lead.name,
        lead.phone,
        lead.email ?? "",
        lead.interest,
        lead.note ?? "",
        lead.createdAt,
        lead.status,
      ]],
    },
  });
}

// ─── File JSON backend (local dev fallback) ────────────────────────────────
const DATA_FILE = path.join(process.cwd(), "data", "leads.json");

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function fileGetLeads(): Promise<Lead[]> {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  const leads = JSON.parse(raw) as Lead[];
  return [...leads].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

async function fileAppendLead(lead: Lead): Promise<void> {
  await ensureDataFile();
  const raw   = await fs.readFile(DATA_FILE, "utf-8");
  const leads = JSON.parse(raw) as Lead[];
  leads.push(lead);
  await fs.writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

// ─── Unified storage ───────────────────────────────────────────────────────
async function getLeads(): Promise<Lead[]> {
  return useSheets() ? sheetsGetLeads() : fileGetLeads();
}

async function appendLead(lead: Lead): Promise<void> {
  return useSheets() ? sheetsAppendLead(lead) : fileAppendLead(lead);
}

// ─── Email notification ────────────────────────────────────────────────────
async function sendEmailNotification(lead: Lead) {
  const user    = process.env.GMAIL_USER;
  const pass    = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.NOTIFY_EMAIL ?? "k.homekog@gmail.com";

  if (!user || !pass) {
    console.warn("[Email] Chưa cấu hình GMAIL_USER / GMAIL_APP_PASSWORD — bỏ qua.");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const interestLabel = interestLabels[lead.interest] ?? lead.interest;
  const createdAt = new Date(lead.createdAt).toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false,
  });

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;
                border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#d97706,#b45309);padding:20px 24px;">
        <h2 style="color:#fff;margin:0;font-size:18px;">🔔 Lead mới — Kim Oanh Đồng Nai</h2>
        <p style="color:rgba(255,255,255,.8);margin:4px 0 0;font-size:13px;">${createdAt}</p>
      </div>
      <div style="padding:24px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 8px;color:#6b7280;width:120px;">👤 Họ tên</td>
            <td style="padding:10px 8px;font-weight:700;color:#111827;">${lead.name}</td>
          </tr>
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 8px;color:#6b7280;">📞 Điện thoại</td>
            <td style="padding:10px 8px;font-weight:700;">
              <a href="tel:${lead.phone}" style="color:#059669;text-decoration:none;">${lead.phone}</a>
            </td>
          </tr>
          ${lead.email ? `
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 8px;color:#6b7280;">✉️ Email</td>
            <td style="padding:10px 8px;color:#111827;">${lead.email}</td>
          </tr>` : ""}
          <tr style="border-bottom:1px solid #f3f4f6;">
            <td style="padding:10px 8px;color:#6b7280;">🎯 Nhu cầu</td>
            <td style="padding:10px 8px;">
              <span style="background:#fef3c7;color:#92400e;padding:2px 10px;
                           border-radius:20px;font-size:12px;font-weight:600;">${interestLabel}</span>
            </td>
          </tr>
          ${lead.note ? `
          <tr>
            <td style="padding:10px 8px;color:#6b7280;vertical-align:top;">📝 Ghi chú</td>
            <td style="padding:10px 8px;color:#374151;">${lead.note}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top:20px;padding:14px 16px;background:#f9fafb;
                    border-radius:8px;font-size:12px;color:#6b7280;">
          ID: ${lead.id}<br/>Nguồn: kimoanhdongnai.com.vn
        </div>
      </div>
      <div style="background:#f3f4f6;padding:12px 24px;text-align:center;
                  font-size:12px;color:#9ca3af;">
        Kim Oanh Đồng Nai · 268A Phan Trung, Tam Hiệp, Biên Hòa
      </div>
    </div>
  `;

  await transporter.sendMail({
    from:    `"Kim Oanh Đồng Nai" <${user}>`,
    to:      toEmail,
    subject: `🔔 Lead mới: ${lead.name} — ${lead.phone} (${interestLabel})`,
    html,
  });
}

// ─── Route handlers ────────────────────────────────────────────────────────
export async function GET() {
  try {
    const leads = await getLeads();
    return NextResponse.json(leads);
  } catch (error) {
    console.error("[GET /api/leads]", error);
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

    const newLead: Lead = {
      id:        `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name:      name.trim(),
      phone:     phone.trim(),
      email:     email?.trim() || undefined,
      interest:  interest || "khac",
      note:      note?.trim() || undefined,
      createdAt: new Date().toISOString(),
      status:    "new",
    };

    await appendLead(newLead);

    // Gửi email thông báo — không block response
    sendEmailNotification(newLead).catch((err) =>
      console.error("[Email] Gửi thất bại:", err)
    );

    return NextResponse.json({ success: true, lead: newLead }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/leads]", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
