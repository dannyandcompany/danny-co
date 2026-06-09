# Danny & Company - Project Documentation

## Project Overview
Modern, production-ready company profile website built with Next.js 15, TypeScript, and TailwindCSS. Designed as a startup-grade frontend foundation.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.3
- **Styling**: TailwindCSS 3.4
- **UI Library**: React 19
- **Build Tool**: Next.js built-in

## Architecture

### Folder Structure
```
src/
├── app/              # Next.js App Router pages & layouts
├── components/       # Reusable React components
│   ├── common/       # Shared UI components (Button, etc.)
│   ├── header/       # Header with mobile navigation
│   ├── footer/       # Footer with links
│   └── sections/     # Page sections (Hero, Features, CTA)
├── lib/              # Utility functions (cn, formatDate, sleep)
└── types/            # Shared TypeScript interfaces
```

### Component Philosophy
- **Feature-based organization**: Each feature/section is self-contained
- **No complex abstractions**: Only 4 features in types (Feature, NavLink, SEOMetadata)
- **Client components**: Only Header uses 'use client' for mobile menu state
- **Minimal dependencies**: Just React and Next.js

## Key Files

### Configuration
- `tsconfig.json` - Path alias `@/*` points to `src/*`
- `tailwind.config.ts` - Custom color scheme (primary, secondary, accent)
- `next.config.js` - Security headers, image optimization config
- `postcss.config.js` - TailwindCSS processing

### Components
- `Header` - Sticky navigation with mobile hamburger menu
- `Footer` - Multi-column footer with links
- `HeroSection` - Gradient hero with CTA buttons
- `FeaturesSection` - 4-column grid of features
- `CTASection` - Simple call-to-action section
- `Button` - Reusable button with variants (primary, secondary, outline)

## Styling Approach
- **Utility-first**: TailwindCSS for all styling
- **Component classes**: Defined in globals.css (btn-primary, section-title, etc.)
- **Responsive**: Mobile-first design using Tailwind breakpoints (sm, md, lg)
- **Colors**: Defined in tailwind theme (primary #0f172a, secondary #1e293b, accent #3b82f6)

## Development Workflow

### Commands
```bash
npm install        # Install dependencies
npm run dev        # Start development server (port 3000)
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Check TypeScript
```

### Key Patterns
1. **Path aliases**: Always use `@/` for imports from src/
2. **Client components**: Only use 'use client' when state/interactivity needed
3. **Types**: Define all props interfaces in component files or types/index.ts
4. **Utilities**: Use `cn()` for conditional class merging

## Environment Variables
- `NEXT_PUBLIC_APP_NAME` - App name (used in metadata, etc.)
- `NEXT_PUBLIC_APP_URL` - Base URL for links and API calls

## Security
- Headers configured: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- No external script injection
- CSRF ready for future API integration

## Future Enhancements
- Add image optimization with next/image
- Implement blog/news section
- Add contact form with backend integration
- Set up analytics (Vercel Analytics)
- Add dark mode support
- Create additional page routes (About, Services, etc.)

## Deployment
- **Vercel**: Direct deployment (recommended for Next.js)
- **Docker**: Create Dockerfile for containerization
- **Traditional**: `npm run build && npm start`

## Performance Considerations
- Next.js automatic code splitting
- Image optimization ready (next/image)
- CSS minification via TailwindCSS
- Static site generation for home page

## Notes
- No database/API integration included (can be added as needed)
- No authentication system (add NextAuth.js if needed)
- Minimal component libraries (add shadcn/ui if more complex UI needed)
