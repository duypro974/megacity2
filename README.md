# Mega City 2 Nhơn Trạch - Website Quảng cáo SEO

Website landing page + admin quản lý lead cho dự án **Mega City 2 Nhơn Trạch** (Kim Oanh Group).

## Công nghệ

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)
- Lưu lead bằng file JSON (dễ nâng cấp lên database sau)

## Cài đặt & Chạy

```bash
cd mega-city-2
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

### Admin Dashboard

Truy cập: [http://localhost:3000/admin](http://localhost:3000/admin)

**Mật khẩu mặc định:** `megacity2admin`  
(Hãy đổi trong file `src/app/admin/page.tsx` trước khi deploy thật)

## Cấu trúc chính

```
src/
├── app/
│   ├── page.tsx          # Trang chủ (Hero + sections + form)
│   ├── layout.tsx
│   ├── globals.css
│   ├── admin/page.tsx    # Dashboard quản lý lead
│   └── api/leads/route.ts # API lưu & lấy lead
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LeadForm.tsx
│   └── Footer.tsx
└── lib/utils.ts
data/
└── leads.json            # File lưu lead (tự tạo khi có submit)
```

## Tính năng đã có (Giai đoạn 2)

- Trang chủ bắt mắt: Hero, tổng quan, vị trí, tiện ích, bảng giá, form đăng ký
- Form lead gửi về API → lưu JSON
- Admin: đăng nhập đơn giản, xem danh sách lead, filter, xuất CSV
- SEO meta cơ bản (title, description, Open Graph)
- Responsive mobile-first
- UI hiện đại với gradient, card hover, animation nhẹ

## Bước tiếp theo (Giai đoạn 3+)

- Thêm map tương tác (Google Maps / Leaflet)
- Gallery ảnh / video thực tế
- Blog / tin tức cập nhật tiến độ
- Auth thật (NextAuth) + phân quyền
- Database (Prisma + PostgreSQL / Supabase)
- UTM tracking, Google Analytics
- Tối ưu Core Web Vitals & schema markup đầy đủ

## Lưu ý

- File `data/leads.json` chứa thông tin khách hàng → bảo mật khi deploy.
- Thay số hotline, email, mật khẩu admin theo thực tế.
- Hình ảnh placeholder hiện tại dùng icon. Thêm ảnh thật vào `public/` và dùng `next/image`.
