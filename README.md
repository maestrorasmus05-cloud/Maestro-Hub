# Coding Hub — complete package

Everything requested in one app.

## Included features

1. **Log in / Sign up** (Supabase) + **Continue as guest**
2. **Full name required** on sign-up (and guest prompt) — used on the certificate
3. **12 lessons** = all 12 sections of *Responsive Web Design — Complete Course* (PDF) in full (text, code, tables, tips), each with a 3-question timed quiz
4. **Timed quizzes** — 10 questions per lesson (120 total), 5-minute clock with a %-time-left bar, answers autosaved, **no retries**, scores locked, answer review after submitting
5. **My Performance** — marks and progress
6. **Certificate of Completion** — your template + student name after all 12 quizzes
7. **Light / dark mode** — toggle on login and in the top bar
8. **Code Lab** — HTML/CSS/JS live preview + **personal project manager** (save / run / export) + **12 graded challenges** (the PDF's 6 capstone projects + 6 skill drills) with starter code, a requirements checklist and points
9. **Secret admin** — go to `#/admin` · password `codinghub-admin-2026`
10. **Download Coding Hub app** button on the login screen — builds `coding-hub-app.zip` in the browser (no internet, CDN or server needed; works from file:// too)
11. **AI Check** — optional Gemini key in `index.html`
12. **PWA** — manifest + service worker

## Version 9 — what changed
- **Quizzes:** 3 → 10 questions per lesson, harder (code reading, scenarios), answer order shuffled, 5 minutes. The clock is computed from the real time, so a phone pausing the tab can't slow or reset it. Answers are autosaved; after submitting you can review every question.
- **Challenges (Code Lab):** 12 challenges (3 Starter · 4 Intermediate · 5 Advanced). "Start" creates a project with starter code; "Check my solution" tests the code against the requirement checklist and awards points once. Checks inspect your HTML/CSS/JS source (e.g. does it use `clamp()`, `container-type`, `aria-expanded`), they do not judge visual design.
- **Certificate countdown:** ring + "% to go" + quizzes left on the Certificate page (animated), a live bar on the Dashboard, and a "% time left" bar in every quiz. The certificate rule is unchanged: all 12 quizzes taken.
- **Mobile:** bottom tab bar, 44px touch targets, Code Lab editors as tabs, no iOS input zoom, sticky quiz timer, in-page dialogs instead of prompt()/confirm(), page transitions that respect reduced-motion.
- **Fixed:** the certificate PNG filename now uses dashes instead of spaces.
- **Branding:** the manifest, icons and favicon are the indigo "CH" set that matches the app. A generic green set (#00ff88) that had been dropped in was removed; a duplicate "Install Coding Hub" button/script that had been inserted into the Code Lab starter template (breaking the app's JavaScript) was removed. `README-PWA.md` is superseded by the section below.

## Install as an app (PWA)
The installed app is the **same website** — same code, same lessons, quizzes, Code Lab, certificate and login. Nothing is duplicated or rewritten.

**Files:** `index.html` · `manifest.json` · `sw.js` · `favicon.svg` · `icon-192.png` · `icon-512.png` · `icon-maskable-192.png` · `icon-maskable-512.png` · `certificate-template.jpg` · `README.md`

**Install button:** "📲 Install App" on the login screen (and "📲 Install" in the top bar when the browser offers it).
- Chrome / Edge / Android / desktop: opens the browser's native install prompt.
- iPhone / iPad (Safari): shows how to use Share → Add to Home Screen (iOS has no install prompt API).
- Hidden automatically once the app is installed / running standalone.
- Opened from a local file: explains that installing needs HTTPS.

**Deploy (HTTPS is required for installing):** upload the folder as-is to GitHub Pages, Netlify, Vercel or Cloudflare Pages. All paths are relative (`./`), so it also works in a sub-folder (e.g. `user.github.io/coding-hub/`). `localhost` also counts as secure for testing.

**Test the Install button:**
1. Serve over HTTPS or `localhost` (e.g. `python3 -m http.server 8000`, open `http://localhost:8000`).
2. Chrome DevTools → Application → Manifest (no errors) and Service Workers (activated).
3. Reload once, then click **Install App** → accept the prompt → open it from your apps list / desktop.
4. Offline test: DevTools → Network → Offline, reload: the app still opens.

**Updating after future changes:** edit the files, then change `CACHE_NAME` in `sw.js` (e.g. `coding-hub-v8`) and redeploy. Pages are fetched network-first, so installed users get the new version the next time they open it online; the new service worker activates automatically.

**Privacy:** the service worker only caches this site's own files. It never touches Supabase, Gemini or any other site, and never caches non-GET requests, so passwords, tokens and user data are not cached by it. Progress and projects stay in the browser's localStorage as before.

## Latest revision
- Lessons now follow the PDF section-by-section and include its full content.
- The Download button creates the ZIP itself (own ZIP writer, assets embedded) instead of depending on a CDN library and fetch().

## Content revision
- Old HTML/CSS/JS lessons removed; lessons now follow the PDF's sections (viewport, units, Flexbox, Grid, media queries, fluid type/images, container queries, components, frameworks, testing/a11y/performance, advanced + capstones).
- The certificate template image says "HTML, CSS & JavaScript courses"; the app repaints that single line to "Responsive Web Design course" when rendering/downloading. The original file is unchanged.
- Progress saved against the old lessons no longer applies (new lesson IDs).

## Earlier changes
- Guest login now asks for a full name inline (required, min 2 chars) instead of `prompt()`
- Added the missing light/dark toggle to the login card
- Quiz clock starts permanently on open: refresh/leave can no longer reset it (no retries)
- Certificate loads from an embedded copy of the template when opened from `file://`; name placement fixed
- Code Lab preview iframe no longer has `allow-same-origin` (user code can't read the app's storage)
- Service worker cache bumped to v3
- CSS lesson 12 "Responsive Design" rewritten from *Responsive Web Design — Complete Course* (viewport, units, mobile-first, Flexbox/Grid, fluid type, responsive images, container queries, components, frameworks, testing/a11y/performance) with a new 3-question, 70s quiz

## Known limits (be aware)
- Scores, progress and the "lock" live in browser localStorage: clearing site data or editing it in DevTools resets them. True tamper-proof locking needs a server (e.g. a Supabase table with row-level security).
- The admin password is in client-side code, so it is a convenience gate, not real security.
- Supabase handles sign-up/login only; progress is not synced across devices.

## Supabase
- URL: https://gukzoovzpwmlpdseinkj.supabase.co
- Anon key is in `index.html` (loaded only when you use email login/signup)
- Guest mode works offline without Supabase

## How to open
1. Unzip this folder
2. Open `index.html` in a browser (or deploy the folder on HTTPS)
3. **Continue as guest** or Sign up with full name
4. Learn → take quizzes → unlock certificate at `#/certificate`
5. Admin: `#/admin` password `codinghub-admin-2026`

## Change admin password
In `index.html` search for `ADMIN_PASSWORD` and change it before public use.

## CEO on certificate
Jabiro Kubwimana Chris (as on the certificate template image)
