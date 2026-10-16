// Site content. Every fact here comes from ThanhDora's GitHub profile and repositories.
// Edit this file to update the site; do not add claims that cannot be backed up.

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full-Stack Web' | 'Telegram Bots' | 'iOS';
  /** Repository creation month, from the GitHub API (YYYY-MM). */
  started: string;
  summary: string;
  highlights: string[];
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
    website: 'https://thanhdora.site',
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
      summary:
        'A marketplace for digital goods such as accounts, API keys, licenses and files, split into a Next.js client and an Express server.',
      highlights: [
        'Express + Prisma + PostgreSQL + Redis backend with Socket.IO, Zod and JWT',
        'Google OAuth, email via Nodemailer, and MoMo, SePay and PayPal payments',
        'Docker Compose dev stack with PostgreSQL, Redis, Mailhog and PgAdmin',
      ],
      stack: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.IO'],
      liveUrl: 'https://thanhdora.site/',
      repoUrl: 'https://github.com/ThanhDora/DORA-MARKETPLACE',
    },
    {
      id: 'dora-movies',
      title: 'Dora Movies',
      category: 'Full-Stack Web',
      started: '2026-02',
      summary:
        'A Next.js movie website with catalog, list, actor and director pages, user login, and an admin flow for approving and scheduling movies.',
      highlights: [
        'Next.js App Router with route handlers for the admin API',
        'Deployed on Vercel',
      ],
      stack: ['Next.js', 'TypeScript', 'Vercel'],
      liveUrl: 'https://dora-movies.vercel.app',
      repoUrl: 'https://github.com/ThanhDora/Dora-movies',
    },
    {
      id: 'dorateam-forum',
      title: 'DoraTeam Forum',
      category: 'Full-Stack Web',
      started: '2026-03',
      summary:
        'A forum, news board and knowledge-sharing site for the DoraTeam community, with a dark, emerald-toned interface.',
      highlights: [
        'Next.js front end with Tailwind CSS and Framer Motion',
        'Express API with Prisma (MySQL/MariaDB) and Socket.IO',
      ],
      stack: ['Next.js', 'TypeScript', 'Express', 'Prisma', 'MySQL', 'Socket.IO'],
      repoUrl: 'https://github.com/ThanhDora/Forum-DoraTeam',
    },
    {
      id: 'testflight-slot-monitor',
      title: 'TestFlight Slot Monitor',
      category: 'iOS',
      started: '2026-05',
      summary:
        'Watches TestFlight beta links and alerts as soon as a slot opens, through an iOS app, a Python server and a Telegram bot.',
      highlights: [
        'Python server: TestFlight page scraper, periodic checks, REST API with API-key auth, MongoDB history',
        'SwiftUI app: live dashboard, push notifications, background checks',
        'Telegram bot: status, device approval and real-time alerts via inline buttons',
      ],
      stack: ['Swift', 'SwiftUI', 'Python', 'MongoDB', 'Telegram Bot API'],
      repoUrl: 'https://github.com/ThanhDora/TestFlight-Slot-Monitor-Bot',
    },
    {
      id: 'heartsync',
      title: 'HeartSync',
      category: 'iOS',
      started: '2026-05',
      summary:
        'A SwiftUI couples app with partner profiles, a shared calendar of important dates, AI reply and gift suggestions, and reminders.',
      highlights: ['Native SwiftUI, organised by feature (Calendar, AI Reply, Onboarding, Settings)'],
      stack: ['Swift', 'SwiftUI', 'iOS'],
      repoUrl: 'https://github.com/ThanhDora/HeartSync',
    },
    {
      id: 'dorasuper-bot',
      title: 'DoraSuper Bot',
      category: 'Telegram Bots',
      started: '2026-03',
      summary:
        'A Telegram group-management bot with admin commands, custom replies and a modular plugin structure.',
      highlights: ['Python 3 with Pyrogram, data stored in MongoDB'],
      stack: ['Python', 'Pyrogram', 'MongoDB', 'Telegram'],
      status: 'No longer maintained',
      repoUrl: 'https://github.com/ThanhDora/DoraSuper_Bot',
    },
  ] satisfies ProjectItem[],

  // TODO(user): fill in real work history; leave empty to hide the block.
  experience: [] as ExperienceItem[],

  // TODO(user): fill in real education; leave empty to hide the block.
  education: [] as EducationItem[],
};
