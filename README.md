# Maestro Hub

AI-powered social platform UI — spaces, moments, live rooms, and Maestro AI.

## Files

- `index.html` — full app (auth + all pages)
- `favicon.svg` — lime “M” icon

## Quick start

1. Open `index.html` in a browser, **or** serve the folder:
   ```bash
   npx serve .
   ```
2. Use **Sign up / Log in** (demo mode works without keys) or **Continue as guest**.
3. When you have Supabase keys, open `index.html` and replace:

```js
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

with your Project URL and anon key from Supabase → Project Settings → API.

## Auth

- **Demo / guest**: works offline; session stored in `localStorage`
- **Supabase**: real email/password when keys are set
- **Log out**: Settings → Data & export → Log out

## Next steps

1. Create tables in Supabase (see SQL in the setup guide)
2. Paste keys into `index.html`
3. Push this folder to GitHub and deploy (Pages / Netlify / Vercel)

