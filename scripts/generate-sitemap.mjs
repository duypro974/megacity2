#!/usr/bin/env node
/**
 * generate-sitemap.mjs
 *
 * Script này KHÔNG còn tạo XML sitemap nữa.
 * Sitemap được phục vụ động bởi Next.js qua src/app/sitemap.ts → /sitemap.xml
 * robots.txt được phục vụ động bởi Next.js qua src/app/robots.ts → /robots.txt
 *
 * Script giữ lại để không phá build pipeline cũ, nhưng không làm gì cả.
 */

console.log("ℹ️  generate-sitemap.mjs: sitemap & robots.txt are now served by Next.js dynamically.");
console.log("   - /sitemap.xml  → src/app/sitemap.ts");
console.log("   - /robots.txt   → src/app/robots.ts");
console.log("   No static files generated.");
