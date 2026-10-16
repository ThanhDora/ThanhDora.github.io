# Kế hoạch chi tiết xây dựng trang web Profile cá nhân
## Đẩy lên GitHub Pages + Cấu hình Custom Domain

**Ngày lập kế hoạch:** 11/10/2026  
**Người lập:** Grok (theo yêu cầu của Thanh Dora)

---

## 1. Mục tiêu tổng quan

- Xây dựng trang web profile cá nhân (portfolio) chuyên nghiệp để thể hiện kỹ năng, dự án và kinh nghiệm.
- Host miễn phí trên **GitHub Pages**.
- Gắn **custom domain** (thay vì `username.github.io`).
- Tối ưu hiệu năng, SEO cơ bản và dễ bảo trì/cập nhật nội dung.

**Lưu ý:** Bạn đã sở hữu domain `thanhdora.site` (đăng ký tại Namecheap, DNS quản lý bởi Cloudflare). Có thể sử dụng subdomain hoặc mua domain mới chuyên biệt hơn.

---

## 2. Đề xuất Tech Stack

| Thành phần     | Lựa chọn khuyến nghị          | Lý do                                                                 | Thay thế                          |
|----------------|-------------------------------|-----------------------------------------------------------------------|-----------------------------------|
| Framework      | **Astro**                     | Static site cực nhanh, hỗ trợ Markdown, islands nếu cần tương tác, deploy GitHub Pages dễ dàng | Next.js (static export)           |
| Styling        | **Tailwind CSS**              | Nhanh, nhất quán, dễ tùy biến                                        | CSS Modules hoặc plain CSS        |
| Content        | Markdown / MDX                | Dễ viết và cập nhật nội dung                                          | JSON + React/Astro components     |
| Deploy         | GitHub Actions + GitHub Pages | Miễn phí, tự động khi push                                            | -                                 |
| Domain         | Custom domain (`.dev` hoặc subdomain hiện có) | Chuyên nghiệp và dễ nhớ                                               | `ThanhDora.github.io` (tạm thời)  |

**Lý do chọn Astro:** Phù hợp với portfolio tĩnh, hiệu năng cao (dễ đạt Lighthouse gần 100), không cần server backend. Có hỗ trợ chính thức từ GitHub Actions.

---

## 3. Phong cách thiết kế (Style)

**Đề xuất phong cách: “Quiet Atelier”**  
Tối giản, tinh tế, ấm áp, tập trung vào typography và nội dung. Phù hợp với aesthetic editorial/serif + warm natural.

### Bảng màu
- **Charcoal**: `#1C1917` (text chính, nền tối)
- **Linen**: `#F5F1EB` (nền sáng)
- **Sage**: `#5F7A6A` hoặc `#6B7F6A` (accent, link, highlight)
- **Warm neutrals phụ**: `#E8E2D9`, `#A89F91`

### Typography
- **Heading**: Serif (Playfair Display, Source Serif 4 hoặc Libre Baskerville)
- **Body**: Sans sạch (Inter, Manrope hoặc system font)

### Đặc điểm thiết kế
- Nhiều whitespace, layout sạch sẽ.
- Subtle hover và transition (không animation nặng).
- Hỗ trợ **Dark / Light mode** toggle.
- Responsive, ưu tiên trải nghiệm mobile.
- Tập trung vào readability và professionalism.

---

## 4. Cấu trúc nội dung trang

**Khuyến nghị:** One-page với anchor navigation + vài trang phụ (nếu cần).

1. **Hero / Giới thiệu ngắn**
   - Tên + title (ví dụ: Full-stack Developer)
   - 1–2 câu giới thiệu bản thân
   - CTA: Xem dự án / Liên hệ / Tải CV

2. **About**
   - Background ngắn gọn
   - Focus: Full-stack (Next.js, Express, Node.js, iOS, DevOps…), AI tooling, business operations

3. **Skills**
   - Nhóm kỹ năng: Frontend, Backend, DevOps/Infrastructure, Tools, Khác

4. **Projects** (phần quan trọng nhất)
   - 3–6 dự án nổi bật
   - Mỗi dự án gồm: mô tả ngắn, tech stack, link live/GitHub, screenshot/thumbnail

5. **Experience / Education**
   - Timeline ngắn hoặc danh sách rõ ràng

6. **Contact**
   - Email, GitHub, LinkedIn và các mạng xã hội khác
   - Form liên hệ đơn giản (có thể tích hợp dịch vụ form miễn phí nếu cần)

7. **Tuỳ chọn**
   - Trang Blog/Notes (Markdown)
   - Trang Resume riêng

---

## 5. Kế hoạch triển khai theo giai đoạn

### Giai đoạn 1: Chuẩn bị (1–2 ngày)
- Quyết định domain cuối cùng.
- Tạo repository GitHub (khuyến nghị: `ThanhDora.github.io` cho user site).
- Khởi tạo project Astro:
  ```bash
  npm create astro@latest
  # Chọn template có Tailwind hoặc blank rồi cài đặt Tailwind
  ```
- Cấu hình `astro.config.mjs` với thuộc tính `site` trỏ về domain cuối cùng.
- Thiết lập cấu trúc thư mục và layout cơ bản.

### Giai đoạn 2: Xây dựng nội dung & giao diện (3–7 ngày)
- Implement layout (header/navigation, footer, theme toggle).
- Xây dựng từng section theo phong cách Quiet Atelier.
- Viết nội dung (Markdown hoặc component).
- Tối ưu hình ảnh, responsive và accessibility cơ bản.
- Test local kỹ lưỡng.

### Giai đoạn 3: Deploy GitHub Pages
- Tạo file `.github/workflows/deploy.yml` sử dụng GitHub Action chính thức của Astro.
- Trong Settings của repository → Pages → chọn Source: **GitHub Actions**.
- Push code → Action tự động build và deploy.
- Kiểm tra site tại địa chỉ `ThanhDora.github.io`.

### Giai đoạn 4: Custom Domain
- Trong Settings → Pages → Custom domain: nhập domain mong muốn.
- Tạo file `public/CNAME` chứa tên domain (Astro sẽ copy vào thư mục build).
- Cấu hình DNS records (chi tiết ở mục 6).
- Bật **Enforce HTTPS** sau khi DNS đã propagate.
- Verify domain trong GitHub account settings (thêm TXT record) để tăng bảo mật.

### Giai đoạn 5: Tối ưu & hoàn thiện
- SEO: meta tags, Open Graph, sitemap.xml, robots.txt.
- Performance: tối ưu ảnh, lazy loading.
- Analytics (tùy chọn: Plausible, Umami hoặc Google Analytics 4).
- Tạo custom 404 page.

---

## 6. Cấu hình Custom Domain chi tiết

### Lựa chọn domain khuyến nghị
1. **Sử dụng subdomain hiện có** (nhanh nhất):  
   Ví dụ: `profile.thanhdora.site` hoặc `me.thanhdora.site` → CNAME trỏ về `ThanhDora.github.io`.

2. **Mua domain mới**:  
   Ưu tiên TLD **`.dev`** (ví dụ: `thanhdora.dev` hoặc `thanh.dev`).  
   - Phù hợp với developer  
   - Được Google quản lý  
   - Bắt buộc HTTPS mặc định

3. **Apex domain** (ví dụ: `example.com`): Cần cấu hình A + AAAA records.

### DNS Records chuẩn (theo tài liệu GitHub hiện tại)

#### Cho subdomain (www hoặc profile)
| Type  | Name    | Value                  |
|-------|---------|------------------------|
| CNAME | profile | ThanhDora.github.io    |
| CNAME | www     | ThanhDora.github.io    |

#### Cho apex domain
**A records (IPv4):**
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

**AAAA records (IPv6 – khuyến nghị):**
- `@` → `2606:50c0:8000::153`
- `@` → `2606:50c0:8001::153`
- `@` → `2606:50c0:8002::153`
- `@` → `2606:50c0:8003::153`

**Lưu ý:**
- DNS của `thanhdora.site` đang được quản lý bởi Cloudflare → cấu hình rất thuận tiện.
- Luôn verify domain ở cấp tài khoản GitHub (TXT record).
- Thời gian DNS propagate: vài phút đến 24–48 giờ.
- Sau khi site hoạt động ổn định, bật **Enforce HTTPS**.

**Tài liệu chính thức:**  
[GitHub Docs – Managing a custom domain for your GitHub Pages site](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

## 7. Nội dung cần chuẩn bị trước khi bắt đầu

- Ảnh đại diện chất lượng cao.
- Ảnh/screenshot các dự án nổi bật.
- Mô tả ngắn gọn về bản thân và từng dự án (tiếng Việt hoặc song ngữ tùy mục đích).
- Link GitHub, LinkedIn, email liên hệ.
- File CV PDF (tùy chọn).
- Favicon và Open Graph image.

---

## 8. Timeline ước tính

| Giai đoạn                    | Thời gian   | Ghi chú                          |
|-----------------------------|-------------|----------------------------------|
| Chuẩn bị + Setup            | 1–2 ngày    | Domain + Repository + Scaffold   |
| Build giao diện + Nội dung  | 3–7 ngày    | Tùy độ chi tiết và polish        |
| Deploy + Cấu hình Domain    | 1–2 ngày    | Bao gồm thời gian chờ DNS        |
| Tối ưu (SEO, Performance)   | 1–2 ngày    |                                  |
| **Tổng cộng**               | **1–2 tuần**| Có thể rút ngắn nếu tập trung    |

---

## 9. Bước tiếp theo đề xuất

1. Quyết định domain cuối cùng (subdomain hiện có hay mua domain `.dev` mới).
2. Xác nhận tech stack (Astro + Tailwind hoặc muốn sử dụng Next.js).
3. Bắt đầu scaffold project và triển khai layout theo phong cách Quiet Atelier.

---

**Ghi chú:** File này có thể được cập nhật và mở rộng theo quá trình triển khai thực tế.

---
*Kế hoạch được lập ngày 11 tháng 10 năm 2026.*
