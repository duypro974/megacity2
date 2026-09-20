import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
config({ path: resolve(ROOT, ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("❌ Thiếu biến môi trường Cloudinary"); process.exit(1);
}

cloudinary.config({ cloud_name: CLOUDINARY_CLOUD_NAME, api_key: CLOUDINARY_API_KEY, api_secret: CLOUDINARY_API_SECRET, secure: true });

const FILES = [
  { local: "public/news58/1.jpg", publicId: "megacity2/news58/1" },
  { local: "public/news58/2.png", publicId: "megacity2/news58/2" },
  { local: "public/news58/3.png", publicId: "megacity2/news58/3" },
  { local: "public/news58/4.png", publicId: "megacity2/news58/4" },
];

async function main() {
  console.log("\n🚀 Upload ảnh news58 lên Cloudinary...\n");
  let ok = 0, fail = 0;
  for (const { local, publicId } of FILES) {
    try {
      const result = await cloudinary.uploader.upload(resolve(ROOT, local), { public_id: publicId, overwrite: true, invalidate: true, resource_type: "image" });
      console.log(`  ✅ ${publicId} → ${result.secure_url}`);
      ok++;
    } catch (err) {
      console.error(`  ❌ ${publicId}: ${err.message}`); fail++;
    }
  }
  console.log(`\n✅ Thành công: ${ok}/${FILES.length}${fail ? `  ❌ Thất bại: ${fail}` : ""}\n`);
}
main().catch(console.error);
