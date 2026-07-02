# Instagram feed setup (client handoff)

The homepage Instagram grid pulls the latest 8 posts from [@islacafemiami](https://www.instagram.com/islacafemiami/) at build time via the [Instagram Graph API](https://developers.facebook.com/docs/instagram-api).

## Current account values (Isla Café Miami)

These are the live, verified IDs for this account. Use them exactly — mistyping a single digit causes error 100 / subcode 33.

| Item | Value |
|------|-------|
| Facebook Page ID | `1113476308525330` |
| Instagram Business Account ID (`INSTAGRAM_USER_ID`) | `17841463309804205` |
| Token source | Business Manager **system user** `islacafe` (role: Employee is fine) |

> The Instagram Business Account ID — **not** the Page ID — is what goes in `INSTAGRAM_USER_ID` and is used for the `/media` endpoint.

**Download:** On the live site, use **Download setup guide** in the Instagram section (shown until the feed is connected), or open `/docs/instagram-setup-guide.md` on your deployed domain.

## Requirements

- Instagram account must be **Business or Creator** (not personal)
- Account must stay **public** and linked to the restaurant’s **Facebook Page**
- A Meta Developer app with Instagram Graph API enabled
- A **Page access token** (not a short-lived user token)

## Step 1 — Instagram & Facebook

1. Open Instagram → Settings → Account → Switch to professional account → choose **Business** or **Creator**
2. In Instagram → Settings → Account → Linked accounts → connect the restaurant **Facebook Page**
3. Confirm [@islacafemiami](https://www.instagram.com/islacafemiami/) is **public**

## Step 2 — Meta Developer app

1. Go to [developers.facebook.com](https://developers.facebook.com/) and create an app (type: Business)
2. Add the **Instagram Graph API** product
3. Under App roles, add the restaurant Page admin as **Developer** or **Admin** (or have them create the app under their Business Manager)

## Step 3 — Generate a token (system user — recommended)

The most reliable method is a Business Manager **system user** token. It never expires and avoids the `Invalid Scopes: pages_show_list` bug in Graph API Explorer.

1. Go to [business.facebook.com](https://business.facebook.com) → **Settings → Business settings**
2. **Users → System users** → open (or create) a system user — **Employee** role is sufficient
3. Click **Assign assets → Pages → Isla Cafe Miami → Full control → Save**
   - This is mandatory. Without the Page assigned, every call fails with error 100 / subcode 33.
4. Click **Generate new token**:
   - **App:** your Meta app
   - **Expiration:** `Never`
   - **Permissions:** `instagram_basic` and `pages_read_engagement` only
5. Copy the token — this is your `INSTAGRAM_ACCESS_TOKEN`.

> Do **not** add `pages_show_list`. New apps don't support it and it breaks the Explorer OAuth flow. You already know the Page/Instagram IDs, so it isn't needed.

## Step 4 — Confirm the Instagram Business Account ID

With the system-user token, confirm the linked Instagram account:

```bash
curl "https://graph.facebook.com/v21.0/1113476308525330?fields=name,instagram_business_account&access_token=SYSTEM_USER_TOKEN"
```

The `instagram_business_account.id` is your `INSTAGRAM_USER_ID` (currently `17841463309804205`).

Verify the feed endpoint (use the **Instagram** ID, not the Page ID):

```bash
curl "https://graph.facebook.com/v21.0/17841463309804205/media?fields=id,permalink&limit=8&access_token=SYSTEM_USER_TOKEN"
```

A `data` array of posts means it's working.

## Step 5 — Cloudflare Pages environment variables

In Cloudflare Pages → your project → **Settings → Environment variables** (Production):

| Variable | Value |
|----------|--------|
| `INSTAGRAM_ACCESS_TOKEN` | Page access token from Step 3 |
| `INSTAGRAM_USER_ID` | Instagram Business Account ID from Step 4 |

Redeploy the site. The build runs `scripts/fetch-instagram.mjs`, downloads images to `public/images/instagram/`, and fills the 4×4 grid.

## Step 6 — Live mode

Switch the Meta app from **Development** to **Live** after App Review if Meta requires it for production traffic.

## Automatic daily refresh

1. Cloudflare Pages → **Settings → Builds → Deploy hooks** → Create hook
2. GitHub repo → **Settings → Secrets → Actions** → add `CLOUDFLARE_DEPLOY_HOOK` with the hook URL
3. The workflow `.github/workflows/refresh-instagram.yml` triggers a rebuild daily at 12:00 UTC

Manual refresh: GitHub → **Actions → Refresh Instagram feed → Run workflow**.

## Local testing

Pass the values inline so the fetch script picks them up (plain `node` does not read `.env.local`):

```bash
INSTAGRAM_ACCESS_TOKEN="EAA..." INSTAGRAM_USER_ID="17841463309804205" \
  node scripts/fetch-instagram.mjs
```

This refreshes `src/data/instagram-posts.json` and re-downloads images into `public/images/instagram/`. Commit those changes to update the live feed even without a rebuild trigger.

## Troubleshooting

| Symptom | Likely cause |
|---------|----------------|
| Empty grid after deploy | Env vars missing or wrong on Cloudflare |
| API error 190 | Token expired/revoked, or copied with spaces — regenerate and copy the full string |
| API error 100 / subcode 33 (`does not exist`) | Wrong ID (check digit count), or the Page is not assigned to the system user |
| API error 10 (`Application does not have permission`) | Called `PAGE_ID/media` instead of `INSTAGRAM_USER_ID/media`, or missing scopes |
| `Invalid Scopes: pages_show_list` in Explorer | Remove that scope; use the system-user method in Step 3 |
| Feed stopped updating | Deploy hook secret missing or Meta app disconnected |
| Posts stale | Wait for daily cron or run workflow manually |

## Token maintenance

Page access tokens from a long-lived user token typically **do not expire on a schedule**. Reconnect only if the client removes app access, changes Facebook security settings, or disconnects Instagram from the Page.
