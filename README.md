# Daniel Ahenkorah — Portfolio

This is my accessible, interactive portfolio website that showcases projects from [GitHub](https://github.com/DanielUpTop).

## Features

- **Live GitHub integration** — Projects are fetched directly from your GitHub profile
- **Accessible by design** — Semantic HTML, skip links, keyboard navigation, ARIA labels, and `prefers-reduced-motion` support
- **Interactive UI** — Smooth scrolling, animated cards, project filtering, and responsive mobile navigation
- **Modern stack** — React 18, TypeScript, Vite, and Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [GitHub Pages](https://pages.github.com).

## Customisation

- Edit `src/data/profile.ts` to update bio, skills, and project highlights
- Project descriptions and featured flags are configured in `projectHighlights`
- Colours and fonts are defined in `tailwind.config.js`

## License

MIT
