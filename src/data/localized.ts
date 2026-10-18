// Returns the profile with text for the requested locale merged over the English base.
import { PROFILE_DATA } from './profile';
import type { Locale } from '../i18n/config';
import type { LocaleContent } from './content/types';
import vi from './content/vi';
import zh from './content/zh';
import ja from './content/ja';
import ko from './content/ko';

const TRANSLATIONS: Partial<Record<Locale, LocaleContent>> = { vi, zh, ja, ko };

export function getProfile(locale: Locale) {
  const tr = TRANSLATIONS[locale];
  if (!tr) return PROFILE_DATA;
  return {
    ...PROFILE_DATA,
    identity: { ...PROFILE_DATA.identity, ...tr.identity },
    hero: { ...PROFILE_DATA.hero, ...tr.hero },
    about: { ...PROFILE_DATA.about, ...tr.about },
    skills: PROFILE_DATA.skills.map((g, i) => ({
      ...g,
      category: tr.skillCategories[i] ?? g.category,
      items: g.items.map((it) => tr.skillItems?.[it] ?? it),
    })),
    projects: PROFILE_DATA.projects.map((p) => ({ ...p, ...(tr.projects[p.id] ?? {}) })),
  };
}

export type LocalizedProfile = ReturnType<typeof getProfile>;
export type LocalizedProject = LocalizedProfile['projects'][number];
