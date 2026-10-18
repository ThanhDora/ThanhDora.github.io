import { LOCALE_META, localizePath, type Locale } from '../i18n/config';

export const formatMonth = (ym: string, locale: Locale = 'en') => {
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString(LOCALE_META[locale].intl, {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  });
};

export const formatDay = (ymd: string, locale: Locale = 'en') =>
  new Date(`${ymd}T00:00:00Z`).toLocaleDateString(LOCALE_META[locale].intl, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });

export const projectPath = (id: string, locale: Locale = 'en') => localizePath(`/projects/${id}/`, locale);
