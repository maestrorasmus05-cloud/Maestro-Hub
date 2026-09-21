# Maestro Hub — Installable App

This version adds a Progressive Web App (PWA) install/download system.

## Files
- `index.html` — Maestro Hub website with Install App controls
- `manifest.json` — app name, icon, theme, and install settings
- `sw.js` — service worker for the app shell/offline caching
- `icon-192.png` / `icon-512.png` — PWA icons
- `favicon.svg` — site icon

## Deploy
Upload all files together to the same folder on Netlify, GitHub Pages, or another HTTPS host.

## Install
On a supported browser, the site will show an **Install Maestro Hub** button.
- Android/Chrome/Edge: use the Install button or browser menu.
- iPhone/iPad: Share → Add to Home Screen.
- Windows/macOS/Linux: use the browser's Install/Add to Home Screen option when offered.

The app must be served over HTTPS for the service worker and browser install prompt to work (localhost also works for development).

## Important
Supabase/API requests remain live and are not cached by the service worker.
