# ITECHPRO Website

**Egypt's #1 Smart Hotels Technology Partner**

A professional, modern website built with Angular 18+ showcasing ITECHPRO's expertise in Smart Hotels solutions, including Web Applications, Mobile Apps, UI/UX, Data Analysis, and IoT integrations.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and neo-modern aesthetics
- **GSAP Animations**: Smooth scroll-triggered animations and micro-interactions
- **Responsive**: Mobile-first design with Tailwind CSS
- **Performance**: Lazy-loaded routes and optimized assets
- **Accessibility**: WCAG compliant with proper focus management
- **i18n Ready**: Prepared for Arabic/English localization

## 🛠️ Tech Stack

- **Framework**: Angular 18+ (standalone components, zoneless-ready)
- **Styling**: TailwindCSS + SCSS
- **Animations**: GSAP 3 + ScrollTrigger
- **Icons**: Custom SVG icons
- **Routing**: Lazy-loaded feature routes
- **State Management**: Angular Signals

## 🎨 Design System

### Color Palette
- **Background**: `#0B0E14` (bg), `#0F1624` (surface)
- **Primary**: `#00E0FF` (cyan)
- **Accent**: `#8B5CF6` (purple)
- **Muted**: `#94A3B8` (gray)

### Typography
- **English**: Inter font family
- **Arabic**: Cairo font family (ready for i18n)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── navbar/         # Navigation component
│   │   └── footer/         # Footer component
│   ├── directives/         # Custom GSAP directives
│   │   ├── gsap-reveal/   # Scroll-triggered animations
│   │   └── gsap-parallax/ # Parallax effects
│   ├── pages/             # Route components
│   │   ├── home/          # Landing page
│   │   ├── smart-hotels/  # Smart Hotels solutions
│   │   ├── projects/      # Portfolio showcase
│   │   ├── team/          # Team overview
│   │   ├── team-detail/   # Individual team member
│   │   └── contact/       # Contact form
│   ├── services/          # Data and business logic
│   │   └── content.service.ts
│   ├── app.component.ts   # Root component
│   ├── app.config.ts      # App configuration
│   └── app.routes.ts      # Routing configuration
├── assets/
│   ├── data/              # JSON content files
│   │   ├── services.json  # Service offerings
│   │   ├── smart-hotels.json # Smart Hotels features
│   │   ├── team.json      # Team member data
│   │   └── clients.json   # Client logos & integrations
│   └── img/               # Images and icons
└── styles.scss            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd itechpro-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build Commands

```bash
# Development build
npm run build

# Production build
npm run build --configuration production

# Watch mode
npm run watch

# Run tests
npm test
```

## 📱 Pages & Routes

### `/` - Home
- Hero section with company positioning
- Services overview (6 main categories)
- Company highlights and statistics
- Team preview (4 members)
- Call-to-action sections

### `/smart-hotels` - Smart Hotels Suite
- Comprehensive Smart Hotels solutions
- Features for hotels and guests
- Technology stack overview
- Integration capabilities

### `/projects` - Portfolio
- Project showcase with filtering
- Client success stories
- Technology integrations
- Case study templates

### `/team` - Team Overview
- Team member grid with hover effects
- Skills and expertise display
- Interactive team cards

### `/team/:slug` - Team Member Detail
- Individual team member profiles
- Skills matrix and bio
- Social media links
- Contact information

### `/contact` - Contact Form
- Contact form with validation
- Company information
- Social media links
- Location details

## 🎭 GSAP Animations

### Directives Usage

```html
<!-- Basic reveal animation -->
<div gsapReveal="slide-up">Content</div>

<!-- With custom delay and duration -->
<div gsapReveal="scale" [delay]="0.2" [duration]="1.2">Content</div>

<!-- Parallax effect -->
<div gsapParallax="y" [speed]="0.5">Content</div>
```

### Available Animation Types
- `fade` - Simple fade in
- `slide-up` - Slide up from bottom
- `slide-left` - Slide in from left
- `slide-right` - Slide in from right
- `scale` - Scale up from 0.95

## 📊 Content Management

### Adding New Services
Edit `src/assets/data/services.json`:
```json
{
  "icon": "icon-name",
  "title": "Service Title",
  "slug": "service-slug",
  "summary": "Service description",
  "link": "/route-path"
}
```

### Adding Team Members
Edit `src/assets/data/team.json`:
```json
{
  "slug": "member-slug",
  "name": "Full Name",
  "role": "Job Title",
  "avatar": "/path/to/avatar.jpg",
  "skills": ["Skill1", "Skill2"],
  "social": {
    "linkedin": "profile-url",
    "github": "profile-url",
    "email": "mailto:email@domain.com"
  },
  "bio": "Member bio description"
}
```

### Adding Smart Hotels Features
Edit `src/assets/data/smart-hotels.json`:
```json
{
  "features": [
    {
      "title": "Feature Title",
      "desc": "Feature description"
    }
  ]
}
```

## 🎨 Customization

### Colors
Update `tailwind.config.js` and `src/styles.scss`:
```javascript
// tailwind.config.js
colors: {
  primary: '#00E0FF',
  accent: '#8B5CF6',
  // ... other colors
}
```

### Fonts
Update `src/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Animations
Customize GSAP animations in `src/app/directives/gsap-reveal.directive.ts`

## 🌐 Internationalization (i18n)

The project is prepared for Arabic/English localization:

1. **Font Support**: Cairo font for Arabic text
2. **RTL Ready**: CSS prepared for right-to-left layouts
3. **Content Structure**: JSON files ready for translation
4. **Implementation**: Use Angular i18n or ngx-translate

## ♿ Accessibility Features

- **Focus Management**: Proper focus rings and keyboard navigation
- **Color Contrast**: High contrast ratios for readability
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Screen Reader**: ARIA labels and semantic markup
- **Keyboard Navigation**: Full keyboard accessibility

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Touch Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## 🚀 Performance Optimizations

- **Lazy Loading**: Route-level code splitting
- **Image Optimization**: Responsive images and lazy loading
- **CSS Minification**: Production builds optimize CSS
- **Bundle Analysis**: Built-in bundle analyzer

## 🧪 Testing

```bash
# Unit tests
npm test

# E2E tests (when implemented)
npm run e2e

# Test coverage
npm run test:coverage
```

## 📦 Deployment

### Build for Production
```bash
npm run build --configuration production
```

### Deploy to Various Platforms
- **Netlify**: Drag and drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **Firebase**: Use Firebase CLI
- **AWS S3**: Upload to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary to ITECHPRO. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: team@itechpro.com
- **Website**: https://itechpro.com
- **Documentation**: See inline code comments

## 🔄 Changelog

### v1.0.0 (Current)
- Initial website launch
- Core pages and components
- GSAP animations
- Responsive design
- Content management system

---

**Built with ❤️ by the ITECHPRO Team**
