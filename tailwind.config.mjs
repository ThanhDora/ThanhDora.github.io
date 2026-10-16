import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'rgb(var(--color-canvas) / <alpha-value>)',
          elevated: 'rgb(var(--color-canvas-elevated) / <alpha-value>)',
          subtle: 'rgb(var(--color-canvas-subtle) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          secondary: 'rgb(var(--color-ink-secondary) / <alpha-value>)',
          muted: 'rgb(var(--color-ink-muted) / <alpha-value>)',
        },
        sage: {
          DEFAULT: 'rgb(var(--color-sage) / <alpha-value>)',
          deep: 'rgb(var(--color-sage-deep) / <alpha-value>)',
          soft: 'rgb(var(--color-sage-soft) / <alpha-value>)',
        },
        rule: {
          DEFAULT: 'rgb(var(--color-rule) / <alpha-value>)',
          strong: 'rgb(var(--color-rule-strong) / <alpha-value>)',
        },
        // Named palette tokens from Quiet Atelier spec
        charcoal: '#1C1917',
        linen: '#F5F1EB',
        stone: '#E8E2D9',
        taupe: '#A89F91',
      },
      fontFamily: {
        serif: ['"Playfair Display Variable"', '"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['"Manrope Variable"', '"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        editorial: '-0.025em',
        widest: '0.16em',
      },
      transitionTimingFunction: {
        atelier: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      typography: () => ({
        atelier: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-ink-secondary))',
            '--tw-prose-headings': 'rgb(var(--color-ink))',
            '--tw-prose-lead': 'rgb(var(--color-ink))',
            '--tw-prose-links': 'rgb(var(--color-sage))',
            '--tw-prose-bold': 'rgb(var(--color-ink))',
            '--tw-prose-counters': 'rgb(var(--color-ink-muted))',
            '--tw-prose-bullets': 'rgb(var(--color-sage))',
            '--tw-prose-hr': 'rgb(var(--color-rule))',
            '--tw-prose-quotes': 'rgb(var(--color-ink))',
            '--tw-prose-quote-borders': 'rgb(var(--color-sage))',
            '--tw-prose-captions': 'rgb(var(--color-ink-muted))',
            '--tw-prose-code': 'rgb(var(--color-ink))',
            '--tw-prose-pre-code': '#F5F1EB',
            '--tw-prose-pre-bg': '#1C1917',
            '--tw-prose-th-borders': 'rgb(var(--color-rule-strong))',
            '--tw-prose-td-borders': 'rgb(var(--color-rule))',
          },
        },
      }),
    },
  },
  plugins: [typography],
};
