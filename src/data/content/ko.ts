import type { LocaleContent } from './types';

const ko: LocaleContent = {
  identity: {
    role: '풀스택 개발자',
    tagline: '베트남의 풀스택 개발자로, Next.js와 Node.js로 웹 앱을, Python으로 Telegram 봇을, Swift로 iOS 앱을 만듭니다.',
    location: '베트남',
    timezone: 'ICT (UTC+7)',
  },
  hero: {
    label: '풀스택 개발자 · 베트남',
    headlinePrefix: '인터페이스부터 서버까지,',
    headlineItalic: '웹 앱, 봇, iOS 앱',
    headlineSuffix: '을 만듭니다.',
    lead: '저는 Lê Thanh Đạt(ThanhDora)입니다. 프론트엔드에서는 Next.js와 React, 백엔드에서는 Express, Prisma, PostgreSQL, Redis를 다루고, Telegram 봇은 Python으로, iOS는 Swift로 개발합니다.',
  },
  about: {
    heading: '제품 UI부터 백엔드와 배포까지, 풀스택.',
    paragraphs: [
      '저는 제품 전체를 다루는 것을 좋아합니다. 사람들이 사용하는 인터페이스, 그 뒤의 API와 데이터베이스, 그리고 서비스를 계속 운영되게 하는 배포까지요.',
      '제품 코드 외에도 자동화 도구와 Telegram 봇을 만들고, AI 도구를 활용해 일상 업무 속도를 높입니다.',
      '아래 프로젝트는 제가 직접 만든 오픈 소스 및 개인 작업입니다. 각 프로젝트의 소스 코드는 GitHub에 있습니다.',
    ],
  },
  skillCategories: ['프론트엔드', '백엔드', '모바일', '봇 & 자동화', 'DevOps & 도구'],
  skillItems: { Scripting: '스크립팅' },
  projects: {
    'dora-marketplace': {
      summary: '계정, API 키, 라이선스, 파일 같은 디지털 상품을 거래하는 마켓플레이스로, Next.js 클라이언트와 Express 서버로 나뉘어 있습니다.',
      highlights: [
        'Socket.IO, Zod, JWT를 사용하는 Express + Prisma + PostgreSQL + Redis 백엔드',
        'Google OAuth, Nodemailer를 통한 이메일, MoMo·SePay·PayPal 결제',
        'PostgreSQL, Redis, Mailhog, PgAdmin을 포함한 Docker Compose 개발 환경',
      ],
      overview: [
        'DORA Marketplace(저장소 이름은 “MINI MARKETPLACE”)는 계정, 키/라이선스, 다운로드 파일 등 디지털 상품을 판매하는 플랫폼입니다. 구매자, 판매자, 관리자에게 각각 전용 영역이 있습니다.',
        '두 개의 독립된 npm 프로젝트로 구성됩니다. Next.js App Router 클라이언트와 Prisma, PostgreSQL, Redis를 사용하는 Express + TypeScript API입니다.',
      ],
      features: [
        '세 가지 상품 유형(계정, 키, 파일)을 갖춘 카탈로그, 장바구니, 위시리스트, 결제, 주문 및 주문 완료 페이지',
        'RBAC 미들웨어로 제어되는 사용자, 판매자, 관리자 역할',
        '판매자 도구: 구독 요금제, 결제 설정, 출금, 지갑 거래 내역',
        '이메일 또는 Google OAuth(Passport) 로그인, JWT 액세스 및 리프레시 토큰, Nodemailer로 보내는 EJS 템플릿 기반 인증 및 비밀번호 재설정 이메일',
        '플랫폼 내부 잔액, MoMo, SePay, PayPal, 계좌 이체를 위한 결제 코드 경로',
        'Socket.IO를 통한 실시간 업데이트(예: 재고 변동), 구매자–판매자 채팅, 알림, 지원 티켓',
        'xAI Grok을 호출하고 실패 시 OpenAI로 전환하는 AI 채팅 도우미로, 스토어 통계와 상품 검색을 컨텍스트로 사용',
        '상품 리뷰와 활동 로그',
      ],
      architecture: [
        '클라이언트: Next.js(App Router), React, TypeScript, Tailwind CSS, Framer Motion, Socket.IO 클라이언트.',
        '서버: routes, controllers, services, middleware로 구성된 Express — Zod 검증, Helmet, CSRF 보호, 요청 속도 제한, Multer 업로드.',
        '데이터: PostgreSQL 위의 23개 모델(사용자, 상품, 주문, 출금, 지갑 거래, 지원 티켓 등)로 이루어진 Prisma 스키마와 ioredis를 통한 Redis.',
        '백그라운드 작업이 60초마다 실행되어 시간이 초과된 미결제 주문을 취소하고 재고를 되돌립니다.',
        '로컬 개발에는 Docker Compose로 PostgreSQL, Redis, Mailhog, PgAdmin, Redis Commander를 사용합니다. 서버에는 Vitest 단위 테스트가 있고 저장소에는 Bruno API 컬렉션이 포함되어 있습니다.',
      ],
    },
    'dora-movies': {
      summary: '카탈로그, 목록, 배우 및 감독 페이지, 사용자 로그인, 영화 승인과 일정 관리를 위한 관리자 흐름을 갖춘 Next.js 영화 웹사이트.',
      highlights: ['관리자 API에 route handler를 사용하는 Next.js App Router', 'Vercel에 배포'],
      overview: [
        'Dora Movies는 베트남어 영화 웹사이트입니다. 영화 데이터(목록, 상세 정보, 에피소드)는 환경 변수로 지정한 외부 영화 API에서 가져옵니다.',
        '이 데이터 위에 사용자 계정, 개인 목록, VIP 요금제, Telegram 알림, 그리고 어떤 영화를 노출할지 검토하는 관리자 기능을 더했습니다.',
      ],
      features: [
        '목록, 장르, 국가, 키워드, 배우, 감독별 탐색, 검색, 카탈로그 페이지, YouTube 예고편이 있는 영화 및 에피소드 페이지',
        'NextAuth v5(Prisma adapter, bcrypt 비밀번호) 기반 계정, Resend로 보내는 이메일 인증 및 비밀번호 재설정',
        '아바타, 즐겨찾기, 재생목록, 시청 진행 상황이 있는 프로필',
        'VNPay로 결제하는 VIP 요금제(결제 생성 및 결과 처리)',
        '영화, 사용자, 관리자를 위한 관리 페이지. 영화는 승인되어야 노출되며 숨길 수도 있습니다',
        '시스템 오류, 새로 동기화된 영화, 신규 가입을 알리는 Telegram 봇 알림(webhook 또는 polling)',
      ],
      architecture: [
        'Next.js 16 App Router와 React 19. 서버 로직은 app/api 아래의 route handler에 있습니다.',
        'Prisma를 통한 PostgreSQL(10개 모델: 사용자, 즐겨찾기, 재생목록, 시청 기록, 영화 승인, VIP 요금제, 결제, 인증 토큰)과 Supabase 마이그레이션 폴더.',
        'bearer secret으로 보호되는 cron 엔드포인트가 API에서 최신 영화 및 시리즈 slug를 가져와 승인 대기열에 넣습니다.',
        'API 클라이언트는 8초 타임아웃, 재시도, 60초 인메모리 캐시를 사용합니다.',
        '캐러셀은 Swiper로 구현했습니다. 사이트는 Vercel에 배포되어 있습니다.',
      ],
    },
    'dorateam-forum': {
      summary: 'DoraTeam 커뮤니티를 위한 포럼, 뉴스 게시판, 지식 공유 사이트로, 어두운 에메랄드 톤의 인터페이스입니다.',
      highlights: ['Tailwind CSS와 Framer Motion을 사용하는 Next.js 프론트엔드', 'Prisma(MySQL/MariaDB)와 Socket.IO를 사용하는 Express API'],
      overview: [
        'DoraTeam Forum은 DoraTeam 커뮤니티를 위한 포럼, 뉴스 게시판, 지식 공유 사이트입니다.',
        '클라이언트는 Next.js 앱이고 서버는 MariaDB/MySQL 위에서 Prisma를 사용하는 Express API입니다. 인터페이스는 다크 모드를 기본으로 하며 에메랄드 색상을 포인트로 사용합니다.',
      ],
      features: [
        '카테고리, 채널, 태그로 구성된 포럼. 스레드와 메시지가 있으며 둘 다 좋아요를 누를 수 있음',
        '생성, 수정, 삭제 권한이 각각 분리된 튜토리얼 섹션',
        'TipTap 기반 리치 텍스트 에디터(표, 이미지, 링크, 코드 블록, 색상, 정렬)와 GitHub Flavored Markdown 렌더링',
        'BigInt 권한 비트필드를 사용하는 Discord 스타일 역할(관리자, 역할·채널·메시지 관리, 추방/차단, 튜토리얼, 감사 로그)',
        'Socket.IO를 통한 스레드, 메시지, 튜토리얼, 좋아요 수, 접속 중인 사용자의 실시간 업데이트',
        '관리자 영역, 사용자 프로필, 파일 업로드. 첫 실행 시 기본 관리자 계정이 생성됨',
      ],
      architecture: [
        '프론트엔드: Next.js 16, React 19, Tailwind CSS, shadcn / Base UI 컴포넌트, Framer Motion, next-themes, Sonner 토스트.',
        '서버: Zod, JWT, bcrypt, Helmet, Morgan, Multer를 사용하는 Express 5.',
        '데이터베이스: MariaDB adapter를 사용하는 Prisma, 9개 모델(사용자, 역할, 튜토리얼, 포럼 카테고리, 채널, 태그, 스레드, 메시지, 좋아요).',
      ],
    },
    'testflight-slot-monitor': {
      summary: 'TestFlight 베타 링크를 감시하다가 자리가 나는 즉시 알려 줍니다. iOS 앱, Python 서버, Telegram 봇으로 구성됩니다.',
      highlights: [
        'Python 서버: TestFlight 페이지 스크레이퍼, 주기적 확인, API 키 인증 REST API, MongoDB 기록',
        'SwiftUI 앱: 실시간 대시보드, 푸시 알림, 백그라운드 확인',
        'Telegram 봇: 인라인 버튼으로 상태 확인, 기기 승인, 실시간 알림',
      ],
      overview: [
        'TestFlight 베타 자리는 금방 찹니다. 이 시스템은 정해진 일정에 따라(최대 5초마다) TestFlight 링크를 확인하고, 자리가 나는 즉시 알려 줍니다 — iOS 푸시 알림, iOS 앱, Telegram 봇을 통해서요.',
      ],
      features: [
        '서버: TestFlight 페이지를 스크레이핑해 자리 상태를 감지하며, 확인 주기는 5초에서 24시간까지',
        '앱용 REST API(링크 관리, 확인 실행, 상태 조회), X-API-Key 헤더로 인증',
        '상태 변경 기록을 30일 TTL로 저장',
        'iOS 앱: 실시간 대시보드, 링크 추가/삭제, 푸시 알림, 백그라운드 확인, 기록, 설정',
        '기기 활성화: 소유자가 Telegram에서 승인하거나 거절하고 나중에 취소할 수도 있는 무작위 코드',
        '상태, 기기 관리, 알림을 위한 인라인 버튼 메뉴가 있는 Telegram 봇. 소유자에게만 응답합니다',
      ],
      architecture: [
        'iOS 앱: SwiftUI, Observation, BackgroundTasks, UserNotifications.',
        '서버: 표준 라이브러리 http.server와 스레드를 사용하는 Python 3, 스크레이핑에는 Requests와 정규식, 그리고 PyMongo.',
        '데이터베이스: MongoDB(링크, 설정, 기기, 기록, 카운터).',
        '봇: urllib으로 Telegram Bot API를 직접 호출.',
      ],
      note: '공개 저장소에는 문서가 들어 있으며, iOS 앱은 Git submodule로 연결되어 있습니다.',
    },
    'dora-email': {
      summary: '무료 임시(일회용) 이메일 웹 앱. 도메인을 고르고 가입 없이 무작위 또는 원하는 주소를 받아 브라우저에서 수신 메일을 읽을 수 있습니다.',
      highlights: [
        '받은편지함이 몇 초마다 자동으로 새로고침되며, 클릭 한 번으로 주소 복사',
        'Next.js route handler가 환경 변수로 설정한 업스트림 메일 API에서 도메인 목록과 메시지를 프록시',
        'Vercel에 배포',
      ],
      overview: ['Dora-Email은 무료 일회용 이메일 서비스입니다. 도메인을 고르고 무작위 또는 원하는 주소를 받아, 가입 없이 바로 메일을 받을 수 있습니다.'],
      features: [
        '도메인 선택과 무작위 주소 생성, 또는 사용자 이름 직접 입력',
        '카운트다운이 표시되며 5초마다 새로고침되는 받은편지함',
        '이메일 HTML을 iframe 안에 렌더링하는 메시지 보기',
        '이메일에서 인증 정보 — OTP 코드, PIN, 인증 링크와 매직 링크, 토큰 — 를 추출해 각각 클릭 한 번으로 복사 가능',
        '주소 복사 버튼과 모바일용 목록/상세 탭 레이아웃',
      ],
      architecture: [
        'Next.js 16 App Router, React 19, TypeScript. UI는 단일 클라이언트 페이지입니다.',
        '/api/domains와 /api/messages 두 route handler가 기본 URL과 엔드포인트를 환경 변수에서 가져오는 업스트림 메일 API로 요청을 프록시합니다. 도메인 목록은 중복을 제거하고, 메시지 HTML은 브라우저에 전달되기 전에 정리됩니다.',
        'Vercel에 배포.',
      ],
    },
    'dorasuper-bot': {
      summary: '관리 명령, 사용자 지정 답장, 모듈식 플러그인 구조를 갖춘 Telegram 그룹 관리 봇.',
      highlights: ['Pyrogram을 사용하는 Python 3, 데이터는 MongoDB에 저장'],
      overview: [
        'DoraSuper Bot은 Python 3, Pyrogram, MongoDB로 만든 그룹 관리용 Telegram 봇입니다. 기능마다 별도의 플러그인 모듈로 되어 있어 새 기능을 쉽게 추가할 수 있습니다.',
        '개발은 중단되었으며, README에는 더 이상 버그를 지원하지 않는다고 적혀 있습니다.',
      ],
      features: [
        '그룹 관리(차단, 잠금, 필터, 메모, 블랙리스트, 자동 승인, 관리 로그), 유틸리티(OCR, 미디어 정보, 날씨, 환율, 금 시세, IMDb 검색, 다운로드), 재미용 명령을 포함한 50개 플러그인 모듈',
        'Google Gemini용을 포함한 AI 채팅 플러그인',
        '공지 방송, 자동 전달, 출석 체크, 카르마',
        '세션 문자열 생성기와 채팅별 언어 설정(베트남어 로케일 포함)',
      ],
      architecture: [
        'Python 3.10–3.13, pyrofork(Pyrogram 포크)와 TgCrypto. 세션 생성에는 Telethon.',
        'async_pymongo / PyMongo를 통한 MongoDB, 예약 작업에는 APScheduler.',
        'config.env(API ID/hash, 봇 토큰, 데이터베이스 URI, 로그 채널, sudo 사용자)로 설정하고 셸 스크립트로 실행합니다.',
        'AGPL-3.0 라이선스.',
      ],
      status: '유지 관리 중단',
    },
  },
};

export default ko;
