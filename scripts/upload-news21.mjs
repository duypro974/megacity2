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

const files = [
  { local: "public/news21/1.jpg",  id: "megacity2/news21/1" },
  { local: "public/news21/2.jpg",  id: "megacity2/news21/2" },
  { local: "public/news21/3.jpeg", id: "megacity2/news21/3" },
  { local: "public/news21/4.jpg",  id: "megacity2/news21/4" },
];

for (const f of files) {
  try {
    const r = await cloudinary.uploader.upload(resolve(ROOT, f.local), {
      public_id: f.id, overwrite: true, invalidate: true, resource_type: "image",
    });
    console.log(`✅ ${f.local} → ${r.secure_url}`);
  } catch (e) {
    console.error(`❌ ${f.local}: ${e.message}`);
  }
}
console.log("Done.");
