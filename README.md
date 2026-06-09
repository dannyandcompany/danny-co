# Danny & Company

Modern, production-ready company profile built with Next.js 15, TypeScript, and TailwindCSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
danny-company/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app router
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/     # React components
│   │   ├── header/     # Header component
│   │   ├── footer/     # Footer component
│   │   └── sections/   # Page sections
│   ├── lib/            # Utility functions
│   └── types/          # TypeScript types
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
- `primary` - Dark blue (#0f172a)
- `secondary` - Slate (#1e293b)
- `accent` - Blue (#3b82f6)

### Fonts
Modify `tailwind.config.ts` to change the font family.

### Content
Update components in `src/components/sections/` for your content.

## 🔒 Security

- Security headers configured in `next.config.js`
- XSS protection enabled
- Content Security Policy ready for configuration

## 📦 Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **ESLint** - Code quality

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
Create a `Dockerfile` for containerized deployment.

### Traditional Hosting
```bash
npm run build
npm start
```

## 📝 License

MIT License - feel free to use for personal and commercial projects.

---

**Built with ❤️ for modern startups**
