# UNBLIND

**See what others miss.**

A modern blog exploring perception, power, and the invisible forces that shape decisions before they're made.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with hooks
- **TypeScript** - Strict mode enabled
- **Tailwind CSS** - Utility-first styling
- **react-router-dom** - Client-side routing
- **GSAP** - Scroll-triggered animations

## Features

- 🌓 Light/Dark mode with localStorage persistence
- 🌍 Multilingual support (EN/DE/ES)
- 📱 Fully responsive design
- ⚡ Optimized performance with Vite
- 🎨 Custom animations and visual effects
- 📖 6 fully written articles with interactive highlight boxes

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── article/       # Article content components
│   ├── illusions/     # Perception test visuals
│   ├── layout/        # Nav, Footer, Background
│   └── sections/      # Landing page sections
├── data/
│   ├── articles.ts    # Article metadata
│   └── articleContent.tsx  # Full article content
├── hooks/
│   └── useTheme.tsx   # Theme context
├── i18n/
│   ├── translations.ts    # EN/DE/ES translations
│   └── LanguageContext.tsx
├── pages/
│   ├── LandingPage.tsx
│   └── ArticlePage.tsx
└── styles/
    └── index.css      # Global styles & CSS variables
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Cyan | `#00f0ff` | Primary accent |
| Purple | `#a855f7` | Secondary accent |
| Blue | `#3b82f6` | Tertiary accent |
| Dark BG | `#050507` | Dark mode background |
| Light BG | `#f8f9fa` | Light mode background |

## Categories

- ◐ Perception vs. Reality
- ○ Blind Spots
- ⊘ Decision Errors
- ◇ Communication Mismatch
- ◎ Power & Systems
- ⬡ AI as Perception Layer

## License

All rights reserved © 2026 UNBLIND
