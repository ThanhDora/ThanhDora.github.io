// Shape of a translation file. English text lives in ../profile.ts; every other
// locale provides the same fields here. Proper nouns, tech names and the name
// "Lê Thanh Đạt" stay untranslated.

export interface ProjectText {
  summary: string;
  highlights: string[];
  overview: string[];
  features: string[];
  architecture: string[];
  note?: string;
  status?: string;
}

export interface LocaleContent {
  identity: { role: string; tagline: string; location: string; timezone: string };
  hero: { label: string; headlinePrefix: string; headlineItalic: string; headlineSuffix: string; lead: string };
  about: { heading: string; paragraphs: string[] };
  /** Same order as PROFILE_DATA.skills. */
  skillCategories: string[];
  /** Optional translations for generic (non-tech-name) skill items. */
  skillItems?: Record<string, string>;
  /** Keyed by project id. */
  projects: Record<string, ProjectText>;
}
