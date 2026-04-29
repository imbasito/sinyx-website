# Sinyx Website

Static marketing, documentation, and legal pages for Sinyx.

## Deployment

The website can be deployed as static files from this directory. Recommended hosts are Vercel static output, Cloudflare Pages, Netlify, or any CDN-backed static origin.

For Vercel, deploy this directory as the project root. `vercel.json` enables clean URLs, security headers, asset caching, and redirects for `/terms` and `/api`.

The source files intentionally remain plain `.html` files because this is a static site. Public links use clean routes such as `/docs`, `/pricing`, `/tos`, and `/privacy`; Vercel's `cleanUrls` setting maps those routes to the source files in production.

For local preview with production-style routes:

```bash
node preview-server.mjs
```

Then open `http://127.0.0.1:4173`.

## Production Checklist

- Point `sinyx.me` to the static deployment.
- Keep the API on `api.sinyx.me`; the demo calls `https://api.sinyx.me/v1/demo`.
- Upload `robots.txt`, `llms.txt`, `sitemap.xml`, `site.webmanifest`, `vercel.json`, `_headers`, `.well-known/security.txt`, and `404.html` with the site.
- Use `assets/social/sinyx-og-card.png` as the production Open Graph image.
- Confirm `pricing.html` still matches the live RapidAPI plan names, limits, and billing model before public launch.
- Review `privacy.html` and `tos.html` for legal accuracy before public launch.
- Re-submit `https://sinyx.me/sitemap.xml` in Google Search Console after the domain is live.

Use `LAUNCH-CHECKLIST.md` for the full deploy and smoke-test sequence.
