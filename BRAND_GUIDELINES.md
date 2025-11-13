# Brand Guidelines - Locale Letter

## Overview

Locale Letter is a modern, multilingual newsletter campaign platform that helps organizations create, localize, and send personalized newsletters to global audiences. Our brand reflects innovation, global connectivity, and simplicity.

## Brand Identity

### Brand Name

**Locale Letter**

### Tagline

"Multilingual Newsletter Campaigns Made Simple"

### Brand Values

- **Global**: Connecting people across languages and cultures
- **Innovative**: Leveraging AI and automation for better content
- **Simple**: Making complex multilingual campaigns easy
- **Reliable**: Trustworthy platform for professional communication

## Logo

### Primary Logo

The Locale Letter logo consists of:

- **Icon**: "LL" monogram in a rounded square
- **Wordmark**: "Locale Letter" in bold, modern sans-serif font

### Logo Usage

- Use the full logo (icon + wordmark) for headers and primary placements
- Use the icon alone for favicons and small spaces
- Maintain clear space around the logo (minimum 1x the icon height)

### Logo Colors

- **Light Background**: Primary-600 (#0284c7) icon with dark text
- **Dark Background**: Primary-400 (#38bdf8) icon with light text

## Color Palette

### Primary Colors

**Primary Blue**

- Primary-50: `#f0f9ff` - Light backgrounds, subtle highlights
- Primary-100: `#e0f2fe` - Hover states, light accents
- Primary-200: `#bae6fd` - Secondary backgrounds
- Primary-300: `#7dd3fc` - Tertiary elements
- Primary-400: `#38bdf8` - Dark mode primary
- Primary-500: `#0ea5e9` - Base primary color
- Primary-600: `#0284c7` - **Main brand color** (buttons, links, active states)
- Primary-700: `#0369a1` - Hover states
- Primary-800: `#075985` - Darker accents
- Primary-900: `#0c4a6e` - Darkest primary

### Neutral Colors

**Gray Scale**

- White: `#ffffff` - Primary backgrounds
- Gray-50: `#f9fafb` - Subtle backgrounds
- Gray-100: `#f3f4f6` - Light borders, backgrounds
- Gray-200: `#e5e7eb` - Borders, dividers
- Gray-300: `#d1d5db` - Input borders
- Gray-400: `#9ca3af` - Placeholder text
- Gray-500: `#6b7280` - Secondary text
- Gray-600: `#4b5563` - Body text
- Gray-700: `#374151` - Headings
- Gray-800: `#1f2937` - Dark backgrounds
- Gray-900: `#111827` - Darkest backgrounds
- Gray-950: `#030712` - Dark mode backgrounds

### Semantic Colors

**Success (Green)**

- Green-100: `#dcfce7` - Success backgrounds
- Green-600: `#16a34a` - Success text, icons
- Green-900: `#14532d` - Dark mode success

**Warning (Yellow)**

- Yellow-100: `#fef3c7` - Warning backgrounds
- Yellow-600: `#ca8a04` - Warning text, icons
- Yellow-900: `#713f12` - Dark mode warning

**Error (Red)**

- Red-100: `#fee2e2` - Error backgrounds
- Red-600: `#dc2626` - Error text, icons
- Red-900: `#7f1d1d` - Dark mode error

**Info (Blue)**

- Blue-100: `#dbeafe` - Info backgrounds
- Blue-600: `#2563eb` - Info text, icons
- Blue-900: `#1e3a8a` - Dark mode info

## Typography

### Primary Font Family

**Inter** - Modern, clean sans-serif font

- Used for: Body text, headings, UI elements
- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Monospace Font Family

**JetBrains Mono** - Technical, readable monospace font

- Used for: Code snippets, technical content
- Weights: 400 (Regular), 500 (Medium)

### Font Hierarchy

**Headings**

- H1: `text-5xl md:text-6xl font-bold` (48-60px)
- H2: `text-2xl font-bold` (24px)
- H3: `text-lg font-semibold` (18px)
- H4: `text-base font-semibold` (16px)

**Body Text**

- Large: `text-xl` (20px)
- Base: `text-base` (16px)
- Small: `text-sm` (14px)
- Extra Small: `text-xs` (12px)

## Spacing & Layout

### Grid System

- Container max-width: 1280px (with padding)
- Sidebar width: 256px (16rem)
- Content padding: 24px (1.5rem)

### Spacing Scale

- xs: 4px (0.25rem)
- sm: 8px (0.5rem)
- md: 16px (1rem)
- lg: 24px (1.5rem)
- xl: 32px (2rem)
- 2xl: 48px (3rem)

### Border Radius

- Small: 8px (0.5rem) - Buttons, inputs
- Medium: 12px (0.75rem) - Cards, modals
- Large: 16px (1rem) - Large containers
- Full: 9999px - Pills, badges

## Components

### Buttons

**Primary Button**

- Background: Primary-600
- Text: White
- Hover: Primary-700
- Focus: Ring Primary-500

**Secondary Button**

- Background: Gray-200 (light) / Gray-700 (dark)
- Text: Gray-900 (light) / Gray-100 (dark)
- Hover: Gray-300 (light) / Gray-600 (dark)

**Outline Button**

- Border: Primary-600
- Text: Primary-600
- Hover: Primary-50 background

**Ghost Button**

- Transparent background
- Text: Gray-700
- Hover: Gray-100 background

### Cards

- Background: White (light) / Gray-900 (dark)
- Border: Gray-200 (light) / Gray-800 (dark)
- Border radius: 12px
- Shadow: Subtle shadow-sm
- Padding: 24px (default)

### Inputs

- Border: Gray-300 (light) / Gray-700 (dark)
- Focus: Primary-500 ring
- Border radius: 8px
- Padding: 10px 16px

### Badges

- Border radius: Full (pill shape)
- Padding: 4px 10px (small), 4px 12px (medium)
- Font size: 12px (small), 14px (medium)

## Iconography

### Icon Style

- Stroke-based icons (2px stroke width)
- Rounded line caps and joins
- Consistent 24x24px viewBox
- Use Heroicons or similar style

### Icon Sizes

- Small: 16px (w-4 h-4)
- Medium: 20px (w-5 h-5)
- Large: 24px (w-6 h-6)
- Extra Large: 32px (w-8 h-8)

## Dark Mode

### Color Adaptations

- Backgrounds: Gray-900, Gray-950
- Text: Gray-100, Gray-300
- Borders: Gray-800
- Primary: Use lighter shades (Primary-400 instead of Primary-600)

### Implementation

- Support system preference (`prefers-color-scheme`)
- Provide manual toggle option
- Maintain contrast ratios (WCAG AA minimum)

## Accessibility

### Contrast Ratios

- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Minimum 3:1

### Focus States

- Visible focus rings (2px, Primary-500)
- Keyboard navigation support
- ARIA labels for icons

### Screen Reader Support

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- ARIA attributes where needed

## Voice & Tone

### Writing Style

- **Clear**: Use simple, direct language
- **Professional**: Maintain business-appropriate tone
- **Friendly**: Approachable but not casual
- **Concise**: Get to the point quickly

### Example Copy

- ✅ "Create your first campaign in minutes"
- ❌ "Get started with our amazing platform that will revolutionize your newsletter experience"

## Usage Examples

### Do's

- ✅ Use Primary-600 for primary actions
- ✅ Maintain consistent spacing
- ✅ Use Inter font for all text
- ✅ Support dark mode
- ✅ Keep UI clean and uncluttered

### Don'ts

- ❌ Mix different blue shades for primary actions
- ❌ Use more than 3 font sizes per section
- ❌ Ignore dark mode
- ❌ Overcrowd interfaces
- ❌ Use low contrast text

## Assets

### Logo Files

- `logo.svg` - Vector logo (light)
- `logo-dark.svg` - Vector logo (dark)
- `favicon.ico` - Favicon (32x32)

### Image Guidelines

- Use high-resolution images (2x for retina)
- Optimize for web (WebP format preferred)
- Maintain aspect ratios
- Use consistent image style (modern, clean)

## Contact

For brand-related questions or asset requests, please contact the design team.

---

**Last Updated**: January 2025
**Version**: 1.0
