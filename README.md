# News Sphere

A modern, multilingual newsletter campaign platform that helps organizations create, localize, and send personalized newsletters to global audiences with AI-powered content generation and automatic translation.

## 🚀 Features

- **Multilingual Support**: Automatically translate newsletters to your contacts' languages using Lingo
- **AI-Powered Content**: Generate engaging newsletter content from your sources using OpenAI
- **Campaign Management**: Create and manage newsletter campaigns with topics, sources, and style preferences
- **Contact Management**: Import and manage contacts with location data for targeted campaigns
- **Analytics & Insights**: Track performance by language, region, and engagement metrics
- **Modern UI**: Clean, accessible, and responsive design with dark mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Inter (primary), JetBrains Mono (monospace)
- **UI Components**: Custom component library

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd locale-letter
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
locale-letter/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Dashboard page
│   ├── campaigns/         # Campaign management pages
│   ├── contacts/          # Contact management page
│   ├── content/           # Scraped content page
│   ├── newsletters/       # Newsletter viewing page
│   ├── settings/          # Settings and configuration page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Table.tsx
│   │   ├── Modal.tsx
│   │   └── Tabs.tsx
│   └── layout/           # Layout components
│       ├── Sidebar.tsx
│       └── Header.tsx
├── BRAND_GUIDELINES.md   # Brand guidelines and design system
├── ASSESSMENT.md         # Project assessment document
└── README.md            # This file
```

## 🎨 Design System

The project follows a comprehensive design system with:
- **Primary Color**: Blue (#0284c7)
- **Typography**: Inter font family
- **Spacing**: Consistent 4px base unit
- **Components**: Reusable, accessible UI components
- **Dark Mode**: Full support with system preference detection

See [BRAND_GUIDELINES.md](./BRAND_GUIDELINES.md) for complete design specifications.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Pages

- **/** - Landing page with hero section and features
- **/dashboard** - Main dashboard with overview metrics
- **/campaigns** - List and manage campaigns
- **/campaigns/new** - Create new campaign
- **/contacts** - Manage contact list
- **/content** - View scraped content
- **/newsletters** - View sent newsletters
- **/settings** - Configuration and settings with tabs:
  - Email Configuration (service provider, API keys, SMTP)
  - API Keys (OpenAI, Lingo, Apify)
  - Integrations (connected services, webhooks)
  - Account (profile, password, preferences)

## 🎨 UI Components

### Button
Multiple variants: primary, secondary, outline, ghost, danger
Sizes: sm, md, lg

### Card
Container component with padding options: none, sm, md, lg

### Input
Form input with label, error states, and icon support

### Badge
Status indicators with variants: default, success, warning, danger, info

### Table
Data table with header, rows, and cells

### Modal
Overlay modal with customizable size

### Tabs
Tab navigation component with Tab and TabPanel sub-components

## 🌙 Dark Mode

The application supports dark mode through:
- System preference detection (`prefers-color-scheme`)
- Automatic color adaptation
- Consistent contrast ratios

## ♿ Accessibility

- WCAG AA contrast ratios
- Keyboard navigation support
- Focus states for all interactive elements
- ARIA labels for icons
- Semantic HTML structure

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 📚 Documentation

- [Brand Guidelines](./BRAND_GUIDELINES.md) - Complete design system documentation
- [Assessment](./ASSESSMENT.md) - Project requirements and specifications

---

## 📋 Changelog

### [2025-01-XX] - Initial UI Implementation

#### Added
- **Component Library**
  - `Button` component with 5 variants (primary, secondary, outline, ghost, danger) and 3 sizes
  - `Card` component with configurable padding
  - `Input` component with label, error states, and icon support
  - `Badge` component with 5 variants and 2 sizes
  - `Table` component with header, row, and cell sub-components
  - `Modal` component with customizable sizes
  - `Tabs` component with Tab and TabPanel sub-components for tabbed interfaces

- **Layout Components**
  - `Sidebar` navigation with active state highlighting
  - `Header` component with search and notifications

- **Pages**
  - Landing page (`/`) with hero section, features, and CTA
  - Dashboard page (`/dashboard`) with metrics cards and performance charts
  - Campaigns list page (`/campaigns`) with data table
  - New campaign page (`/campaigns/new`) with form for creating campaigns
  - Contacts page (`/contacts`) with search and contact management
  - Content page (`/content`) for viewing scraped articles
  - Newsletters page (`/newsletters`) for viewing sent newsletters
  - Settings page (`/settings`) with tabbed interface for:
    - Email configuration (service provider, API keys, SMTP settings)
    - API keys management (OpenAI, Lingo, Apify)
    - Integrations status and webhook configuration
    - Account settings (profile, password, preferences)

- **Design System**
  - Brand color palette (Primary blue scale)
  - Typography system (Inter + JetBrains Mono)
  - Spacing scale and border radius standards
  - Dark mode support
  - Component variants and states

- **Brand Guidelines**
  - Complete brand guidelines document (`BRAND_GUIDELINES.md`)
  - Color palette specifications
  - Typography hierarchy
  - Component usage guidelines
  - Accessibility standards

#### Changed
- Updated `globals.css` with brand color variables (maintaining existing structure)
- Updated `layout.tsx` with Inter and JetBrains Mono fonts
- Updated metadata with Locale Letter branding

#### Technical Details
- All components are TypeScript with proper type definitions
- Components follow DRY principles with minimal repetition
- Consistent naming conventions and file structure
- No functionality/logic - pure UI components only
- Maintained existing global.css structure
- Used existing path aliases (`@/*`)

#### Design Highlights
- Modern, clean interface with smooth transitions
- Consistent spacing and typography
- Professional color scheme
- Responsive design (mobile-first approach)
- Accessible components with proper focus states
- Dark mode support throughout

---

**Note**: This is a UI-only implementation. No backend functionality, state management, or data fetching is included. All components are static and display-only.
