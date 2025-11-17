# Design Guidelines: Educational Security Awareness Demonstration

## Design Approach

**Reference-Based Design**: This project requires two distinct visual identities working in harmony:

1. **Login Page**: Faithful recreation of Instagram's authentic login interface to demonstrate phishing vulnerability
2. **Admin Dashboard**: Clean, modern data display inspired by Linear's dashboard patterns for clarity and professionalism

**Key Principle**: The login page must feel authentic enough to demonstrate the deception risk, while the dashboard must clearly convey the educational purpose through transparency and data organization.

---

## Typography

**Login Page (Instagram Style)**:
- Primary Font: System fonts (-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
- Brand Lockup: "Instagram" wordmark in signature script font (Billabong or similar via Google Fonts)
- Form Labels: 11px weight-400, uppercase tracking-wide
- Input Text: 14px weight-400
- Button Text: 14px weight-600
- Links: 12px weight-600

**Admin Dashboard**:
- Primary Font: Inter or similar modern sans-serif via Google Fonts
- Page Title: 32px weight-700
- Section Headers: 20px weight-600
- Data Labels: 14px weight-500
- Table Content: 14px weight-400
- Timestamps: 12px weight-400

---

## Layout System

**Tailwind Spacing Primitives**: Use units of 2, 4, 6, 8, 12, 16, 24 throughout (p-2, m-4, gap-6, etc.)

**Login Page Layout**:
- Centered vertical layout with max-w-sm container
- Mobile-first single column: Full viewport height with flexbox centering
- Desktop: Same centered approach, subtle gradient background
- Component spacing: gap-4 between form elements, gap-6 for major sections

**Admin Dashboard Layout**:
- Two-pane layout: Sidebar navigation (w-64) + Main content area
- Mobile: Stack sidebar above content
- Desktop: Fixed sidebar, scrollable content area
- Content padding: p-8 on desktop, p-4 on mobile
- Card-based layout: Each submission in individual cards with p-6 spacing

---

## Component Library

### Login Page Components

**Educational Banner**:
- Full-width sticky top banner with warning icon
- Height: h-16, padding px-6
- Bold text: "EDUCATIONAL DEMO - This is a security awareness simulation"
- Dismissible with X button on right

**Instagram Login Card**:
- Container: max-w-sm, border-1, rounded-sm
- Padding: p-10 on desktop, p-6 on mobile
- Instagram logo/wordmark centered at top with mb-8
- Form container with gap-4

**Form Inputs**:
- Height: h-10
- Border: 1px solid with rounded-sm
- Padding: px-2 py-1.5
- Placeholder text opacity-50
- Label: Floating label pattern (appears inside input, moves on focus)

**Login Button**:
- Full width, height h-10
- Rounded-sm, weight-600
- Disabled state when fields empty (opacity-50)

**Divider Section**:
- "OR" text centered with horizontal lines using flex pattern
- Margin: my-6

**Social Login**:
- Facebook login button with icon, full width, h-10
- Facebook blue styling reference

**Links Section**:
- "Forgot password?" centered link, mb-12
- Sign-up prompt at bottom in separate bordered card

**Footer Links**:
- Small centered text links in flex-wrap
- Language selector dropdown

### Admin Dashboard Components

**Sidebar Navigation**:
- Fixed sidebar with dashboard logo/title at top
- Navigation items with icons from Heroicons
- Active state indicator (border-l-4 accent)
- Sections: Dashboard, Captured Data, Statistics, Settings, Documentation

**Header Bar**:
- Page title with breadcrumb
- Real-time indicator: "Live" badge with pulse animation
- Total count: "X submissions captured"

**Submission Cards Grid**:
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gap: gap-6
- Each card contains:
  - Timestamp header with icon (weight-600)
  - Username field with label
  - Password field (shown as dots by default, reveal toggle icon)
  - IP address and user agent in smaller text
  - Copy button for data export

**Statistics Dashboard**:
- Top row: 4-column grid of stat cards (Total, Today, This Week, Success Rate)
- Each stat card: Large number (text-4xl weight-bold) with label below
- Chart area: Full-width line chart showing submissions over time (use Chart.js)

**Empty State**:
- Centered illustration placeholder
- "No submissions yet" message
- "Share the demo link to start capturing form data" subtext

**Real-time Updates**:
- Toast notifications slide in from top-right when new submission arrives
- New card appears with subtle scale-in animation
- Badge notification on sidebar when viewing other pages

---

## Images

**Login Page Background** (Desktop only):
- Mockup screenshot montage of Instagram feed interface
- Placement: Right side of split-screen layout (60% width)
- Mobile: Hide completely, show only centered login form
- Treatment: Subtle fade/blur at edges to blend

**Admin Dashboard**:
- No hero images required
- Use iconography from Heroicons for navigation and actions
- Optional: Placeholder charts using Chart.js library via CDN

---

## Animations

**Login Page**:
- Input focus: Subtle border transition (150ms ease)
- Button: Simple opacity change on hover (no fancy effects)
- Form validation: Shake animation on error (500ms)

**Admin Dashboard**:
- New submission: Scale-in animation (200ms ease-out)
- Toast notification: Slide-in from right (300ms)
- Live pulse: Gentle opacity animation on "Live" indicator (1.5s infinite)

**Philosophy**: Minimal animations - focus on clarity over flair.

---

## Accessibility

- Proper form labels (even if visually hidden with floating label pattern)
- Keyboard navigation throughout (tab order logical)
- Focus states clearly visible on all interactive elements
- ARIA labels for icon buttons ("Show password", "Copy data", etc.)
- Skip link to main content on dashboard
- Semantic HTML throughout (header, nav, main, aside, footer)
- Color-blind safe indicators (don't rely solely on color for information)

---

## Key Implementation Notes

1. **Two-Page Structure**: Separate routes for `/login` (Instagram clone) and `/admin` (dashboard)
2. **Real-time Connection**: WebSocket or polling for live dashboard updates
3. **Data Persistence**: Store submissions with timestamps in memory or database
4. **Educational Context**: Disclaimer banner must be prominent and unmissable
5. **Mobile Experience**: Both pages fully responsive with mobile-first approach
6. **Icons**: Use Heroicons via CDN for all dashboard icons and UI elements