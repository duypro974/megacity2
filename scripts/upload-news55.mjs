/**
 * Upload ảnh news55 (The Link City) lên Cloudinary
 * Chạy: node scripts/upload-news55.mjs
 */

import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

config({ path: resolve(ROOT, ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("❌ Thiếu biến môi trường Cloudinary trong .env.local");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key:    CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure:     true,
});

const FILES = [
  { local: "public/the link/news55/1.png", publicId: "thelinkcity/news55/1" },
  { local: "public/the link/news55/2.jpg", publicId: "thelinkcity/news55/2" },
  { local: "public/the link/news55/3.jpg", publicId: "thelinkcity/news55/3" },
  { local: "public/the link/news55/4.jpg", publicId: "thelinkcity/news55/4" },
  { local: "public/the link/news55/5.jpg", publicId: "thelinkcity/news55/5" },
];

async function main() {
  console.log("\n🚀 Upload ảnh news55 lên Cloudinary...\n");
  let ok = 0, fail = 0;

  for (const { local, publicId } of FILES) {
    const fullPath = resolve(ROOT, local);
    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        public_id:     publicId,
        overwrite:     true,
        invalidate:    true,
        resource_type: "image",
      });
      console.log(`  ✅ ${publicId} → ${result.secure_url}`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${publicId}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`✅ Thành công: ${ok} / ${FILES.length}`);
  if (fail > 0) console.log(`❌ Thất bại: ${fail}`);
  console.log(`─────────────────────────────────\n`);
}

main().catch(console.error);
