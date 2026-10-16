# Thanh Dora

**Thanh Dora (Lê Thanh Đạt)** — Full-Stack Engineer & Systems Architect, Hà Nội.

Trang portfolio, CV in được, và nhật ký kỹ thuật theo phong cách *Quiet Atelier*. Repo này là nguồn của [ThanhDora.github.io](https://ThanhDora.github.io).

> Engineering calm, high-leverage systems where software meets business operations.

[Xem trang](https://ThanhDora.github.io) · [CV](https://ThanhDora.github.io/resume) · [Blog](https://ThanhDora.github.io/blog) · [Email](mailto:thanhdora3605@gmail.com)

![Astro](https://img.shields.io/badge/Astro-4-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-222?logo=github)

## Giới thiệu

Mình thiết kế phần mềm để người dùng thấy nó đơn giản, còn kiến trúc bên dưới thì chặt. Công việc trải từ giao diện web, API, ứng dụng iOS, đến hạ tầng và công cụ AI gắn vào vận hành thật.

Repo này gom ba thứ:

- **Portfolio một trang** — about, kỹ năng, dự án, kinh nghiệm, liên hệ
- **CV** tại `/resume`, bố cục sẵn để in
- **Blog** viết bằng Markdown trong Content Collections

Nội dung người đọc thấy nằm ở một chỗ: [`src/data/profile.ts`](./src/data/profile.ts). Bài viết nằm trong [`src/content/blog/`](./src/content/blog/).

## Trang này có gì

| Phần | Đường dẫn | Việc nó làm |
| --- | --- | --- |
| Portfolio | `/` | Một trang, điều hướng bằng anchor |
| CV | `/resume` | Sơ yếu lý lịch, in được |
| Blog | `/blog` | Nhật ký kỹ thuật |
| 404 | `/404` | Trang lỗi cùng tông editorial |

Giao diện dùng linen ấm, mực than, và sage. Chuyển sáng/tối bằng nút trên trang, hoặc phím `T`.

Font: Playfair Display cho tiêu đề, Manrope cho nội dung, JetBrains Mono cho metadata.

## Việc mình làm

Bốn mảng hiện trên portfolio:

- **Web** — Next.js, React, TypeScript, Astro, Tailwind
- **Backend** — Node.js, Express, PostgreSQL, Prisma, Redis
- **iOS** — Swift, SwiftUI, lưu trữ offline, phát hành TestFlight
- **Hạ tầng & AI** — Docker, Cloudflare, GitHub Actions, Linux, agent và workflow có kiểm soát

Case study trên trang (DoraOps, Kanso, Chronicle iOS, Aegis Edge) là hồ sơ năng lực. Mã nguồn của chúng không nằm trong repo này.

## Chạy local

Cần Node.js 18 trở lên.

```bash
npm install
npm run dev
```

Mở [http://localhost:4321](http://localhost:4321).

```bash
npm run build     # xuất site tĩnh vào ./dist
npm run preview   # xem bản build
```

## Cấu trúc

```text
├── .github/workflows/deploy.yml   # GitHub Pages
├── public/                        # favicon, og-image, robots.txt
├── src/
│   ├── components/                # Header, Footer, sơ đồ dự án
│   ├── content/blog/              # bài Markdown
│   ├── data/profile.ts            # bio, kỹ năng, dự án, kinh nghiệm
│   ├── layouts/BaseLayout.astro   # SEO, JSON-LD, theme
│   ├── pages/                     # /, /resume, /blog, /404
│   └── styles/global.css
└── astro.config.mjs               # site: https://ThanhDora.github.io
```

## Sửa nội dung

1. Thông tin cá nhân, kỹ năng, dự án, timeline: [`src/data/profile.ts`](./src/data/profile.ts).
2. Bài viết: thêm hoặc sửa file `.md` trong [`src/content/blog/`](./src/content/blog/).
3. Domain riêng (`thanhdora.site` hoặc `profile.thanhdora.site`):
   - đổi `site` trong [`astro.config.mjs`](./astro.config.mjs)
   - tạo `public/CNAME` với domain đó
   - trỏ bản ghi DNS trên Cloudflare theo [`ke-hoach-trang-web-profile.md`](./ke-hoach-trang-web-profile.md)

Push lên nhánh mặc định sẽ kích hoạt workflow trong [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) và xuất bản GitHub Pages.

## Liên hệ

| | |
| --- | --- |
| Web | [thanhdora.github.io](https://ThanhDora.github.io) |
| GitHub | [@ThanhDora](https://github.com/ThanhDora) |
| LinkedIn | [thanhdora](https://linkedin.com/in/thanhdora) |
| Facebook | [ThanhDora](https://facebook.com/ThanhDora) |
| X | [@ThanhDora](https://x.com/ThanhDora) |
| Email | [thanhdora3605@gmail.com](mailto:thanhdora3605@gmail.com) |
| Nơi ở | Hà Nội · ICT (UTC+7) |

Đang nhận một số việc kỹ thuật và kiến trúc hệ thống.
