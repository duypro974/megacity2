import { createHash } from "crypto";
import { readFileSync } from "fs";
import { resolve, extname, basename } from "path";

const CLOUD      = "dqy4lfmcf";
const API_KEY    = "776298668947867";
const API_SECRET = "QuwHstvK6BhhskV7GtqkOG8Oy48";

const FILES = [
  { path: "public/the link/news53/1.png",  public_id: "thelinkcity/news53/1" },
  { path: "public/the link/news53/2.jpg",  public_id: "thelinkcity/news53/2" },
  { path: "public/the link/news53/3.jpg",  public_id: "thelinkcity/news53/3" },
  { path: "public/the link/news53/4.jpg",  public_id: "thelinkcity/news53/4" },
  { path: "public/the link/news53/5.webp", public_id: "thelinkcity/news53/5" },
];

function sign(params) {
  const str = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&") + API_SECRET;
  return createHash("sha1").update(str).digest("hex");
}

async function upload(file) {
  const timestamp = Math.floor(Date.now() / 1000);
  const params    = { public_id: file.public_id, timestamp };
  const signature = sign(params);
  const ext  = extname(file.path).toLowerCase().replace(".", "");
  const mime = ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
  const fileBytes = readFileSync(resolve(file.path));
  const blob      = new Blob([fileBytes], { type: mime });
  const form = new FormData();
  form.append("file",       blob, basename(file.path));
  form.append("public_id",  file.public_id);
  form.append("api_key",    API_KEY);
  form.append("timestamp",  String(timestamp));
  form.append("signature",  signature);
  const url = `https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`;
  const res  = await fetch(url, { method: "POST", body: form });
  const json = await res.json();
  if (res.ok) {
    console.log(`✅ OK: ${file.public_id} → ${json.secure_url}`);
  } else {
    console.error(`❌ FAIL ${file.public_id}: ${JSON.stringify(json.error)}`);
  }
}

for (const f of FILES) {
  await upload(f);
}
