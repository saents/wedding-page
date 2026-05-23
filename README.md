# Wedding Invitation Website

A luxury, cinematic wedding invitation landing page built with **HTML, CSS, and JavaScript only** — no backend required. Deploy to [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) by dragging the folder or connecting your Git repo.

## Project Structure

```
wedding-app/
├── index.html      # Page structure & CDN libraries
├── style.css       # All styles (theme via CSS variables)
├── script.js       # ★ CONFIG + all functionality
├── README.md       # This file
└── images/         # (optional) Your local photos
    ├── bride.jpg
    ├── groom.jpg
    └── ...
```

## Quick Start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Edit **only** the `CONFIG` object at the top of `script.js`.
3. Replace placeholder images with your own paths or URLs.

## Customize Content (One Place)

Open `script.js` and edit the `CONFIG` object:

| Setting | What to change |
|--------|----------------|
| `bride` / `groom` | Names, bios, photo paths |
| `weddingDate` | Display date text |
| `countdownTarget` | ISO date for timer (`2026-06-14T16:00:00`) |
| `venue` | Name, address, Google Maps link & embed URL |
| `hero.image` | Full-screen hero background |
| `story` | Intro text, timeline events, background image |
| `details` | Ceremony / reception info cards |
| `schedule` | Day-of timeline |
| `gallery` | Array of image URLs or paths |
| `rsvp` | Message, form link, deadline note |
| `family` | Parents, wedding party names |
| `contact` | Email & phone in footer |
| `music.url` | MP3 file URL for ambient music |
| `theme` | Primary/accent colors & presets |
| `fonts` | Google Fonts family names |
| `features` | Toggle particles, petals, dark mode, etc. |

## Replace Images

### Option A — Local files (recommended)

1. Create an `images/` folder next to `index.html`.
2. Add your photos (e.g. `hero.jpg`, `bride.jpg`, `groom.jpg`).
3. Update paths in `CONFIG`:

```javascript
hero: { image: "images/hero.jpg" },
bride: { photo: "images/bride.jpg" },
groom: { photo: "images/groom.jpg" },
gallery: [
  "images/gallery-1.jpg",
  "images/gallery-2.jpg",
],
```

### Option B — External URLs

Use full URLs from your hosting or image CDN:

```javascript
hero: { image: "https://yoursite.com/photos/hero.jpg" },
```

**Tips:** Use JPG/WebP, resize to ~1920px wide for hero, ~800px for gallery. Compress with [Squoosh](https://squoosh.app/) for faster loading.

## Google Maps Embed

1. Open [Google Maps](https://maps.google.com) and search your venue.
2. Click **Share** → **Embed a map** → copy the `src` URL.
3. Paste into `CONFIG.venue.embedUrl`.
4. Set `CONFIG.venue.mapsLink` to the regular share link.

## Change Colors & Fonts

In `CONFIG.theme`:

```javascript
theme: {
  primary: "#c9a87c",
  primaryLight: "#e8d5b5",
  primaryDark: "#9a7b4f",
  accent: "#d4a5a5",
  presets: [ /* theme picker swatches */ ],
},
```

Update Google Fonts in `CONFIG.fonts.googleFontsUrl` and add the same `<link>` in `index.html` if you change families.

## RSVP Link

Point `CONFIG.rsvp.link` to Google Forms, Typeform, Zola, The Knot, or any RSVP URL:

```javascript
rsvp: {
  link: "https://forms.gle/your-form-id",
},
```

## Background Music

1. Host a small MP3 (royalty-free) on your site or CDN.
2. Set `CONFIG.music.url` to that file.
3. Guests can play/mute via the footer button.

## Feature Toggles

In `CONFIG.features`:

```javascript
features: {
  particles: true,      // Floating gold particles
  petals: true,         // Animated flower petals
  cursorGlow: true,     // Desktop cursor glow
  darkMode: true,       // Light/dark toggle
  themePicker: true,    // Color preset dots
  preloader: true,      // Loading screen
  parallax: true,       // Hero & story parallax
},
```

Set any to `false` to disable.

## Libraries (CDN)

Loaded automatically in `index.html`:

- [GSAP](https://greensock.com/gsap/) + ScrollTrigger
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Lenis](https://github.com/studio-freight/lenis) — smooth scrolling
- [Splitting.js](https://splitting.js.org/) — text reveals
- [Anime.js](https://animejs.com/) — countdown pulse

## Deploy

### Netlify
Drag the `wedding-app` folder to [Netlify Drop](https://app.netlify.com/drop).

### Vercel
```bash
npx vercel
```

No build step required — static files only.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Animations respect `prefers-reduced-motion` for accessibility.

## License

Free for personal wedding use. Replace all placeholder names, photos, and music before sharing publicly.
