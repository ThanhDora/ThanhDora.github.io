import type { LocaleContent } from './types';

const zh: LocaleContent = {
  identity: {
    role: '全栈开发者',
    tagline: '越南的全栈开发者，用 Next.js 和 Node.js 构建 Web 应用，用 Python 编写 Telegram 机器人，用 Swift 开发 iOS 应用。',
    location: '越南',
    timezone: 'ICT (UTC+7)',
  },
  hero: {
    label: '全栈开发者 · 越南',
    headlinePrefix: '从界面到服务器，我构建',
    headlineItalic: 'Web 应用、机器人和 iOS 应用',
    headlineSuffix: '。',
    lead: '我是 Lê Thanh Đạt（ThanhDora）。前端使用 Next.js 和 React，后端使用 Express、Prisma、PostgreSQL 和 Redis，用 Python 编写 Telegram 机器人，用 Swift 开发 iOS。',
  },
  about: {
    heading: '全栈：从产品界面到后端与部署。',
    paragraphs: [
      '我喜欢参与完整的产品：用户使用的界面、背后的 API 和数据库，以及让它持续运行的部署。',
      '除了产品代码，我还编写自动化工具和 Telegram 机器人，并使用 AI 工具加快日常工作。',
      '下面的项目是我自己的开源项目和个人作品，每个项目的源代码都在 GitHub 上。',
    ],
  },
  skillCategories: ['前端', '后端', '移动端', '机器人与自动化', 'DevOps 与工具'],
  skillItems: { Scripting: '脚本编写' },
  projects: {
    'dora-marketplace': {
      summary: '一个数字商品交易平台，出售账号、API 密钥、许可证和文件等，分为 Next.js 客户端和 Express 服务端。',
      highlights: [
        'Express + Prisma + PostgreSQL + Redis 后端，配合 Socket.IO、Zod 和 JWT',
        'Google OAuth、通过 Nodemailer 发送邮件，以及 MoMo、SePay 和 PayPal 支付',
        '基于 Docker Compose 的开发环境，包含 PostgreSQL、Redis、Mailhog 和 PgAdmin',
      ],
      overview: [
        'DORA Marketplace（仓库名为“MINI MARKETPLACE”）是一个销售数字产品的平台：账号、密钥/许可证和可下载文件。买家、卖家和管理员各有自己的区域。',
        '它由两个独立的 npm 项目组成：Next.js App Router 客户端，以及基于 Prisma、PostgreSQL 和 Redis 的 Express + TypeScript API。',
      ],
      features: [
        '包含三种商品类型（账号、密钥、文件）的商品目录、购物车、收藏夹、结账、订单页和下单成功页',
        '用户、卖家和管理员角色，由 RBAC 中间件控制',
        '卖家工具：订阅套餐、收款设置、提现和钱包交易流水',
        '使用邮箱或 Google OAuth（Passport）登录；JWT 访问令牌和刷新令牌；通过 Nodemailer 发送基于 EJS 模板的验证邮件和重置密码邮件',
        '代码中的支付流程支持平台内部余额、MoMo、SePay、PayPal 和银行转账',
        '通过 Socket.IO 实时更新（例如库存变化）、买卖双方聊天、通知和支持工单',
        'AI 聊天助手调用 xAI Grok，失败时回退到 OpenAI，并以店铺统计和商品搜索作为上下文',
        '商品评价和活动日志',
      ],
      architecture: [
        '客户端：Next.js（App Router）、React、TypeScript、Tailwind CSS、Framer Motion 和 Socket.IO 客户端。',
        '服务端：Express，按 routes、controllers、services 和 middleware 组织 —— Zod 校验、Helmet、CSRF 防护、限流和 Multer 上传。',
        '数据：Prisma schema 包含 23 个模型（用户、商品、订单、提现、钱包交易、支持工单等），运行在 PostgreSQL 上，并通过 ioredis 使用 Redis。',
        '后台任务每 60 秒运行一次，取消超时未支付的订单并归还库存。',
        '本地开发使用 Docker Compose 运行 PostgreSQL、Redis、Mailhog、PgAdmin 和 Redis Commander；服务端有 Vitest 单元测试，仓库附带 Bruno API 集合。',
      ],
    },
    'dora-movies': {
      summary: '一个基于 Next.js 的电影网站，包含目录、列表、演员和导演页面、用户登录，以及用于审核和排期电影的管理流程。',
      highlights: ['Next.js App Router，管理 API 使用 route handler 实现', '部署在 Vercel 上'],
      overview: [
        'Dora Movies 是一个越南语电影网站。电影数据（列表、详情、剧集）来自通过环境变量配置的外部电影 API。',
        '在这些数据之上，应用增加了用户账号、个人列表、VIP 套餐、Telegram 通知，以及用于审核哪些电影可以展示的管理后台。',
      ],
      features: [
        '按列表、类型、国家、关键词、演员和导演浏览；搜索；目录页；带 YouTube 预告片的电影页和剧集页',
        '使用 NextAuth v5 的账号系统（Prisma adapter、bcrypt 密码），通过 Resend 发送邮箱验证和重置密码邮件',
        '个人资料，包括头像、收藏、播放列表和观看进度',
        '通过 VNPay 支付的 VIP 套餐（创建支付和处理回调）',
        '电影、用户和管理员的管理页面；电影须经审核后才会展示，也可以被隐藏',
        'Telegram 机器人提醒系统错误、新同步的电影和新注册用户，支持 webhook 或 polling',
      ],
      architecture: [
        'Next.js 16 App Router 与 React 19；服务端逻辑位于 app/api 下的 route handler 中。',
        '通过 Prisma 使用 PostgreSQL（10 个模型：用户、收藏、播放列表、观看历史、电影审核、VIP 套餐、支付和认证令牌），并附有 Supabase 迁移文件夹。',
        '一个由 bearer secret 保护的 cron 端点从 API 拉取最新的电影和剧集 slug，放入审核队列。',
        'API 客户端使用 8 秒超时、重试和 60 秒内存缓存。',
        '轮播图使用 Swiper。网站部署在 Vercel 上。',
      ],
    },
    'dorateam-forum': {
      summary: '为 DoraTeam 社区打造的论坛、新闻板和知识分享网站，采用深色、翡翠绿色调的界面。',
      highlights: ['Next.js 前端，配合 Tailwind CSS 和 Framer Motion', 'Express API，配合 Prisma（MySQL/MariaDB）和 Socket.IO'],
      overview: [
        'DoraTeam Forum 是为 DoraTeam 社区打造的论坛、新闻板和知识分享网站。',
        '客户端是 Next.js 应用，服务端是在 MariaDB/MySQL 上使用 Prisma 的 Express API。界面以深色为主，搭配翡翠绿强调色。',
      ],
      features: [
        '论坛按分类、频道和标签组织，包含主题帖、消息，两者都支持点赞',
        '教程板块，创建、编辑和删除权限相互独立',
        '基于 TipTap 的富文本编辑器（表格、图片、链接、代码块、颜色、对齐），并支持 GitHub 风格的 Markdown 渲染',
        '类似 Discord 的角色系统，使用 BigInt 权限位域（管理员、管理角色、频道和消息、踢出/封禁、教程、审计日志）',
        '通过 Socket.IO 实时更新主题帖、消息、教程、点赞数和在线用户',
        '管理后台、用户资料页和文件上传；首次运行时会创建默认管理员账号',
      ],
      architecture: [
        '前端：Next.js 16、React 19、Tailwind CSS、shadcn / Base UI 组件、Framer Motion、next-themes 和 Sonner 提示。',
        '服务端：Express 5，配合 Zod、JWT、bcrypt、Helmet、Morgan 和 Multer。',
        '数据库：Prisma 搭配 MariaDB adapter，共 9 个模型（用户、角色、教程、论坛分类、频道、标签、主题帖、消息、点赞）。',
      ],
    },
    'testflight-slot-monitor': {
      summary: '监控 TestFlight 测试链接，一旦有名额空出立即提醒，由 iOS 应用、Python 服务端和 Telegram 机器人组成。',
      highlights: [
        'Python 服务端：TestFlight 页面抓取、定时检查、使用 API 密钥认证的 REST API、MongoDB 历史记录',
        'SwiftUI 应用：实时仪表盘、推送通知、后台检查',
        'Telegram 机器人：通过内联按钮查看状态、审批设备和接收实时提醒',
      ],
      overview: [
        'TestFlight 测试名额很快就会被抢完。这个系统按计划检查 TestFlight 链接（最快每 5 秒一次），一旦有名额空出立即通知 —— 通过 iOS 推送通知、iOS 应用和 Telegram 机器人。',
      ],
      features: [
        '服务端：抓取 TestFlight 页面以检测名额状态，检查间隔从 5 秒到 24 小时',
        '供应用使用的 REST API（管理链接、触发检查、读取状态），通过 X-API-Key 请求头认证',
        '状态变化历史记录，保留期（TTL）为 30 天',
        'iOS 应用：实时仪表盘、添加/删除链接、推送通知、后台检查、历史记录和设置',
        '设备激活：生成随机代码，由所有者在 Telegram 中批准或拒绝，之后也可撤销',
        '带内联按钮菜单的 Telegram 机器人，用于查看状态、管理设备和提醒；它只响应所有者',
      ],
      architecture: [
        'iOS 应用：SwiftUI、Observation、BackgroundTasks 和 UserNotifications。',
        '服务端：Python 3，使用标准库 http.server 和多线程，使用 Requests 和正则表达式抓取页面，以及 PyMongo。',
        '数据库：MongoDB（链接、设置、设备、历史记录、计数器）。',
        '机器人：通过 urllib 直接调用 Telegram Bot API。',
      ],
      note: '公开仓库包含文档；iOS 应用以 Git submodule 形式链接。',
    },
    'dora-email': {
      summary: '一个免费的临时（一次性）邮箱 Web 应用：选择域名，无需注册即可获得随机或自定义地址，并在浏览器中阅读收到的邮件。',
      highlights: [
        '收件箱每隔几秒自动刷新；一键复制地址',
        'Next.js route handler 代理从上游邮件 API 获取域名列表和邮件，该 API 通过环境变量配置',
        '部署在 Vercel 上',
      ],
      overview: ['Dora-Email 是一个免费的一次性邮箱服务：选择域名，获取随机或自定义地址，无需注册即可立即收信。'],
      features: [
        '域名选择器和随机地址生成器，也可以自己输入用户名',
        '收件箱每 5 秒刷新一次，并显示倒计时',
        '邮件查看页在 iframe 中渲染邮件 HTML',
        '从邮件中提取验证信息 —— OTP 验证码、PIN、验证链接和魔法链接、令牌 —— 每一项都可一键复制',
        '复制地址按钮，移动端采用独立的列表/详情标签布局',
      ],
      architecture: [
        'Next.js 16 App Router，配合 React 19 和 TypeScript；界面是单个客户端页面。',
        '两个 route handler（/api/domains 和 /api/messages）将请求代理到上游邮件 API，其基础 URL 和端点来自环境变量。域名列表会去重，邮件 HTML 在到达浏览器前会被清理。',
        '部署在 Vercel 上。',
      ],
    },
    'dorasuper-bot': {
      summary: '一个 Telegram 群组管理机器人，具备管理命令、自定义回复和模块化插件结构。',
      highlights: ['Python 3 与 Pyrogram，数据存储在 MongoDB 中'],
      overview: [
        'DoraSuper Bot 是一个用于管理群组的 Telegram 机器人，使用 Python 3、Pyrogram 和 MongoDB 构建。每个功能都是独立的插件模块，因此很容易添加新功能。',
        '开发已停止；README 说明不再提供错误修复支持。',
      ],
      features: [
        '50 个插件模块，涵盖群组管理（封禁、锁定、过滤器、笔记、黑名单、自动批准、管理日志）、实用工具（OCR、媒体信息、天气、汇率、金价、IMDb 搜索、下载）和娱乐命令',
        'AI 聊天插件，其中包括一个 Google Gemini 插件',
        '广播、自动转发、签到和 karma',
        '会话字符串生成器和按群组设置语言（包含越南语本地化）',
      ],
      architecture: [
        'Python 3.10–3.13，使用 pyrofork（Pyrogram 的分支）和 TgCrypto；使用 Telethon 生成会话。',
        '通过 async_pymongo / PyMongo 使用 MongoDB；使用 APScheduler 执行定时任务。',
        '通过 config.env 配置（API ID/hash、机器人令牌、数据库 URI、日志频道、sudo 用户），并用 shell 脚本运行。',
        '采用 AGPL-3.0 许可证。',
      ],
      status: '已停止维护',
    },
  },
};

export default zh;
