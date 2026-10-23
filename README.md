# Plain AI Commerce

Simple, easy-to-understand AI commerce storefront built with plain HTML.

Landing pages, catalog, and reasonable paywalls. 

**You only add environment variables in Vercel. No code editing needed.**

## Deploy in 3 steps

1. Import this repo in [Vercel](https://vercel.com/new).
   - Framework Preset: **Other**
   - Build Command: leave empty
   - Output Directory: leave empty

2. Deploy once (it will work in demo mode).

3. Go to Vercel Project → Settings → Environment Variables and add:

```
STRIPE_SECRET_KEY=sk_test_...
PRODUCT_1_NAME=Starter AI Pack
PRODUCT_1_PRICE=29
PRODUCT_1_LINK=https://buy.stripe.com/...
PRODUCT_2_NAME=Growth Bundle
PRODUCT_2_PRICE=79
PRODUCT_2_LINK=https://buy.stripe.com/...
PRODUCT_3_NAME=Pro Suite
PRODUCT_3_PRICE=149
PRODUCT_3_LINK=https://buy.stripe.com/...
MEMBER_LINK=https://buy.stripe.com/...
OWNER_OVERRIDE_KEY=your-secret-key
APP_NAME=Plain AI Commerce
SUPPORT_EMAIL=support@yourdomain.com
```

Redeploy after adding variables.

## Pages

- `/` — Landing page (easy for anyone to understand)
- `/shop.html` — Catalog with paywall
- `/pricing.html` — Membership options
- `/success.html` — Thank you
- `/setup.html` — Setup guide

## How the paywall works

- Free users see teaser content.
- Paid users (via Stripe Payment Links) get access cookie for 30 days.
- Owner can override with the key at `/override.html` (create if needed).

All payments handled by Stripe. No card data touches this site.

## For the masses

Clean HTML, no frameworks. Easy to navigate. Reasonable prices. Clear language.

You are the legal owner. The AI handles the rest.

Push to GitHub → Import to Vercel → Add variables → Done.
