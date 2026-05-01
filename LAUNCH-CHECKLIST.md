# Sinyx Website Launch Checklist

## Before Deploy

- Confirm the live domain is `sinyx.me`.
- Confirm the API origin is `https://api.sinyx.me`.
- Confirm the demo endpoint is live at `https://api.sinyx.me/v1/demo`.
- Confirm the Cloudflare Turnstile site key allows `sinyx.me`.
- Confirm RapidAPI pricing, plan names, and limits match `/pricing`.
- Review `/tos` and `/privacy` for legal accuracy.
- Confirm PNG launch assets are present in `assets/exports/png`.

## Vercel Settings

- Project root: `sinyx-website`
- Framework preset: Other
- Build command: leave empty
- Output directory: leave empty or `.`
- Install command: leave empty

## Local Preview

- Run `node preview-server.mjs` from `sinyx-website`.
- Open `http://127.0.0.1:4173`.
- Click through `/docs`, `/pricing`, `/tos`, and `/privacy`.

## After Deploy

- Open `https://sinyx.me/`.
- Test clean URLs: `/start`, `/docs`, `/pricing`, `/tos`, `/privacy`.
- Test redirect: `/terms` should redirect to `/tos`.
- Test redirect: `/api` should open RapidAPI pricing.
- Test the demo with a public URL after Turnstile verification.
- Submit `https://sinyx.me/sitemap.xml` to Google Search Console.
- Check social preview uses `https://sinyx.me/assets/social/sinyx-og-card.png`.

## Smoke Test URLs

- `https://sinyx.me/`
- `https://sinyx.me/docs`
- `https://sinyx.me/start`
- `https://sinyx.me/pricing`
- `https://sinyx.me/tos`
- `https://sinyx.me/privacy`
- `https://sinyx.me/robots.txt`
- `https://sinyx.me/llms.txt`
- `https://sinyx.me/.well-known/security.txt`
