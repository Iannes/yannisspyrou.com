/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        prose: {
          body: 'hsl(var(--prose-body))',
          heading: 'hsl(var(--prose-heading))',
          link: 'hsl(var(--prose-link))',
          'code-bg': 'hsl(var(--prose-code-bg))',
          'code-text': 'hsl(var(--prose-code-text))',
          'blockquote-border': 'hsl(var(--prose-blockquote-border))',
          blockquote: 'hsl(var(--prose-blockquote-text))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.zinc.900'),
              '&:hover': {
                color: theme('colors.zinc.700'),
              },
              textDecoration: 'underline',
              textDecorationColor: theme('colors.zinc.400'),
              textUnderlineOffset: '2px',
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.900'),
            },
            code: {
              color: theme('colors.zinc.900'),
              backgroundColor: theme('colors.zinc.100'),
              borderRadius: theme('borderRadius.md'),
              padding: `${theme('padding.1')} ${theme('padding.1.5')}`,
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },
        invert: {
          css: {
            a: {
              color: theme('colors.zinc.100'),
              '&:hover': {
                color: theme('colors.zinc.300'),
              },
              textDecorationColor: theme('colors.zinc.700'),
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.100'),
            },
            code: {
              color: theme('colors.zinc.100'),
              backgroundColor: theme('colors.zinc.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
