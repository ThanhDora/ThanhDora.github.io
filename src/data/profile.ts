export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Automation' | 'iOS & Mobile' | 'DevOps & Cloud';
  year: string;
  role: string;
  featured: boolean;
  summary: string;
  architectureNote: string;
  impactMetrics: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  previewType: 'orchestrator' | 'commerce' | 'ios-atelier' | 'devops-mesh' | 'ops-ledger' | 'edge-gateway';
}

export interface SkillGroup {
  code: string;
  category: string;
  subtitle: string;
  items: {
    name: string;
    detail: string;
    proficiency: 'Core' | 'Production' | 'Specialized';
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  type: 'Work' | 'Independent' | 'Education';
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const PROFILE_DATA = {
  identity: {
    name: 'Thanh Dora',
    legalName: 'Lê Thanh Đạt',
    monogram: 'TD.',
    handle: '@ThanhDora',
    role: 'Full-Stack Engineer & Systems Architect',
    tagline: 'Crafting resilient web platforms, native iOS experiences, and autonomous AI workflows with quiet precision.',
    location: 'Ha Noi City, Vietnam',
    timezone: 'ICT (UTC+7)',
    status: 'Available for select engineering & architecture mandates',
    domain: 'ThanhDora.github.io',
    githubPagesDomain: 'ThanhDora.github.io',
    email: 'thanhdora3605@gmail.com',
    github: 'https://github.com/ThanhDora',
    linkedin: 'https://linkedin.com/in/thanhdora',
    facebook: 'https://facebook.com/ThanhDora',
    x: 'https://x.com/ThanhDora',
  },

  hero: {
    editionLabel: 'ATELIER MONOGRAPH — VOL. IV / 2026',
    headlinePrefix: 'Engineering calm,',
    headlineItalic: 'high-leverage systems',
    headlineSuffix: 'where software meets business operations.',
    lead: 'I am Thanh Dora (Lê Thanh Đạt) — a full-stack developer and systems builder specializing in Next.js, Node.js/Express, native iOS, cloud DevOps, and applied AI tooling. I design software that remains fast, legible, and dependable under real-world operational load.',
    metrics: [
      { value: '99.95%', label: 'Production Uptime Target', note: 'Self-healing containerized infra' },
      { value: '< 45ms', label: 'Edge API P95 Latency', note: 'Distributed caching & lean runtimes' },
      { value: '4+ Pillars', label: 'Full-Stack • iOS • DevOps • AI', note: 'End-to-end ownership from metal to UI' },
    ],
  },

  about: {
    sectionIndex: '01 / PHILOSOPHY & BACKGROUND',
    heading: 'Bridging architectural rigor with pragmatic business execution.',
    paragraphs: [
      'Great software rarely announces itself with noise. Like a well-proportioned studio or a finely bound book, the best engineering feels effortless to the person using it — while concealing disciplined architecture underneath.',
      'My work spans the complete product lifecycle: architecting reactive web applications with Next.js and TypeScript, engineering high-throughput backend services in Node.js and Express, crafting tactile native iOS apps in Swift, and automating cloud infrastructure across Cloudflare, Docker, and Linux servers.',
      'Beyond pure code, I focus deeply on AI tooling and business operations — embedding LLM agents, structured pipelines, and internal observability tools directly into daily workflows so small teams can operate with the leverage of an enterprise.',
    ],
    principles: [
      {
        number: 'I',
        title: 'End-to-End Ownership',
        description: 'From DNS records, TLS certificates, and CI/CD pipelines to database indices and micro-typography on mobile screens.',
      },
      {
        number: 'II',
        title: 'AI as Operational Leverage',
        description: 'Building deterministic, auditable AI workflows and developer tooling that eliminate repetitive operational bottlenecks.',
      },
      {
        number: 'III',
        title: 'Quiet Durability',
        description: 'Preferring boring, battle-tested primitives, clear documentation, and zero-bloat static/edge architectures where possible.',
      },
    ],
  },

  skills: [
    {
      code: 'CAP — 01',
      category: 'Frontend & Editorial Interfaces',
      subtitle: 'Accessible, high-frame-rate web interfaces with typographic precision.',
      items: [
        { name: 'Next.js (App & Pages Router)', detail: 'SSR, ISR, React Server Components, Edge Middleware', proficiency: 'Core' },
        { name: 'TypeScript & React 19', detail: 'Strict type safety, state machines, custom hooks', proficiency: 'Core' },
        { name: 'Astro & Static Architecture', detail: 'Zero-JS islands, Content Collections, Lighthouse 100', proficiency: 'Core' },
        { name: 'Tailwind CSS & Design Systems', detail: 'Custom token architecture, dark/light themes, fluid layout', proficiency: 'Core' },
      ],
    },
    {
      code: 'CAP — 02',
      category: 'Backend & Distributed APIs',
      subtitle: 'Resilient service layers built for throughput, observability, and clean contracts.',
      items: [
        { name: 'Node.js & Express', detail: 'RESTful & webhook architectures, stream processing, auth', proficiency: 'Core' },
        { name: 'PostgreSQL, Prisma & Redis', detail: 'Relational modeling, query tuning, queue & cache layers', proficiency: 'Core' },
        { name: 'API Security & Auth', detail: 'JWT, OAuth2/OIDC, rate limiting, cryptographic signing', proficiency: 'Production' },
        { name: 'Realtime & Event Queues', detail: 'WebSockets, BullMQ, SSE for live agent streaming', proficiency: 'Production' },
      ],
    },
    {
      code: 'CAP — 03',
      category: 'Native iOS & Mobile Craft',
      subtitle: 'Fluid handheld experiences respecting Apple Human Interface Guidelines.',
      items: [
        { name: 'Swift & SwiftUI', detail: 'Declarative views, smooth spring animations, MVVM/TCA', proficiency: 'Core' },
        { name: 'Offline-First Persistence', detail: 'SwiftData, CoreData, Keychain & background sync', proficiency: 'Production' },
        { name: 'Native System Integration', detail: 'Push notifications, Widgets, App Intents, Biometrics', proficiency: 'Production' },
        { name: 'TestFlight & App Store Ops', detail: 'Code signing, Fastlane automation, release management', proficiency: 'Specialized' },
      ],
    },
    {
      code: 'CAP — 04',
      category: 'DevOps, Cloud & Infrastructure',
      subtitle: 'Automated delivery pipelines, zero-downtime deployments, and edge networking.',
      items: [
        { name: 'Docker & Container Orchestration', detail: 'Multi-stage builds, Compose stacks, reverse proxies', proficiency: 'Core' },
        { name: 'Cloudflare & DNS Architecture', detail: 'Zero-Trust tunnels, Workers, WAF, DNSSEC, caching', proficiency: 'Core' },
        { name: 'GitHub Actions CI/CD', detail: 'Automated testing, matrix builds, artifact publishing', proficiency: 'Core' },
        { name: 'Linux Administration & Nginx', detail: 'Systemd hardening, TLS automation, telemetry & logs', proficiency: 'Production' },
      ],
    },
    {
      code: 'CAP — 05',
      category: 'AI Tooling & Business Operations',
      subtitle: 'Practical autonomous workflows connecting LLMs to real business execution.',
      items: [
        { name: 'LLM Orchestration & Agents', detail: 'Structured outputs, function calling, MCP servers, RAG', proficiency: 'Core' },
        { name: 'Workflow & Ops Automation', detail: 'Automated reporting, CRM/ERP webhooks, financial ledgers', proficiency: 'Core' },
        { name: 'Internal Developer Tooling', detail: 'CLI utilities, code generation pipelines, evaluation suites', proficiency: 'Production' },
        { name: 'Technical Product Strategy', detail: 'Unit economics, SLA design, cross-functional documentation', proficiency: 'Specialized' },
      ],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      id: 'dora-agentic-ops',
      index: '01',
      title: 'DoraOps — Autonomous Business & AI Workflow Engine',
      subtitle: 'Multi-agent orchestration & operational telemetry platform',
      category: 'AI & Automation',
      year: '2026',
      role: 'Lead Architect & Full-Stack Engineer',
      featured: true,
      summary:
        'An internal operations control plane that unifies webhook ingestion, LLM document extraction, automated approval routing, and real-time audit logs. Designed to replace fragile spreadsheet workflows with deterministic Node.js queues and structured AI agents.',
      architectureNote: 'Event-driven Node.js/Express core backed by Redis queues, PostgreSQL audit trails, and a Next.js editorial operator console.',
      impactMetrics: [
        'Reduced manual operational triage by 78%',
        'Sub-1.2s median agent tool-execution turnaround',
        '100% deterministic JSON schema validation with fallback retries',
      ],
      stack: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'OpenAI / Claude SDK', 'Docker'],
      liveUrl: 'https://ThanhDora.github.io',
      repoUrl: 'https://github.com/ThanhDora',
      previewType: 'orchestrator',
    },
    {
      id: 'atelier-commerce-core',
      index: '02',
      title: 'Kanso — High-Throughput Headless Commerce & Inventory Suite',
      subtitle: 'Full-stack Next.js storefront & Express order fulfillment engine',
      category: 'Full-Stack',
      year: '2025',
      role: 'Full-Stack Developer',
      featured: true,
      summary:
        'A bespoke multi-warehouse commerce platform engineered for instant page transitions and strict inventory consistency. Combines edge-cached Next.js product catalogs with a transactional Express/PostgreSQL ledger handling flash-sale concurrency.',
      architectureNote: 'Optimistic UI updates paired with row-level PostgreSQL locking and Cloudflare CDN stale-while-revalidate caching.',
      impactMetrics: [
        '99/100 Lighthouse Performance score on mobile 4G',
        'Zero inventory oversell across 5,000+ concurrent checkout sessions',
        'Automated reconciliation with domestic payment & logistics APIs',
      ],
      stack: ['Next.js', 'Tailwind CSS', 'Express', 'Node.js', 'PostgreSQL', 'Prisma', 'Cloudflare'],
      liveUrl: 'https://ThanhDora.github.io',
      repoUrl: 'https://github.com/ThanhDora',
      previewType: 'commerce',
    },
    {
      id: 'pulse-ios-companion',
      index: '03',
      title: 'Chronicle iOS — Native Field Notes & Executive Telemetry App',
      subtitle: 'Offline-first SwiftUI client with instant cloud synchronization',
      category: 'iOS & Mobile',
      year: '2025',
      role: 'iOS & Backend Engineer',
      featured: true,
      summary:
        'A tactile native iOS application crafted for founders and operators on the move. Captures voice memos, structured markdown notes, and live server/business KPIs with local SwiftData persistence and background delta sync.',
      architectureNote: 'Built natively with SwiftUI, Swift Concurrency (async/await), Home Screen Widgets, and a lightweight Node.js sync API.',
      impactMetrics: [
        '60fps fluid typography & gesture navigation on iOS 18+',
        'Seamless offline read/write with conflict-free CRDT-inspired merge',
        'Integrated Lock Screen widgets for real-time infrastructure health',
      ],
      stack: ['Swift', 'SwiftUI', 'SwiftData', 'App Intents', 'Node.js', 'REST API'],
      liveUrl: 'https://github.com/ThanhDora',
      repoUrl: 'https://github.com/ThanhDora',
      previewType: 'ios-atelier',
    },
    {
      id: 'aegis-edge-deploy',
      index: '04',
      title: 'Aegis Edge — Self-Hosted Container & Cloudflare Tunnel Mesh',
      subtitle: 'Zero-downtime deployment blueprint & observability stack',
      category: 'DevOps & Cloud',
      year: '2024 — 2026',
      role: 'DevOps & Systems Engineer',
      featured: true,
      summary:
        'A production infrastructure kit for deploying full-stack applications across bare-metal Linux VPS and Cloudflare Zero Trust networks without exposing public ingress ports. Includes automated database backups, health probes, and instant rollback scripts.',
      architectureNote: 'GitHub Actions pipelines building multi-arch Docker images deployed via blue-green container switching.',
      impactMetrics: [
        'Zero public SSH/HTTP port exposure via Cloudflare Tunnels',
        'Under 15-second blue-green container cutover with zero dropped requests',
        'Automated nightly encrypted snapshots to S3-compatible object storage',
      ],
      stack: ['Docker', 'Cloudflare DNS & Tunnels', 'GitHub Actions', 'Nginx', 'Linux', 'Bash'],
      liveUrl: 'https://github.com/ThanhDora',
      repoUrl: 'https://github.com/ThanhDora',
      previewType: 'devops-mesh',
    },
  ] satisfies ProjectItem[],

  experience: [
    {
      period: '2024 — Present',
      role: 'Independent Full-Stack Engineer & Technical Architect',
      organization: 'Thanh Dora Atelier / ThanhDora.github.io',
      location: 'Vietnam • Remote Global',
      type: 'Independent',
      summary:
        'Architecting end-to-end web platforms, custom AI automation pipelines, and mobile companions for growth-stage companies and internal ventures.',
      highlights: [
        'Designed and shipped full-stack Next.js and Node.js/Express applications serving high-concurrency operational workloads.',
        'Integrated LLM agents and MCP-based developer tooling into business operations, cutting repetitive reporting and QA overhead.',
        'Managed full cloud lifecycle across Namecheap, Cloudflare DNS/Zero-Trust, Docker clusters, and GitHub Actions CI/CD.',
      ],
      technologies: ['Next.js', 'Node.js', 'Express', 'TypeScript', 'iOS / Swift', 'Docker', 'Cloudflare', 'AI Tooling'],
    },
    {
      period: '2022 — 2024',
      role: 'Full-Stack Software Developer',
      organization: 'Digital Product & Systems Engineering',
      location: 'Ha Noi City, Vietnam',
      type: 'Work',
      summary:
        'Built customer-facing web applications, backend API microservices, and internal operations dashboards across e-commerce and SaaS domains.',
      highlights: [
        'Engineered modular REST APIs with Express and PostgreSQL, improving critical endpoint response times by over 55%.',
        'Collaborated closely with product and operations teams to translate complex business rules into maintainable TypeScript modules.',
        'Established automated linting, type-checking, and deployment workflows via GitHub Actions.',
      ],
      technologies: ['React', 'Next.js', 'Express.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'Git'],
    },
    {
      period: '2020 — 2024',
      role: 'B.S. Studies & Applied Software Engineering',
      organization: 'Computer Science & Systems Engineering',
      location: 'Vietnam',
      type: 'Education',
      summary:
        'Focused on software architecture, distributed systems, mobile application development (iOS), and relational database design.',
      highlights: [
        'Built foundational projects spanning compilers, network protocols, native iOS applications, and full-stack web architectures.',
        'Active contributor to developer communities, technical documentation, and open-source starter kits.',
      ],
      technologies: ['Algorithms', 'Distributed Systems', 'Swift', 'Web Standards', 'Linux'],
    },
  ] satisfies ExperienceItem[],
};
