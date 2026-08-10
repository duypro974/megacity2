/**
 * Upload toàn bộ ảnh từ public/ lên Cloudinary
 * Chạy: node scripts/upload-to-cloudinary.mjs
 *
 * Cần file .env.local ở root với:
 *   CLOUDINARY_CLOUD_NAME=dqy4lfmcf
 *   CLOUDINARY_API_KEY=your_api_key
 *   CLOUDINARY_API_SECRET=your_api_secret
 */

import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
import { resolve, relative, extname, basename, join, dirname } from "path";
import { readdirSync, statSync, existsSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

// Load .env.local
config({ path: resolve(ROOT, ".env.local") });

// ── Validate env ──────────────────────────────────────────
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error("❌ Thiếu biến môi trường. Kiểm tra file .env.local:");
  console.error("   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET");
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key:    CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure:     true,
});

// ── Folder mapping: public path → cloudinary folder ──────
// Key: subfolder tên trong public/ (lowercase so sánh)
// Value: folder name trên Cloudinary
const FOLDER_MAP = {
  "":                  "megacity2/hero",          // file root của public (all.jpg)
  "overview":          "megacity2/overview",
  "on-site amenities": "megacity2/amenities",
  "real":              "megacity2/real",
  "product":           "megacity2/product",
  "legal":             "megacity2/legal",
  "regional link":     "megacity2/regional-link",
  "trade and services":"megacity2/trade",
  "heartpulse":        "megacity2/heartpulse",
  "school":            "megacity2/school",
  "plane":             "megacity2/plane",
};

// File name mapping — chuẩn hóa tên file có ký tự đặc biệt
const FILENAME_MAP = {
  "Bản đồ.jpeg":  "ban-do.jpeg",
  "Trang 4.jpeg": "trang-4.jpeg",
  "Trang 6.jpeg": "trang-6.jpeg",
  "Trang 7.jpeg": "trang-7.jpeg",
  "Trang 10.jpeg":"trang-10.jpeg",
  "Trang 11.jpeg":"trang-11.jpeg",
  "Trang 12.jpeg":"trang-12.jpeg",
};

// Extension ảnh được upload
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif"]);

// ── Collect files ─────────────────────────────────────────
function collectFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      collectFiles(fullPath, files);
    } else if (IMAGE_EXTS.has(extname(entry).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

// ── Map file → cloudinary folder + public_id ─────────────
function getCloudinaryTarget(fullPath, publicDir) {
  const rel = relative(publicDir, fullPath);              // e.g. "Regional link/1.jpg"
  const parts = rel.split(/[\\/]/);

  let subfolderKey = "";
  let filename = parts[parts.length - 1];

  if (parts.length > 1) {
    subfolderKey = parts[0].toLowerCase();
  }

  // Map subfolder
  const cldFolder = FOLDER_MAP[subfolderKey];
  if (!cldFolder) {
    return null; // bỏ qua folder không được map
  }

  // Map filename
  const mappedFilename = FILENAME_MAP[filename] ?? filename;
  // Bỏ extension vì Cloudinary tự xử lý
  const publicId = `${cldFolder}/${mappedFilename.replace(/\.[^.]+$/, "")}`;

  return { publicId, cldFolder, filename: mappedFilename, fullPath };
}

// ── Upload ────────────────────────────────────────────────
async function uploadFile({ publicId, fullPath, filename }) {
  try {
    const result = await cloudinary.uploader.upload(fullPath, {
      public_id:     publicId,
      overwrite:     true,
      invalidate:    true,
      use_filename:  false,
      resource_type: "image",
    });
    console.log(`  ✅ ${filename} → ${result.secure_url}`);
    return { ok: true, filename };
  } catch (err) {
    console.error(`  ❌ ${filename}: ${err.message}`);
    return { ok: false, filename, error: err.message };
  }
}

// ── Main ──────────────────────────────────────────────────
async function main() {
  const publicDir = resolve(ROOT, "public");

  if (!existsSync(publicDir)) {
    console.error("❌ Không tìm thấy thư mục public/");
    process.exit(1);
  }

  console.log(`\n🚀 Bắt đầu upload lên Cloudinary [${CLOUDINARY_CLOUD_NAME}]...\n`);

  const allFiles = collectFiles(publicDir);
  const targets = allFiles
    .map((f) => getCloudinaryTarget(f, publicDir))
    .filter(Boolean);

  console.log(`📁 Tìm thấy ${targets.length} ảnh cần upload\n`);

  // Group theo folder để log rõ hơn
  const byFolder = {};
  for (const t of targets) {
    if (!byFolder[t.cldFolder]) byFolder[t.cldFolder] = [];
    byFolder[t.cldFolder].push(t);
  }

  let success = 0;
  let failed  = 0;

  for (const [folder, files] of Object.entries(byFolder)) {
    console.log(`\n📂 ${folder} (${files.length} ảnh)`);
    for (const target of files) {
      const result = await uploadFile(target);
      if (result.ok) success++; else failed++;
    }
  }

  console.log("\n─────────────────────────────────");
  console.log(`✅ Thành công: ${success}`);
  if (failed > 0) console.log(`❌ Thất bại:   ${failed}`);
  console.log("─────────────────────────────────");

  if (failed === 0) {
    console.log("\n🎉 Upload hoàn tất!");
    console.log("👉 Đổi USE_CLOUDINARY = true trong src/lib/cloudinary.ts\n");
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
