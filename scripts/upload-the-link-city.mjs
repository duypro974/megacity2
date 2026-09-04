import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
config({ path: resolve(ROOT, ".env.local") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:     true,
});

// Tên folder local có dấu cách — dùng đúng tên thật
const files = [
  // ── Hero (home) ──────────────────────────────────────
  { local: "public/the link/home/1.webp",               id: "thelinkcity/hero/1" },

  // ── Overview / Tổng quan ────────────────────────────
  { local: "public/the link/overview/1.webp",            id: "thelinkcity/overview/1" },
  { local: "public/the link/overview/2.jpg",             id: "thelinkcity/overview/2" },
  { local: "public/the link/overview/3.jpg",             id: "thelinkcity/overview/3" },

  // ── On-site amenities / Tiện ích ────────────────────
  { local: "public/the link/on-site amenities/1.jpg",    id: "thelinkcity/amenities/1" },
  { local: "public/the link/on-site amenities/2.jpg",    id: "thelinkcity/amenities/2" },
  { local: "public/the link/on-site amenities/3.jpg",    id: "thelinkcity/amenities/3" },

  // ── Real / Hình ảnh thực tế ─────────────────────────
  { local: "public/the link/real/1.jpg",                 id: "thelinkcity/real/1" },
  { local: "public/the link/real/2.jpg",                 id: "thelinkcity/real/2" },
  { local: "public/the link/real/3.jpg",                 id: "thelinkcity/real/3" },
  { local: "public/the link/real/4.jpg",                 id: "thelinkcity/real/4" },
  { local: "public/the link/real/5.jpg",                 id: "thelinkcity/real/5" },
  { local: "public/the link/real/6.jpg",                 id: "thelinkcity/real/6" },
];

console.log(`Uploading ${files.length} files to Cloudinary (cloud: ${process.env.CLOUDINARY_CLOUD_NAME})...\n`);

for (const f of files) {
  try {
    const r = await cloudinary.uploader.upload(resolve(ROOT, f.local), {
      public_id:     f.id,
      overwrite:     true,
      invalidate:    true,
      resource_type: "image",
    });
    console.log(`✅  ${f.local}\n    → ${r.secure_url}\n`);
  } catch (e) {
    console.error(`❌  ${f.local}: ${e.message}\n`);
  }
}

console.log("Done.");
