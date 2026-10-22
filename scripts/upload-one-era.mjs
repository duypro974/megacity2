import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
config({ path: resolve(ROOT, ".env.local") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure:     true,
});

const baseDir = resolve(ROOT, "public/images/one-era");

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = resolve(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (file.endsWith(".webp") || file.endsWith(".jpg")) {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
}

async function run() {
  if (!fs.existsSync(baseDir)) {
    console.error("Base directory does not exist yet:", baseDir);
    return;
  }
  const allFiles = getAllFiles(baseDir);
  // We prefer uploading the webp files (and jpg if desired)
  const uploadList = allFiles.filter(f => f.endsWith(".webp"));

  console.log(`Found ${uploadList.length} files to upload to Cloudinary (cloud: ${process.env.CLOUDINARY_CLOUD_NAME})...\n`);

  const results = {};
  for (const filePath of uploadList) {
    const rel = relative(baseDir, filePath).replace(/\\/g, "/");
    // e.g. hero/one-era-skyline-sunset.webp -> public_id: oneera/hero/one-era-skyline-sunset
    const publicId = `oneera/${rel.replace(/\.[^/.]+$/, "")}`;

    try {
      console.log(`Uploading ${rel} -> ${publicId}...`);
      const r = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        invalidate: true,
        resource_type: "image",
      });
      console.log(`✔ SUCCESS: ${r.secure_url}`);
      results[rel] = r.secure_url;
    } catch (err) {
      console.error(`✖ ERROR on ${rel}:`, err.message);
    }
  }

  // Write mapping manifest to src/data/oneEraCloudinaryManifest.json
  const manifestPath = resolve(ROOT, "src/data/oneEraCloudinaryManifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2), "utf-8");
  console.log(`\nSaved upload manifest to ${manifestPath}`);
  console.log("Upload completed!");
}

run();
