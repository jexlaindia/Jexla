# JEXLA Group Corporate Website Design Guidelines

## Design Approach
**System**: Material Design-inspired corporate system with professional aesthetics prioritizing trust, clarity, and multi-sector versatility. The design balances modern web conventions with traditional corporate values suitable for manufacturing, services, and export-import sectors.

## Core Design Principles
1. **Professional Trust**: Corporate credibility through clean layouts, structured information hierarchy, and restrained visual treatment
2. **Sector Versatility**: Design system flexible enough to represent manufacturing, technical services, sustainability, and global trade
3. **Accessible Information**: Clear navigation and content structure enabling quick comprehension of diverse business verticals

---

## Typography

**Font Family**: Inter (Google Fonts)
- Primary font for all content
- Weights: 300 (light), 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

**Hierarchy**:
- H1 (Hero): text-4xl sm:text-6xl, font-extrabold
- H2 (Section Headers): text-3xl md:text-4xl, font-bold
- H3 (Card Titles): text-2xl md:text-3xl, font-bold
- Body Large: text-lg md:text-2xl
- Body Regular: text-base, leading-relaxed
- Small/Meta: text-sm, text-xs

---

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 10, 12, 16, 20, 24
- Section vertical padding: py-16 md:py-20
- Card padding: p-6 md:p-8 (standard), p-8 md:p-12 (featured)
- Element spacing: space-x-3, space-x-6, space-x-8, space-y-8

**Container Strategy**:
- Max-width: max-w-7xl for all sections
- Horizontal padding: px-4 sm:px-6 lg:px-8
- Centered: mx-auto throughout

**Grid Patterns**:
- Contact cards: grid-cols-1 md:grid-cols-3
- Two-column layouts: flex-col md:flex-row with space management

---

## Component Library

### Navigation
- Sticky header (sticky top-0 z-50) with white background and shadow-md
- Logo + brand name on left, horizontal navigation links on right
- Mobile: Hide navigation on small screens (hidden md:flex)
- Link hover: text-gray-600 → text-jexla-primary transition

### Hero Section
- Dark background (bg-gray-900) with white text
- Centered alignment with max-w-4xl for body text
- Large typography showcase with gradient/multi-line headlines
- No background image - solid color with typographic focus

### Content Cards
- White backgrounds (bg-white) with rounded-xl corners
- Shadow: shadow-lg for elevation
- Border accents: border-l-4 with color-coded left borders per category
- Hover effect: translateY(-5px) with enhanced shadow (card-hover class)

### Section Patterns
**About Section**: Single featured card with border-t-4 accent
**Promoters Section**: Horizontal layout with CEO photo (160x208px, portrait aspect ratio) + biography text, alternating bg-gray-100
**Business Verticals**: Stacked cards with large emoji icons (text-5xl md:text-6xl), color-coded left borders
**Contact Section**: Dark section (bg-gray-900) with three-column grid of contact cards

### Forms & Inputs
None required for initial implementation - contact via email/phone links only

---

## Color Palette (Descriptions Only)

**Primary Accent**: Emerald/corporate green for brand identity, CTAs, and accents
**Backgrounds**: Light gray (#f8f9fa) body, white cards, dark gray/black for hero and footer
**Text**: Dark gray for body, pure white for dark sections, medium gray for secondary text
**Borders**: Use primary accent for featured elements, color-coded borders for business categories (blue, green, orange)

---

## Animations

**Minimal Motion**:
- Headline fade-in from top on page load (fadeInDown, 0.8s)
- Card hover lift (5px translateY with shadow enhancement, 0.3s)
- Link color transitions (0.15s duration)

**No Complex Animations**: Avoid scroll-triggered effects, parallax, or distracting motion

---

## Images

**Logo Placeholder**: 40x40px circular, placed in header next to brand name
**CEO Photo**: 160x208px portrait (half passport size), positioned left of biography in Promoters section with rounded-lg corners and border-2 accent
**No Hero Image**: Hero section uses solid dark background with pure typographic treatment
**Icons**: Large emoji (🏭⚙️♻️📦📧📞) used as visual anchors for business verticals and contact methods - no custom SVG icons

---

## Accessibility
- Semantic HTML structure with proper heading hierarchy
- Sufficient color contrast (dark text on light, light text on dark)
- Focus states inherit from Tailwind defaults
- Responsive breakpoints: mobile-first with sm, md, lg breakpoints

---

## Responsive Behavior
- Single column on mobile, multi-column on desktop
- Stack navigation links on mobile (implement hamburger menu as needed)
- Fluid typography scaling (text-4xl → text-6xl at larger breakpoints)
- Image sizing adjusts: w-32 h-40 → w-40 h-52 for CEO photo
- Consistent padding reduction on mobile: py-16 md:py-20, p-6 md:p-8