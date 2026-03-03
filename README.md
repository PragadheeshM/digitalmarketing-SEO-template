# Nexus Digital Marketing Agency Template

A modern, conversion-focused digital marketing agency website template. Built from scratch using fully static assets.

## Features & Technologies
- **Responsive Design**: Mobile-first architecture using Tailwind CSS utilities.
- **Pure Static HTML5**: No backend or framework logic.
- **Vanilla JavaScript**: Lightweight interactions for mobile menu, scroll effects, and RTL toggle without dependencies.
- **Tailwind CSS via CDN**: Fully designed using modern utility classes. Customizations handled in `tailwind.config` block.
- **RTL Support**: Built-in script and styling logic for right-to-left languages.
- **Aesthetics**: Premium shadows, smooth gradients, modern spacing, and clean typography (Inter font).

## Included Pages (13 Total)

**Marketing Pages**
1. `index.html` (Main Homepage)
2. `index2.html` (Alternative Homepage)
3. `about.html` (Company Info)
4. `services.html` (Service Breakdown)
5. `case-studies.html` (Portfolio)
6. `pricing.html` (Plans & FAQs)
7. `contact.html` (Forms & Map)

**Authentication & Dashboard Forms**
8. `login.html` (Sign In)
9. `signup.html` (Registration)
10. `admin-dashboard.html` (Agency Portal)
11. `user-dashboard.html` (Client Portal)

**Utility**
12. `404.html` (Error Page)
13. `coming-soon.html` (Pre-launch)

## File Structure

```
digital-agency/
│
├── index.html            
├── index2.html
├── about.html
├── services.html
├── case-studies.html
├── pricing.html
├── contact.html
├── login.html
├── signup.html
├── admin-dashboard.html
├── user-dashboard.html
├── 404.html
├── coming-soon.html
├── README.md
│
├── css/
│   └── style.css         # Global overrides and custom utilities
│
└── js/
    ├── main.js           # Navigation and UI logic
    └── rtl-toggle.js     # Direction management
```

## How to use
1. Open any `.html` file directly in your browser. No build steps required.
2. To customize Tailwind colors, edit the `<script>tailwind.config = {...}</script>` block found in the `<head>` of every HTML file.
3. For RTL, click the "RTL" button on the global navigation bar (works on pages that include the header).

## Customization
- Replace abstract placeholder vectors in `index.html` with your actual assets.
- Update `style.css` if you need custom `@layer` components that tailwind utilities cannot fulfill.

Enjoy building your digital agency!
