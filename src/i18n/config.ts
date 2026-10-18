// Locale configuration. English is the default and lives at the site root;
// every other locale is served under /<code>/ (e.g. /vi/resume/).

export const LOCALES = ['en', 'vi', 'zh', 'ja', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
export const NON_DEFAULT_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Exclude<Locale, 'en'>[];

export const LOCALE_META: Record<
  Locale,
  { label: string; code: string; htmlLang: string; hreflang: string; ogLocale: string; intl: string }
> = {
  en: { label: 'English', code: 'EN', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US', intl: 'en-US' },
  vi: { label: 'Tiếng Việt', code: 'VI', htmlLang: 'vi', hreflang: 'vi', ogLocale: 'vi_VN', intl: 'vi-VN' },
  zh: { label: '中文', code: 'ZH', htmlLang: 'zh-Hans', hreflang: 'zh-Hans', ogLocale: 'zh_CN', intl: 'zh-CN' },
  ja: { label: '日本語', code: 'JA', htmlLang: 'ja', hreflang: 'ja', ogLocale: 'ja_JP', intl: 'ja-JP' },
  ko: { label: '한국어', code: 'KO', htmlLang: 'ko', hreflang: 'ko', ogLocale: 'ko_KR', intl: 'ko-KR' },
};

export const isLocale = (v: string | undefined): v is Locale => !!v && (LOCALES as readonly string[]).includes(v);

/** Route = locale-independent path starting with '/', e.g. '/', '/resume/', '/projects/dora-email/'. */
export const localizePath = (route: string, locale: Locale) =>
  locale === DEFAULT_LOCALE ? route : `/${locale}${route}`;

/** Split a pathname into its locale and locale-independent route. */
export const splitPath = (pathname: string): { locale: Locale; route: string } => {
  const seg = pathname.split('/')[1];
  if (isLocale(seg) && seg !== DEFAULT_LOCALE) {
    const rest = pathname.slice(seg.length + 1) || '/';
    return { locale: seg, route: rest.startsWith('/') ? rest : `/${rest}` };
  }
  return { locale: DEFAULT_LOCALE, route: pathname || '/' };
};

/** Replace {name} placeholders. */
export const fmt = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));

/** Space between joined phrases: none for Chinese and Japanese. */
export const wordGap = (locale: Locale) => (locale === 'zh' || locale === 'ja' ? '' : ' ');
