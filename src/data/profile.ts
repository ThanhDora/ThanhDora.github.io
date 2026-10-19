// Site content. Every fact here comes from ThanhDora's GitHub profile and repositories.
// Edit this file to update the site; do not add claims that cannot be backed up.

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack Web' | 'Telegram Bots' | 'iOS';
  /** Repository creation month, from the GitHub API (YYYY-MM). */
  started: string;
  summary: string;
  /** Short bullets shown on the home-page card. */
  highlights: string[];
  /** Detail page (/projects/<id>/): paragraphs, key features and how it works. */
  overview: string[];
  features: string[];
  architecture: string[];
  /** Optional caveat shown on the detail page. */
  note?: string;
  /** Date of the latest commit on the default branch (YYYY-MM-DD). */
  lastCommit: string;
  stack: string[];
  status?: string;
  /** Only set when a public deployment exists. */
  liveUrl?: string;
  repoUrl: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/** Work history. TODO(user): add real roles here, e.g.
 *  { period: '2024 — Present', role: 'Full-Stack Developer', organization: 'Company', location: 'Vietnam',
 *    summary: 'What you did there.', technologies: ['Next.js'] }
 *  The "Work experience" block on the home page and resume appears automatically once this has entries. */
export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  summary: string;
  technologies?: string[];
}

/** Education. TODO(user): add school / degree / years. Rendered only when non-empty. */
export interface EducationItem {
  period: string;
  school: string;
  degree: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export const PROFILE_DATA = {
  identity: {
    name: 'Lê Thanh Đạt',
    handle: 'ThanhDora',
    monogram: 'TD.',
    role: 'Full-Stack Developer',
    tagline:
      'Full-stack developer in Vietnam building web apps with Next.js and Node.js, Telegram bots in Python, and iOS apps in Swift.',
    location: 'Vietnam',
    timezone: 'ICT (UTC+7)',
    domain: 'thanhdora.github.io',
    email: 'ThanhDora3605@gmail.com',
    github: 'https://github.com/ThanhDora',
  },

  // Socials linked from github.com/ThanhDora (verified via the GitHub API).
  // TODO(user): add LinkedIn here if you have one.
  socials: [
    { label: 'GitHub', handle: '@ThanhDora', url: 'https://github.com/ThanhDora' },
    { label: 'Facebook', handle: 'LeThanhDat.Dev', url: 'https://www.facebook.com/LeThanhDat.Dev/' },
    { label: 'Instagram', handle: '@lee.thanh_dev_', url: 'https://www.instagram.com/lee.thanh_dev_/' },
    { label: 'X', handle: '@ThanhDora3605', url: 'https://x.com/ThanhDora3605' },
  ] satisfies SocialLink[],

  hero: {
    label: 'Full-Stack Developer · Vietnam',
    headlinePrefix: 'I build',
    headlineItalic: 'web apps, bots and iOS apps',
    headlineSuffix: 'from the interface to the server.',
    lead: 'I am Lê Thanh Đạt (ThanhDora). I work across Next.js and React on the front end, Express, Prisma, PostgreSQL and Redis on the back end, Python for Telegram bots, and Swift for iOS.',
  },

  about: {
    heading: 'Full-stack, from product UI to backend and deployment.',
    paragraphs: [
      'I like working on whole products: the interface people use, the API and database behind it, and the deployment that keeps it running.',
      'Besides product code, I write automation tools and Telegram bots, and use AI tools to speed up day-to-day work.',
      'The projects below are my own open-source and personal work. Source code for each is on GitHub.',
    ],
  },

  skills: [
    { category: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MySQL / MariaDB', 'Redis', 'MongoDB', 'Socket.IO'] },
    { category: 'Mobile', items: ['Swift', 'SwiftUI', 'iOS', 'Objective-C'] },
    { category: 'Bots & Automation', items: ['Python', 'Pyrogram', 'Telegram Bot API', 'Scripting'] },
    { category: 'DevOps & Tools', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'Vercel', 'Linux'] },
  ] satisfies SkillGroup[],

  projects: [
    {
      id: 'dora-marketplace',
      title: 'DORA Marketplace',
      category: 'Full-Stack Web',
      started: '2026-05',
      lastCommit: '2026-05-14',
      summary:
        'A marketplace for digital goods such as accounts, API keys, licenses and files, split into a Next.js client and an Express server.',
      highlights: [
        'Express + Prisma + PostgreSQL + Redis backend with Socket.IO, Zod and JWT',
        'Google OAuth, email via Nodemailer, and MoMo, SePay and PayPal payments',
        'Docker Compose dev stack with PostgreSQL, Redis, Mailhog and PgAdmin',
      ],
      overview: [
        'DORA Marketplace (the repository is titled “MINI MARKETPLACE”) is a platform for selling digital products: accounts, keys/licenses and downloadable files. Buyers, sellers and admins each get their own area.',
        'It is built as two separate npm projects: a Next.js App Router client and an Express + TypeScript API backed by Prisma, PostgreSQL and Redis.',
      ],
      features: [
        'Catalog with three product types (account, key, file), cart, wishlist, checkout, order and order-success pages',
        'Roles for users, sellers and admins, enforced by RBAC middleware',
        'Seller tools: subscription plans, payment settings, payouts and a wallet transaction ledger',
        'Sign-in with email or Google OAuth (Passport); JWT access and refresh tokens; verification and password-reset emails from EJS templates via Nodemailer',
        'Payment code paths for an internal platform balance, MoMo, SePay, PayPal and bank transfer',
        'Real-time updates over Socket.IO (e.g. stock changes), buyer–seller chat, notifications and support tickets',
        'AI chat assistant that calls xAI Grok, falling back to OpenAI, with store stats and product search as context',
        'Product reviews and an activity log',
      ],
      architecture: [
        'Client: Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion and the Socket.IO client.',
        'Server: Express organised into routes, controllers, services and middleware — Zod validation, Helmet, CSRF protection, rate limiting and Multer uploads.',
        'Data: a Prisma schema with 23 models (users, products, orders, payouts, wallet transactions, support tickets and more) on PostgreSQL, with Redis via ioredis.',
        'A background job runs every 60 seconds to cancel unpaid orders after a timeout and return their stock.',
        'Local development uses Docker Compose for PostgreSQL, Redis, Mailhog, PgAdmin and Redis Commander; the server has Vitest unit tests and the repo ships a Bruno API collection.',
      ],
      stack: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.IO'],
      liveUrl: 'https://dora-marketplace.vercel.app/',
      repoUrl: 'https://github.com/ThanhDora/DORA-MARKETPLACE',
    },
    {
      id: 'dora-movies',
      title: 'Dora Movies',
      category: 'Full-Stack Web',
      started: '2026-02',
      lastCommit: '2026-02-22',
      summary:
        'A Next.js movie website with catalog, list, actor and director pages, user login, and an admin flow for approving and scheduling movies.',
      highlights: ['Next.js App Router with route handlers for the admin API', 'Deployed on Vercel'],
      overview: [
        'Dora Movies is a Vietnamese-language movie website. Movie data (lists, details, episodes) comes from an external movie API set by an environment variable.',
        'On top of that data the app adds user accounts, personal lists, a VIP plan, Telegram notifications and an admin side for moderating which movies appear.',
      ],
      features: [
        'Browse by list, genre, country, keyword, actor and director; search; a catalog page; movie and episode pages with YouTube trailers',
        'Accounts with NextAuth v5 (Prisma adapter, bcrypt passwords), email verification and password reset sent through Resend',
        'Profile with avatar, favorites, playlists and watch progress',
        'VIP plans paid through VNPay (payment creation and return handler)',
        'Admin pages for movies, users and admins; movies must be approved before they are shown and can be hidden',
        'Telegram bot alerts for system errors, newly synced movies and new sign-ups, via webhook or polling',
      ],
      architecture: [
        'Next.js 16 App Router with React 19; server logic lives in route handlers under app/api.',
        'PostgreSQL through Prisma (10 models: users, favorites, playlists, watch history, movie approvals, VIP plans, payments and auth tokens), with a Supabase migrations folder.',
        'A cron endpoint protected by a bearer secret pulls the latest movie and series slugs from the API into the approval queue.',
        'The API client uses an 8-second timeout, retries and a 60-second in-memory cache.',
        'Swiper powers the carousels. The site is deployed on Vercel.',
      ],
      stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Vercel'],
      liveUrl: 'https://dora-movies.vercel.app',
      repoUrl: 'https://github.com/ThanhDora/Dora-movies',
    },
    {
      id: 'dorateam-forum',
      title: 'DoraTeam Forum',
      category: 'Full-Stack Web',
      started: '2026-03',
      lastCommit: '2026-03-16',
      summary:
        'A forum, news board and knowledge-sharing site for the DoraTeam community, with a dark, emerald-toned interface.',
      highlights: [
        'Next.js front end with Tailwind CSS and Framer Motion',
        'Express API with Prisma (MySQL/MariaDB) and Socket.IO',
      ],
      overview: [
        'DoraTeam Forum is a forum, news board and knowledge-sharing site for the DoraTeam community.',
        'The client is a Next.js app and the server is an Express API with Prisma on MariaDB/MySQL. The interface is dark-first with an emerald accent.',
      ],
      features: [
        'Forum organised into categories, channels and tags, with threads, messages and likes on both',
        'Tutorials section with separate create, edit and delete permissions',
        'Rich text editor built on TipTap (tables, images, links, code blocks, colors, alignment) and Markdown rendering with GitHub-flavoured Markdown',
        'Discord-style roles using a BigInt permission bitfield (administrator, manage roles, channels and messages, kick/ban, tutorials, audit log)',
        'Real-time updates over Socket.IO for threads, messages, tutorials, like counts and online users',
        'Admin area, user profiles and file uploads; a default admin account is created on first run',
      ],
      architecture: [
        'FrontEnd: Next.js 16, React 19, Tailwind CSS, shadcn / Base UI components, Framer Motion, next-themes and Sonner toasts.',
        'Server: Express 5 with Zod, JWT, bcrypt, Helmet, Morgan and Multer.',
        'Database: Prisma with the MariaDB adapter, 9 models (users, roles, tutorials, forum categories, channels, tags, threads, messages, likes).',
      ],
      stack: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'Socket.IO'],
      repoUrl: 'https://github.com/ThanhDora/Forum-DoraTeam',
    },
    {
      id: 'testflight-slot-monitor',
      title: 'TestFlight Slot Monitor',
      category: 'iOS',
      started: '2026-05',
      lastCommit: '2026-05-18',
      summary:
        'Watches TestFlight beta links and alerts as soon as a slot opens, through an iOS app, a Python server and a Telegram bot.',
      highlights: [
        'Python server: TestFlight page scraper, periodic checks, REST API with API-key auth, MongoDB history',
        'SwiftUI app: live dashboard, push notifications, background checks',
        'Telegram bot: status, device approval and real-time alerts via inline buttons',
      ],
      overview: [
        'TestFlight beta slots fill up quickly. This system checks TestFlight links on a schedule (as often as every 5 seconds) and notifies as soon as a slot opens — through iOS push notifications, the iOS app and a Telegram bot.',
      ],
      features: [
        'Server: scrapes TestFlight pages to detect slot status, with checks every 5 seconds to 24 hours',
        'REST API for the app (manage links, trigger checks, read status), authenticated with an X-API-Key header',
        'Status-change history stored with a 30-day TTL',
        'iOS app: real-time dashboard, add/remove links, push notifications, background checks, history and settings',
        'Device activation: a random code that the owner approves or rejects in Telegram, and can revoke later',
        'Telegram bot with an inline-button menu for status, device management and alerts; it only responds to the owner',
      ],
      architecture: [
        'iOS app: SwiftUI, Observation, BackgroundTasks and UserNotifications.',
        'Server: Python 3 using the standard-library http.server with threads, Requests and regex for scraping, and PyMongo.',
        'Database: MongoDB (links, settings, devices, history, counters).',
        'Bot: raw Telegram Bot API calls over urllib.',
      ],
      note: 'The public repository contains the documentation; the iOS app is linked as a Git submodule.',
      stack: ['Swift', 'SwiftUI', 'Python', 'MongoDB', 'Telegram Bot API'],
      repoUrl: 'https://github.com/ThanhDora/TestFlight-Slot-Monitor-Bot',
    },
    {
      id: 'dora-email',
      title: 'Dora-Email',
      category: 'Full-Stack Web',
      started: '2026-08',
      lastCommit: '2026-08-11',
      summary:
        'A free temporary (disposable) email web app: pick a domain, get a random or custom address with no sign-up, and read incoming mail in the browser.',
      highlights: [
        'Inbox refreshes automatically every few seconds; one-click copy of the address',
        'Next.js route handlers proxy the domain list and messages from an upstream mail API configured by environment variables',
        'Deployed on Vercel',
      ],
      overview: [
        'Dora-Email is a free disposable email service: choose a domain, take a random or custom address, and receive mail immediately without signing up.',
      ],
      features: [
        'Domain picker and a random address generator, or type your own username',
        'Inbox that refreshes every 5 seconds with a visible countdown',
        'Message view that renders the email HTML in an iframe',
        'Pulls verification data out of emails — OTP codes, PINs, verification and magic links, tokens — so each can be copied in one click',
        'Copy-address button and a separate list/detail tab layout on mobile',
      ],
      architecture: [
        'Next.js 16 App Router with React 19 and TypeScript; the UI is a single client page.',
        'Two route handlers, /api/domains and /api/messages, proxy requests to an upstream mail API whose base URL and endpoints come from environment variables. The domain list is de-duplicated and message HTML is cleaned up before it reaches the browser.',
        'Deployed on Vercel.',
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
      liveUrl: 'https://dora-email.vercel.app',
      repoUrl: 'https://github.com/ThanhDora-3605/Dora-Email',
    },
    {
      id: 'dorasuper-bot',
      title: 'DoraSuper Bot',
      category: 'Telegram Bots',
      started: '2026-03',
      lastCommit: '2026-05-23',
      summary:
        'A Telegram group-management bot with admin commands, custom replies and a modular plugin structure.',
      highlights: ['Python 3 with Pyrogram, data stored in MongoDB'],
      overview: [
        'DoraSuper Bot is a Telegram bot for managing groups, built with Python 3, Pyrogram and MongoDB. Each feature is a separate plugin module, so new ones are easy to add.',
        'Development has stopped; the README says bugs are no longer supported.',
      ],
      features: [
        '50 plugin modules covering group admin (bans, locks, filters, notes, blacklists, auto-approve, admin logs), utilities (OCR, media info, weather, currency, gold price, IMDb search, downloads) and fun commands',
        'AI chat plugins, including one for Google Gemini',
        'Broadcasts, auto-forwarding, check-ins and karma',
        'Session-string generator and per-chat language setting (Vietnamese locale included)',
      ],
      architecture: [
        'Python 3.10–3.13 with pyrofork (a Pyrogram fork) and TgCrypto; Telethon for session generation.',
        'MongoDB via async_pymongo / PyMongo; APScheduler for scheduled jobs.',
        'Configured through config.env (API ID/hash, bot token, database URI, log channel, sudo users) and run with shell scripts.',
        'Licensed under AGPL-3.0.',
      ],
      status: 'No longer maintained',
      stack: ['Python', 'Pyrogram', 'MongoDB', 'Telegram'],
      repoUrl: 'https://github.com/ThanhDora/DoraSuper_Bot',
    },
  ] satisfies ProjectItem[],

  // TODO(user): fill in real work history; leave empty to hide the block.
  experience: [] as ExperienceItem[],

  // TODO(user): fill in real education; leave empty to hide the block.
  education: [] as EducationItem[],
};
