# AGENTS.md

Guidance for agents working in this repository.

## Project Summary

- Framework: Astro 5
- Styling: Tailwind CSS
- Content: Astro Content Collections with MDX posts
- Deployment target: Netlify (static output)

This is a personal blog/portfolio site for Yannis.

## Development Commands

```bash
# Start local dev server
npm run dev

# Build static production output
npm run build

# Preview production build locally
npm run preview
```

## Content Model

Blog posts live in:

- `src/content/blog/*.mdx`

Collection schema is defined in:

- `src/content/config.ts`

Required frontmatter for each post:

- `title: string`
- `description: string`
- `pubDate: date` (YAML date, e.g. `2025-02-12`)

Optional fields:

- `updatedDate: date`
- `heroImage: string`
- `tags: string[]`
- `readingTime: string`

## Key Routes

- `/` -> `src/pages/index.astro`
- `/about` -> `src/pages/about.astro`
- `/blog` -> `src/pages/blog/index.astro`
- `/blog/[...slug]` -> `src/pages/blog/[...slug].astro`
- `/tags` -> `src/pages/tags/index.astro`
- `/tags/[tag]` -> `src/pages/tags/[tag].astro`
- `/contact/success` -> `src/pages/contact/success.astro`

RSS has been intentionally removed from this project. Do not reintroduce `/rss.xml` unless explicitly requested.

## Contact Form (Netlify)

Form component:

- `src/components/ContactForm.astro`

Implementation details:

- Uses Netlify native form handling (`data-netlify="true"`)
- Honeypot spam field (`data-netlify-honeypot="bot-field"`)
- Posts to `/contact/success`

If you modify the form:

- Keep `form-name` hidden input aligned with form `name`
- Keep honeypot field intact
- Preserve input constraints (`required`, min/max lengths, valid input types)

## Editing Conventions

- Keep UI consistent with existing zinc-based design system.
- Prefer reusable components over large inline page sections.
- Do not add fragile viewport hacks or excessive client-side JS for simple layouts.
- Keep tags readable and accessible; avoid overly aggressive truncation.
- Use `encodeURIComponent` when generating tag URLs from tag names containing spaces/special characters.

## Validation Checklist

After content or route changes:

1. Run `npm run build`
2. Confirm blog, tag pages, and contact form pages build successfully
3. For form changes, verify Netlify still detects the `contact` form after deployment
