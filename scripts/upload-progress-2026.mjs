import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, dirname, join, extname, basename } from "path";
import { fileURLToPath } from "url";
import { readdirSync, writeFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
config({ path: resolve(ROOT, ".env.local") });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

const PROGRESS_DIR = join(ROOT, "public", "mega-city-2-progress-2026");
const files = readdirSync(PROGRESS_DIR);

console.log(`Found ${files.length} files to upload to Cloudinary...`);

const resultMap = {};

async function uploadAll() {
  for (const file of files) {
    const fullPath = join(PROGRESS_DIR, file);
    const ext = extname(file).toLowerCase();
    const nameWithoutExt = basename(file, ext);
    const isVideo = ext === ".mp4" || ext === ".mov" || ext === ".webm";

    console.log(`Uploading ${file} (${isVideo ? "VIDEO" : "IMAGE"})...`);

    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        folder: "megacity2/progress-2026",
        resource_type: isVideo ? "video" : "image",
        public_id: nameWithoutExt,
        overwrite: true,
      });

      console.log(`✓ Uploaded ${file} -> ${result.secure_url}`);
      resultMap[file] = {
        public_id: result.public_id,
        secure_url: result.secure_url,
        resource_type: result.resource_type,
        format: result.format,
        width: result.width,
        height: result.height,
        duration: result.duration,
      };
    } catch (err) {
      console.error(`❌ Failed to upload ${file}:`, err.message || err);
    }
  }

  const outMapPath = join(ROOT, "src", "data", "megaCity2ProgressCloudinaryMap.json");
  writeFileSync(outMapPath, JSON.stringify(resultMap, null, 2), "utf-8");
  console.log(`\n🎉 Finished uploading all files! Map saved to ${outMapPath}`);
}

uploadAll();
