import type { LocaleContent } from './types';

const ja: LocaleContent = {
  identity: {
    role: 'フルスタック開発者',
    tagline: 'ベトナムのフルスタック開発者。Next.js と Node.js で Web アプリを、Python で Telegram ボットを、Swift で iOS アプリを作っています。',
    location: 'ベトナム',
    timezone: 'ICT (UTC+7)',
  },
  hero: {
    label: 'フルスタック開発者 · ベトナム',
    headlinePrefix: 'インターフェースからサーバーまで、',
    headlineItalic: 'Web アプリ、ボット、iOS アプリ',
    headlineSuffix: 'を作っています。',
    lead: 'Lê Thanh Đạt（ThanhDora）です。フロントエンドでは Next.js と React、バックエンドでは Express、Prisma、PostgreSQL、Redis、Telegram ボットには Python、iOS には Swift を使っています。',
  },
  about: {
    heading: 'プロダクトの UI からバックエンド、デプロイまでのフルスタック。',
    paragraphs: [
      'プロダクト全体に関わるのが好きです。ユーザーが触れるインターフェース、その裏の API とデータベース、そしてサービスを動かし続けるデプロイまで。',
      'プロダクトのコード以外にも、自動化ツールや Telegram ボットを書き、AI ツールを使って日々の作業を効率化しています。',
      '以下のプロジェクトは、私自身のオープンソースおよび個人の作品です。それぞれのソースコードは GitHub にあります。',
    ],
  },
  skillCategories: ['フロントエンド', 'バックエンド', 'モバイル', 'ボットと自動化', 'DevOps とツール'],
  skillItems: { Scripting: 'スクリプト作成' },
  projects: {
    'dora-marketplace': {
      summary: 'アカウント、API キー、ライセンス、ファイルなどのデジタル商品を扱うマーケットプレイス。Next.js クライアントと Express サーバーに分かれています。',
      highlights: [
        'Socket.IO、Zod、JWT を使った Express + Prisma + PostgreSQL + Redis のバックエンド',
        'Google OAuth、Nodemailer によるメール送信、MoMo・SePay・PayPal 決済',
        'PostgreSQL、Redis、Mailhog、PgAdmin を含む Docker Compose の開発環境',
      ],
      overview: [
        'DORA Marketplace（リポジトリ名は「MINI MARKETPLACE」）は、アカウント、キー/ライセンス、ダウンロードファイルといったデジタル商品を販売するプラットフォームです。購入者、販売者、管理者にはそれぞれ専用のエリアがあります。',
        '2 つの独立した npm プロジェクトで構成されています。Next.js App Router のクライアントと、Prisma・PostgreSQL・Redis を使う Express + TypeScript の API です。',
      ],
      features: [
        '3 種類の商品（アカウント、キー、ファイル）を扱うカタログ、カート、お気に入り、チェックアウト、注文ページと注文完了ページ',
        'ユーザー、販売者、管理者のロール。RBAC ミドルウェアで制御',
        '販売者向けツール：サブスクリプションプラン、支払い設定、出金、ウォレット取引台帳',
        'メールまたは Google OAuth（Passport）でのログイン、JWT のアクセストークンとリフレッシュトークン、EJS テンプレートから Nodemailer で送る確認メールとパスワード再設定メール',
        'プラットフォーム内残高、MoMo、SePay、PayPal、銀行振込の決済処理をコードで実装',
        'Socket.IO によるリアルタイム更新（在庫の変化など）、購入者と販売者のチャット、通知、サポートチケット',
        'xAI Grok を呼び出し、失敗時は OpenAI にフォールバックする AI チャットアシスタント。ストアの統計と商品検索をコンテキストとして使用',
        '商品レビューとアクティビティログ',
      ],
      architecture: [
        'クライアント：Next.js（App Router）、React、TypeScript、Tailwind CSS、Framer Motion、Socket.IO クライアント。',
        'サーバー：routes、controllers、services、middleware で構成した Express —— Zod によるバリデーション、Helmet、CSRF 対策、レート制限、Multer によるアップロード。',
        'データ：PostgreSQL 上の 23 モデル（ユーザー、商品、注文、出金、ウォレット取引、サポートチケットなど）からなる Prisma スキーマと、ioredis 経由の Redis。',
        'バックグラウンドジョブが 60 秒ごとに実行され、タイムアウトした未払いの注文をキャンセルして在庫を戻します。',
        'ローカル開発では Docker Compose で PostgreSQL、Redis、Mailhog、PgAdmin、Redis Commander を起動します。サーバーには Vitest のユニットテストがあり、リポジトリには Bruno の API コレクションが含まれています。',
      ],
    },
    'dora-movies': {
      summary: 'カタログ、リスト、俳優・監督のページ、ユーザーログイン、映画の承認と公開スケジュールを管理する管理フローを備えた Next.js の映画サイト。',
      highlights: ['管理 API に route handler を使った Next.js App Router', 'Vercel にデプロイ'],
      overview: [
        'Dora Movies はベトナム語の映画サイトです。映画データ（リスト、詳細、エピソード）は、環境変数で指定した外部の映画 API から取得します。',
        'そのデータの上に、ユーザーアカウント、個人リスト、VIP プラン、Telegram 通知、そして表示する映画を審査する管理側の機能を加えています。',
      ],
      features: [
        'リスト、ジャンル、国、キーワード、俳優、監督による閲覧、検索、カタログページ、YouTube 予告編付きの映画ページとエピソードページ',
        'NextAuth v5（Prisma adapter、bcrypt によるパスワード）のアカウント、Resend で送るメール確認とパスワード再設定',
        'アバター、お気に入り、プレイリスト、視聴の進捗を持つプロフィール',
        'VNPay で支払う VIP プラン（決済の作成と戻り処理）',
        '映画、ユーザー、管理者の管理ページ。映画は承認されるまで表示されず、非表示にすることもできます',
        'システムエラー、新しく同期された映画、新規登録を知らせる Telegram ボット通知（webhook または polling）',
      ],
      architecture: [
        'Next.js 16 App Router と React 19。サーバーロジックは app/api 以下の route handler にあります。',
        'Prisma 経由の PostgreSQL（10 モデル：ユーザー、お気に入り、プレイリスト、視聴履歴、映画の承認、VIP プラン、決済、認証トークン）と Supabase のマイグレーションフォルダ。',
        'bearer secret で保護された cron エンドポイントが、API から最新の映画とシリーズの slug を取得して承認キューに入れます。',
        'API クライアントは 8 秒のタイムアウト、リトライ、60 秒のインメモリキャッシュを使用します。',
        'カルーセルには Swiper を使用。サイトは Vercel にデプロイされています。',
      ],
    },
    'dorateam-forum': {
      summary: 'DoraTeam コミュニティのためのフォーラム、ニュースボード、知識共有サイト。ダークでエメラルド調のインターフェースです。',
      highlights: ['Tailwind CSS と Framer Motion を使った Next.js のフロントエンド', 'Prisma（MySQL/MariaDB）と Socket.IO を使った Express API'],
      overview: [
        'DoraTeam Forum は DoraTeam コミュニティのためのフォーラム、ニュースボード、知識共有サイトです。',
        'クライアントは Next.js アプリ、サーバーは MariaDB/MySQL 上で Prisma を使う Express API です。インターフェースはダークモードを基本とし、エメラルドをアクセントにしています。',
      ],
      features: [
        'カテゴリ、チャンネル、タグで整理されたフォーラム。スレッドとメッセージがあり、どちらにも「いいね」が可能',
        '作成・編集・削除の権限が分かれたチュートリアルセクション',
        'TipTap ベースのリッチテキストエディタ（表、画像、リンク、コードブロック、文字色、配置）と GitHub Flavored Markdown による Markdown 表示',
        'BigInt の権限ビットフィールドを使った Discord 風のロール（管理者、ロール・チャンネル・メッセージの管理、キック/BAN、チュートリアル、監査ログ）',
        'Socket.IO によるスレッド、メッセージ、チュートリアル、いいね数、オンラインユーザーのリアルタイム更新',
        '管理エリア、ユーザープロフィール、ファイルアップロード。初回起動時にデフォルトの管理者アカウントを作成',
      ],
      architecture: [
        'フロントエンド：Next.js 16、React 19、Tailwind CSS、shadcn / Base UI コンポーネント、Framer Motion、next-themes、Sonner トースト。',
        'サーバー：Zod、JWT、bcrypt、Helmet、Morgan、Multer を使った Express 5。',
        'データベース：MariaDB adapter を使った Prisma、9 モデル（ユーザー、ロール、チュートリアル、フォーラムカテゴリ、チャンネル、タグ、スレッド、メッセージ、いいね）。',
      ],
    },
    'testflight-slot-monitor': {
      summary: 'TestFlight ベータのリンクを監視し、枠が空いたらすぐに通知します。iOS アプリ、Python サーバー、Telegram ボットで構成されています。',
      highlights: [
        'Python サーバー：TestFlight ページのスクレイパー、定期チェック、API キー認証の REST API、MongoDB の履歴',
        'SwiftUI アプリ：ライブダッシュボード、プッシュ通知、バックグラウンドチェック',
        'Telegram ボット：インラインボタンでステータス確認、デバイス承認、リアルタイム通知',
      ],
      overview: [
        'TestFlight ベータの枠はすぐに埋まります。このシステムはスケジュールに沿って（最短 5 秒ごとに）TestFlight のリンクをチェックし、枠が空いたらすぐに通知します —— iOS のプッシュ通知、iOS アプリ、Telegram ボットを通じて。',
      ],
      features: [
        'サーバー：TestFlight のページをスクレイピングして枠の状態を検出。チェック間隔は 5 秒から 24 時間まで',
        'アプリ向けの REST API（リンク管理、チェックの実行、ステータス取得）。X-API-Key ヘッダーで認証',
        'ステータス変更の履歴を 30 日間の TTL で保存',
        'iOS アプリ：リアルタイムダッシュボード、リンクの追加/削除、プッシュ通知、バックグラウンドチェック、履歴、設定',
        'デバイスの有効化：ランダムなコードをオーナーが Telegram で承認または拒否し、後から取り消すことも可能',
        'ステータス、デバイス管理、通知のためのインラインボタンメニューを持つ Telegram ボット。オーナーにのみ応答します',
      ],
      architecture: [
        'iOS アプリ：SwiftUI、Observation、BackgroundTasks、UserNotifications。',
        'サーバー：標準ライブラリの http.server とスレッドを使う Python 3。スクレイピングには Requests と正規表現、そして PyMongo。',
        'データベース：MongoDB（リンク、設定、デバイス、履歴、カウンター）。',
        'ボット：urllib で Telegram Bot API を直接呼び出し。',
      ],
      note: '公開リポジトリにはドキュメントが含まれています。iOS アプリは Git submodule としてリンクされています。',
    },
    'dora-email': {
      summary: '無料の一時（使い捨て）メール Web アプリ。ドメインを選び、登録なしでランダムまたは任意のアドレスを取得して、受信メールをブラウザで読めます。',
      highlights: [
        '受信箱は数秒ごとに自動更新。ワンクリックでアドレスをコピー',
        'Next.js の route handler が、環境変数で設定した上流のメール API からドメイン一覧とメッセージをプロキシ',
        'Vercel にデプロイ',
      ],
      overview: ['Dora-Email は無料の使い捨てメールサービスです。ドメインを選び、ランダムまたは任意のアドレスを取得して、登録なしですぐにメールを受信できます。'],
      features: [
        'ドメイン選択とランダムアドレス生成。ユーザー名を自分で入力することも可能',
        'カウントダウン表示付きで 5 秒ごとに更新される受信箱',
        'メールの HTML を iframe 内に表示するメッセージビュー',
        'メールから認証情報 —— OTP コード、PIN、認証リンクやマジックリンク、トークン —— を抽出し、それぞれワンクリックでコピー可能',
        'アドレスのコピーボタンと、モバイル向けのリスト/詳細を分けたタブレイアウト',
      ],
      architecture: [
        'Next.js 16 App Router、React 19、TypeScript。UI は単一のクライアントページです。',
        '/api/domains と /api/messages の 2 つの route handler が、ベース URL とエンドポイントを環境変数から取得する上流のメール API にリクエストをプロキシします。ドメイン一覧は重複を除き、メッセージの HTML はブラウザに届く前にクリーンアップされます。',
        'Vercel にデプロイ。',
      ],
    },
    'dorasuper-bot': {
      summary: '管理コマンド、カスタム返信、モジュール式のプラグイン構成を備えた Telegram グループ管理ボット。',
      highlights: ['Pyrogram を使った Python 3、データは MongoDB に保存'],
      overview: [
        'DoraSuper Bot は Python 3、Pyrogram、MongoDB で作られたグループ管理用の Telegram ボットです。機能ごとに独立したプラグインモジュールになっているため、新しい機能を簡単に追加できます。',
        '開発は終了しており、README にはバグのサポートを終了したと記載されています。',
      ],
      features: [
        'グループ管理（BAN、ロック、フィルター、メモ、ブラックリスト、自動承認、管理ログ）、ユーティリティ（OCR、メディア情報、天気、通貨、金価格、IMDb 検索、ダウンロード）、お楽しみコマンドを含む 50 のプラグインモジュール',
        'Google Gemini 用を含む AI チャットプラグイン',
        '一斉送信、自動転送、チェックイン、カルマ',
        'セッション文字列の生成と、チャットごとの言語設定（ベトナム語ロケールを同梱）',
      ],
      architecture: [
        'Python 3.10–3.13、pyrofork（Pyrogram のフォーク）と TgCrypto。セッション生成には Telethon。',
        'async_pymongo / PyMongo 経由の MongoDB。定期ジョブには APScheduler。',
        'config.env（API ID/hash、ボットトークン、データベース URI、ログチャンネル、sudo ユーザー）で設定し、シェルスクリプトで実行します。',
        'AGPL-3.0 ライセンス。',
      ],
      status: 'メンテナンス終了',
    },
  },
};

export default ja;
