# Blue Belt Map — BJJ Position Decision Tree

A mobile-first, choose-your-own-adventure-style guide to gi BJJ positions and the decision tree out of each one — personalised for **Tulloch (50, 182cm, 66kg, Carlson Gracie UK)**.

The point isn't to be a complete move catalogue — it's to answer the blue-belt question: **"I'm in this position. What's my next move based on what they're doing?"**

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | Home / map page |
| `your-profile.html` | Tulloch's profile, archetype, A-game vs avoid lists, Carlson context, reading list |
| `quiz.html` + `quiz.js` | Drill quiz — randomly tests your decision-making |
| `data.js` | Structured position/reaction data for the quiz (with `fit` metadata per response) |
| `styles.css` | Shared styles (mobile-first, dark mode auto, GES brand palette) |
| `manifest.json` + `icon-*.png` | PWA assets (add to home screen → behaves like an app) |
| `mount.html`, `back-mount.html`, ... × 15 | Position pages (8 top + 7 bottom) |

## How each position page is structured

Same pattern on every page so your brain learns the shape:

1. **Goal** — one sentence on what you're trying to do.
2. **If they react…** — collapsible sections, each keyed to a specific opponent reaction, with 2–4 options.
3. **Submissions to hunt anytime** — the high-percentage subs from this position.
4. **If you lose the position** — the page(s) you'll end up on next.

Every option is tagged with a fit indicator:
- 🟢 **Green** = Tulloch's A-game (drill these obsessively)
- 🟡 **Yellow** = situational, or know-to-defend (your Carlson coach will drill on you)
- ⚪ **Grey** = avoid (wrong build / age / risk profile)

## Verification status

All "green" moves verified against:
- **Saulo Ribeiro — *Jiu-Jitsu University*** (canonical BJJ text)
- **UK / Carlson-aligned instructors** where direct video URLs were available (Roger Gracie, Lachlan Giles, Stephan Kesting, John Danaher, Lucas Lepri, Bernardo Faria, Mario Sperry)

**Critical reframe from verification:** per Saulo, blue belt = **escapes**, not submissions. Profile page priority is reordered: escapes (Section 1) → subs (Section 2) → sweeps + passes (Section 3). This is also the right framing for Tulloch's frame at 66kg.

## Curated YouTube links (direct video URLs on green moves)

| Move | Source | URL |
|------|--------|-----|
| Cross-collar choke from mount | Roger Gracie himself (UK / Carlson) | `https://www.youtube.com/watch?v=ikxi5KRfKFI` |
| Bow & arrow choke (back) | Lachlan Giles | `https://www.youtube.com/watch?v=yrUXIujVGTM` |
| Triangle from closed guard | Lachlan Giles | `https://www.youtube.com/watch?v=K7xjhvWVzE4` |
| Armbar from closed guard | John Danaher | `https://www.youtube.com/watch?v=pQ43Oy5k9yQ` |
| Hip bump sweep + kimura | Lachlan Giles | `https://www.youtube.com/watch?v=vPNx9jWz1qc` |
| Sit-up sweep | Lucas Lepri | `https://www.youtube.com/watch?v=0nhCtkPfz4Q` |
| Kimura from side control | John Danaher | `https://www.youtube.com/watch?v=p-6lmaseoGI` |
| Kimura from half guard top | Lachlan Giles (EBI 5 series) | `https://www.youtube.com/watch?v=mLLQBxG1ojo` |
| Knee cut pass | Lucas Lepri | `https://www.youtube.com/watch?v=3IqCi1GXmOg` |
| Mounted triangle | Bloom BJJ | `https://www.youtube.com/watch?v=FPpTdENZrcE` |
| Upa from mount | Stephan Kesting (4 mistakes) | `https://www.youtube.com/watch?v=whaSmJBrKZY` |
| Elbow-knee escape | Gordon Ryan | `https://www.youtube.com/watch?v=8T2SXB-4Fd8` |
| Bridge & shrimp from side | ESG | `https://www.youtube.com/watch?v=_lE68blkbLo` |
| Rear naked choke | Stephan Kesting (tightening) | `https://www.youtube.com/watch?v=KH6qCjgLXJA` |

Yellow / grey moves still go to YouTube **search URLs** so you see fresh top results.

## ⚠️ Coach check before drilling

**This is opinion, cross-checked but not gospel.** Show the page for any move you're about to drill to your coach first. They have final say.

This was built by Claude (LLM), not a black belt. The structure mirrors widely-taught gi BJJ at blue-belt level, and every green-fit rating was cross-referenced — but your coach knows you, the room, and the local rule set better than any external source.

## Local preview

Open `index.html` in any browser. No build step.

```powershell
Start-Process "G:\My Drive\Claude_Code\Personal\BJJ\blue-belt-cyoa\index.html"
```

## Deploy to GitHub Pages

1. **Create a new GitHub repo** (free for public, paid for private).
2. **Initialise git in this folder and push:**
   ```powershell
   cd "G:\My Drive\Claude_Code\Personal\BJJ\blue-belt-cyoa"
   git init
   git add .
   git commit -m "Initial commit: blue belt position decision tree"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. **Enable Pages:** repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save.
4. ~30 seconds later: site live at `https://<your-username>.github.io/<repo-name>/`.

Bookmark on your phone, then Share → Add to Home Screen — behaves like an app (PWA manifest already configured).

## Editing

### To change a fit rating

Edit two places (keep them in sync):
1. The position page HTML — change `class="option fit-green"` → `class="option fit-yellow"` (and update the emoji prefix on the option name)
2. `data.js` — change `fit: "green"` → `fit: "yellow"` for the same response

### To swap a YouTube URL

Position page HTML only — find the `<a class="option fit-green" href="...">` line and update the `href`.

### To add a new option to a position

Position page HTML + `data.js` (so the quiz picks it up).

## What's not here yet

- **Standing / takedowns** — own world, would need its own page tree.
- **No-gi variants** — moves overlap heavily but some (lapel chokes, gi grips) are gi-only.
- **Leg locks beyond straight ankle** — IBJJF rules for blue belt limit these.
- **Specific competition tactics** — this is a learning tool, not a comp prep tool.

## Credits

Built collaboratively by Tulloch + Claude (Sonnet 4.6 / Opus 4.7), 2026-05-03.
