import type { LocaleContent } from './types';

const vi: LocaleContent = {
  identity: {
    role: 'Lập trình viên Full-Stack',
    tagline:
      'Lập trình viên full-stack ở Việt Nam, xây dựng ứng dụng web bằng Next.js và Node.js, bot Telegram bằng Python và ứng dụng iOS bằng Swift.',
    location: 'Việt Nam',
    timezone: 'ICT (UTC+7)',
  },
  hero: {
    label: 'Lập trình viên Full-Stack · Việt Nam',
    headlinePrefix: 'Mình xây dựng',
    headlineItalic: 'ứng dụng web, bot và ứng dụng iOS',
    headlineSuffix: 'từ giao diện đến máy chủ.',
    lead: 'Mình là Lê Thanh Đạt (ThanhDora). Mình làm Next.js và React ở phía giao diện, Express, Prisma, PostgreSQL và Redis ở phía máy chủ, Python cho bot Telegram và Swift cho iOS.',
  },
  about: {
    heading: 'Full-stack, từ giao diện sản phẩm đến backend và triển khai.',
    paragraphs: [
      'Mình thích làm trọn vẹn một sản phẩm: giao diện người dùng sử dụng, API và cơ sở dữ liệu phía sau, cùng phần triển khai giúp nó luôn vận hành.',
      'Ngoài code sản phẩm, mình viết công cụ tự động hoá, bot Telegram và dùng các công cụ AI để tăng tốc công việc hằng ngày.',
      'Các dự án bên dưới là dự án mã nguồn mở và cá nhân của mình. Mã nguồn của từng dự án đều có trên GitHub.',
    ],
  },
  skillCategories: ['Frontend', 'Backend', 'Di động', 'Bot & Tự động hoá', 'DevOps & Công cụ'],
  skillItems: { Scripting: 'Viết script' },
  projects: {
    'dora-marketplace': {
      summary:
        'Sàn giao dịch sản phẩm số như tài khoản, API key, license và tệp, tách thành client Next.js và server Express.',
      highlights: [
        'Backend Express + Prisma + PostgreSQL + Redis với Socket.IO, Zod và JWT',
        'Google OAuth, gửi email qua Nodemailer, thanh toán MoMo, SePay và PayPal',
        'Môi trường dev bằng Docker Compose với PostgreSQL, Redis, Mailhog và PgAdmin',
      ],
      overview: [
        'DORA Marketplace (kho mã có tên “MINI MARKETPLACE”) là nền tảng bán sản phẩm số: tài khoản, key/license và tệp tải về. Người mua, người bán và quản trị viên đều có khu vực riêng.',
        'Dự án gồm hai project npm riêng biệt: client Next.js App Router và API Express + TypeScript dùng Prisma, PostgreSQL và Redis.',
      ],
      features: [
        'Danh mục với ba loại sản phẩm (tài khoản, key, tệp), giỏ hàng, danh sách yêu thích, thanh toán, trang đơn hàng và trang đặt hàng thành công',
        'Vai trò người dùng, người bán và quản trị viên, được kiểm soát bằng middleware RBAC',
        'Công cụ cho người bán: gói đăng ký, cài đặt thanh toán, rút tiền và sổ giao dịch ví',
        'Đăng nhập bằng email hoặc Google OAuth (Passport); JWT access và refresh token; email xác minh và đặt lại mật khẩu dựng từ template EJS qua Nodemailer',
        'Luồng thanh toán trong code cho số dư nội bộ, MoMo, SePay, PayPal và chuyển khoản ngân hàng',
        'Cập nhật thời gian thực qua Socket.IO (ví dụ thay đổi tồn kho), chat giữa người mua và người bán, thông báo và ticket hỗ trợ',
        'Trợ lý chat AI gọi xAI Grok, dự phòng bằng OpenAI, dùng thống kê cửa hàng và tìm kiếm sản phẩm làm ngữ cảnh',
        'Đánh giá sản phẩm và nhật ký hoạt động',
      ],
      architecture: [
        'Client: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion và Socket.IO client.',
        'Server: Express tổ chức theo routes, controllers, services và middleware — xác thực dữ liệu bằng Zod, Helmet, chống CSRF, giới hạn tần suất và upload bằng Multer.',
        'Dữ liệu: schema Prisma gồm 23 model (người dùng, sản phẩm, đơn hàng, rút tiền, giao dịch ví, ticket hỗ trợ…) trên PostgreSQL, kèm Redis qua ioredis.',
        'Một tác vụ nền chạy mỗi 60 giây để huỷ đơn chưa thanh toán sau thời gian chờ và hoàn lại tồn kho.',
        'Môi trường phát triển dùng Docker Compose cho PostgreSQL, Redis, Mailhog, PgAdmin và Redis Commander; server có unit test bằng Vitest và kho mã kèm bộ sưu tập API Bruno.',
      ],
    },
    'dora-movies': {
      summary:
        'Trang web phim xây bằng Next.js với các trang danh mục, danh sách, diễn viên và đạo diễn, đăng nhập người dùng và quy trình quản trị để duyệt và lên lịch phim.',
      highlights: ['Next.js App Router với route handler cho API quản trị', 'Triển khai trên Vercel'],
      overview: [
        'Dora Movies là trang web xem thông tin phim bằng tiếng Việt. Dữ liệu phim (danh sách, chi tiết, tập phim) lấy từ một API phim bên ngoài được cấu hình qua biến môi trường.',
        'Dựa trên dữ liệu đó, ứng dụng bổ sung tài khoản người dùng, danh sách cá nhân, gói VIP, thông báo Telegram và khu vực quản trị để kiểm duyệt phim được hiển thị.',
      ],
      features: [
        'Duyệt theo danh sách, thể loại, quốc gia, từ khoá, diễn viên và đạo diễn; tìm kiếm; trang danh mục; trang phim và tập phim kèm trailer YouTube',
        'Tài khoản với NextAuth v5 (Prisma adapter, mật khẩu bcrypt), xác minh email và đặt lại mật khẩu gửi qua Resend',
        'Trang cá nhân với ảnh đại diện, phim yêu thích, playlist và tiến độ xem',
        'Gói VIP thanh toán qua VNPay (tạo thanh toán và xử lý kết quả trả về)',
        'Trang quản trị phim, người dùng và quản trị viên; phim phải được duyệt mới hiển thị và có thể bị ẩn',
        'Bot Telegram báo lỗi hệ thống, phim mới đồng bộ và người dùng mới đăng ký, qua webhook hoặc polling',
      ],
      architecture: [
        'Next.js 16 App Router với React 19; logic phía server nằm trong các route handler dưới app/api.',
        'PostgreSQL qua Prisma (10 model: người dùng, yêu thích, playlist, lịch sử xem, duyệt phim, gói VIP, thanh toán và token xác thực), kèm thư mục migration của Supabase.',
        'Một endpoint cron được bảo vệ bằng bearer secret lấy slug phim lẻ và phim bộ mới nhất từ API vào hàng chờ duyệt.',
        'API client có thời gian chờ 8 giây, thử lại và bộ nhớ đệm trong RAM 60 giây.',
        'Swiper dùng cho các carousel. Trang được triển khai trên Vercel.',
      ],
    },
    'dorateam-forum': {
      summary:
        'Diễn đàn, bảng tin và nơi chia sẻ kiến thức cho cộng đồng DoraTeam, giao diện tối tông xanh ngọc lục bảo.',
      highlights: [
        'Frontend Next.js với Tailwind CSS và Framer Motion',
        'API Express với Prisma (MySQL/MariaDB) và Socket.IO',
      ],
      overview: [
        'DoraTeam Forum là diễn đàn, bảng tin và nơi chia sẻ kiến thức cho cộng đồng DoraTeam.',
        'Client là ứng dụng Next.js, server là API Express dùng Prisma trên MariaDB/MySQL. Giao diện ưu tiên chế độ tối với điểm nhấn màu xanh ngọc lục bảo.',
      ],
      features: [
        'Diễn đàn chia theo danh mục, kênh và thẻ, có chủ đề, tin nhắn và lượt thích cho cả hai',
        'Mục hướng dẫn với quyền tạo, sửa và xoá riêng biệt',
        'Trình soạn thảo văn bản dựa trên TipTap (bảng, hình ảnh, liên kết, khối code, màu chữ, căn lề) và hiển thị Markdown theo chuẩn GitHub',
        'Vai trò kiểu Discord dùng bitfield quyền BigInt (quản trị viên, quản lý vai trò, kênh và tin nhắn, kick/ban, hướng dẫn, nhật ký kiểm tra)',
        'Cập nhật thời gian thực qua Socket.IO cho chủ đề, tin nhắn, hướng dẫn, số lượt thích và người dùng trực tuyến',
        'Khu vực quản trị, trang hồ sơ người dùng và tải tệp lên; tài khoản quản trị mặc định được tạo ở lần chạy đầu tiên',
      ],
      architecture: [
        'FrontEnd: Next.js 16, React 19, Tailwind CSS, component shadcn / Base UI, Framer Motion, next-themes và thông báo Sonner.',
        'Server: Express 5 với Zod, JWT, bcrypt, Helmet, Morgan và Multer.',
        'Cơ sở dữ liệu: Prisma với adapter MariaDB, 9 model (người dùng, vai trò, hướng dẫn, danh mục diễn đàn, kênh, thẻ, chủ đề, tin nhắn, lượt thích).',
      ],
    },
    'testflight-slot-monitor': {
      summary:
        'Theo dõi các liên kết TestFlight beta và báo ngay khi có slot trống, qua ứng dụng iOS, server Python và bot Telegram.',
      highlights: [
        'Server Python: trình thu thập trang TestFlight, kiểm tra định kỳ, REST API xác thực bằng API key, lịch sử lưu trong MongoDB',
        'Ứng dụng SwiftUI: bảng điều khiển trực tiếp, thông báo đẩy, kiểm tra nền',
        'Bot Telegram: trạng thái, duyệt thiết bị và cảnh báo thời gian thực qua nút inline',
      ],
      overview: [
        'Slot TestFlight beta hết rất nhanh. Hệ thống này kiểm tra các liên kết TestFlight theo lịch (dày nhất 5 giây một lần) và thông báo ngay khi có slot — qua thông báo đẩy trên iOS, ứng dụng iOS và bot Telegram.',
      ],
      features: [
        'Server: thu thập trang TestFlight để phát hiện trạng thái slot, kiểm tra mỗi 5 giây đến 24 giờ',
        'REST API cho ứng dụng (quản lý liên kết, kích hoạt kiểm tra, xem trạng thái), xác thực bằng header X-API-Key',
        'Lịch sử thay đổi trạng thái lưu với TTL 30 ngày',
        'Ứng dụng iOS: bảng điều khiển thời gian thực, thêm/xoá liên kết, thông báo đẩy, kiểm tra nền, lịch sử và cài đặt',
        'Kích hoạt thiết bị: mã ngẫu nhiên được chủ sở hữu duyệt hoặc từ chối trong Telegram, và có thể thu hồi sau',
        'Bot Telegram với menu nút inline để xem trạng thái, quản lý thiết bị và nhận cảnh báo; bot chỉ phản hồi chủ sở hữu',
      ],
      architecture: [
        'Ứng dụng iOS: SwiftUI, Observation, BackgroundTasks và UserNotifications.',
        'Server: Python 3 dùng http.server của thư viện chuẩn với đa luồng, Requests và regex để thu thập trang, cùng PyMongo.',
        'Cơ sở dữ liệu: MongoDB (liên kết, cài đặt, thiết bị, lịch sử, bộ đếm).',
        'Bot: gọi trực tiếp Telegram Bot API qua urllib.',
      ],
      note: 'Kho mã công khai chứa tài liệu; ứng dụng iOS được liên kết dưới dạng Git submodule.',
    },
    'dora-email': {
      summary:
        'Ứng dụng web email tạm thời (dùng một lần) miễn phí: chọn tên miền, nhận địa chỉ ngẫu nhiên hoặc tự đặt mà không cần đăng ký, và đọc thư đến ngay trên trình duyệt.',
      highlights: [
        'Hộp thư tự làm mới sau vài giây; sao chép địa chỉ bằng một cú nhấp',
        'Route handler của Next.js làm proxy lấy danh sách tên miền và thư từ một API mail bên ngoài cấu hình qua biến môi trường',
        'Triển khai trên Vercel',
      ],
      overview: [
        'Dora-Email là dịch vụ email dùng một lần miễn phí: chọn tên miền, lấy địa chỉ ngẫu nhiên hoặc tự đặt, và nhận thư ngay lập tức mà không cần đăng ký.',
      ],
      features: [
        'Chọn tên miền và tạo địa chỉ ngẫu nhiên, hoặc tự nhập tên người dùng',
        'Hộp thư tự làm mới mỗi 5 giây kèm đồng hồ đếm ngược',
        'Xem thư với nội dung HTML hiển thị trong iframe',
        'Tách dữ liệu xác minh từ email — mã OTP, mã PIN, liên kết xác minh và magic link, token — để sao chép từng mục bằng một cú nhấp',
        'Nút sao chép địa chỉ và bố cục tab danh sách/chi tiết riêng trên di động',
      ],
      architecture: [
        'Next.js 16 App Router với React 19 và TypeScript; giao diện là một trang client duy nhất.',
        'Hai route handler /api/domains và /api/messages chuyển tiếp yêu cầu tới một API mail bên ngoài, có base URL và endpoint lấy từ biến môi trường. Danh sách tên miền được loại trùng và HTML của thư được làm sạch trước khi gửi tới trình duyệt.',
        'Triển khai trên Vercel.',
      ],
    },
    'dorasuper-bot': {
      summary: 'Bot Telegram quản lý nhóm với lệnh quản trị, phản hồi tuỳ chỉnh và cấu trúc plugin dạng mô-đun.',
      highlights: ['Python 3 với Pyrogram, dữ liệu lưu trong MongoDB'],
      overview: [
        'DoraSuper Bot là bot Telegram quản lý nhóm, xây bằng Python 3, Pyrogram và MongoDB. Mỗi tính năng là một mô-đun plugin riêng nên dễ bổ sung tính năng mới.',
        'Dự án đã ngừng phát triển; README ghi rõ không còn hỗ trợ sửa lỗi.',
      ],
      features: [
        '50 mô-đun plugin gồm quản trị nhóm (ban, khoá, bộ lọc, ghi chú, danh sách đen, tự duyệt, nhật ký quản trị), tiện ích (OCR, thông tin media, thời tiết, tiền tệ, giá vàng, tìm kiếm IMDb, tải xuống) và lệnh giải trí',
        'Plugin chat AI, trong đó có một plugin cho Google Gemini',
        'Phát thông báo hàng loạt, tự động chuyển tiếp, điểm danh và karma',
        'Tạo session string và cài đặt ngôn ngữ theo từng nhóm (có sẵn bản địa hoá tiếng Việt)',
      ],
      architecture: [
        'Python 3.10–3.13 với pyrofork (bản fork của Pyrogram) và TgCrypto; Telethon để tạo session.',
        'MongoDB qua async_pymongo / PyMongo; APScheduler cho các tác vụ định kỳ.',
        'Cấu hình qua config.env (API ID/hash, bot token, URI cơ sở dữ liệu, kênh log, người dùng sudo) và chạy bằng các script shell.',
        'Giấy phép AGPL-3.0.',
      ],
      status: 'Ngừng phát triển',
    },
  },
};

export default vi;
