# Sinyx Website Launch Checklist

## Before Deploy

- Confirm the live domain is `sinyx.me`.
- Confirm the API origin is `https://api.sinyx.me`.
- Confirm the homepage leads with the Sinyx engine, not only the monitoring pilot.
- Confirm the demo widget renders Turnstile and defaults to `context`.
- Confirm the pilot CTA opens an email to `ibasitkhan.98@gmail.com`.
- Confirm the API remains live for builder pages and RapidAPI users.
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
- Click through `/`, `/start`, `/docs`, `/mcp`, `/pricing`, `/tos`, and `/privacy`.

## After Deploy

- Open `https://sinyx.me/`.
- Test clean URLs: `/start`, `/docs`, `/pricing`, `/tos`, `/privacy`.
- Test redirect: `/terms` should redirect to `/tos`.
- Test redirect: `/api` should open RapidAPI pricing.
- Confirm the homepage headline is engine-first and the monitoring pilot is presented as a focused offer below it.
- Test the homepage demo form reaches the API after Turnstile verification.
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
