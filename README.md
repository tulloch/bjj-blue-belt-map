# Blue Belt Map — BJJ Position Decision Tree

A mobile-first, choose-your-own-adventure-style guide to gi BJJ positions and the decision tree out of each one.

The point isn't to be a complete move catalogue — it's to answer the blue-belt question: **"I'm in this position. What's my next move based on what they're doing?"**

## Local preview

Just open `index.html` in any browser. No build step, no dependencies.

```powershell
# from the workspace root
Start-Process "G:\My Drive\Claude_Code\Personal\BJJ\blue-belt-cyoa\index.html"
```

For mobile testing, copy the folder into Google Drive (it already lives there) and open `index.html` from the Drive app on your phone — or push to GitHub Pages (below) for a real public URL.

## Deploy to GitHub Pages

One-time setup:

1. **Create a new GitHub repo** (private or public — Pages works on both with a paid plan; free for public).
   - Suggested name: `bjj-blue-belt-map` or similar.
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
3. **Enable Pages:** GitHub repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `(root)` → Save.
4. Wait ~30 seconds. Site URL will be `https://<your-username>.github.io/<repo-name>/`.

That URL is what you bookmark on your phone. Add it to your home screen (Safari/Chrome → Share → Add to Home Screen) and it behaves like an app.

## Files

```
index.html              # Home / map page
styles.css              # Shared styles (mobile-first, dark mode auto)
README.md               # This file

# Top positions
mount.html
back-mount.html
side-control.html
knee-on-belly.html
north-south.html
half-guard-top.html
closed-guard-top.html
open-guard-top.html

# Bottom positions
closed-guard-bottom.html
open-guard-bottom.html
half-guard-bottom.html
side-control-bottom.html
mount-bottom.html
back-mount-bottom.html
turtle.html
```

## How each page is structured

Same pattern on every page so your brain learns the shape:

1. **Goal** — one sentence on what you're trying to do.
2. **If they react…** — collapsible sections, each keyed to a specific opponent reaction, with 2-4 options inside.
3. **Submissions to hunt anytime** — the high-percentage subs from this position.
4. **If you lose the position** — the page(s) you'll end up on next, so you keep going.

The point of the structure: every move in the site is **conditional on what the opponent is doing**. That's the blue-belt skill — not memorising more moves, but recognising the trigger.

## YouTube videos

Right now every ▶ link goes to a **YouTube search**, not a specific video. This was deliberate:

- I (Claude) shouldn't fabricate specific YouTube URLs without verifying each one — too easy to link to a dead/wrong/inappropriate video.
- Search URLs always show fresh top results — quality stays high over time.
- You see a thumbnail row and pick what fits your style.

**To upgrade to direct video URLs:**

1. Pick 3-4 instructors you want to learn from. Good gi options: Roger Gracie, Bernardo Faria, Stephan Kesting (Grapplearts), Lachlan Giles, Chewjitsu, Andre Galvao.
2. For each move on each page, find the instructor's video for that move.
3. Replace `https://www.youtube.com/results?search_query=...` with `https://www.youtube.com/watch?v=<video-id>`.

Or: ask Claude to do a curation pass — give it your instructor list and it'll WebSearch for the right videos and update the HTML in batch.

## What's not here yet

- **Standing / takedowns** — own world, would need its own page tree.
- **No-gi variants** — moves overlap heavily but some (lapel chokes, gi grips) are gi-only.
- **Leg locks beyond straight ankle** — IBJJF rules for blue belt limit these; can be added later.
- **Specific competition tactics** — this is a learning tool, not a comp prep tool.

## Editing

Each page is a self-contained HTML file with one shared stylesheet. To add a new option:

1. Find the right `<details>` block in the relevant page (e.g. `mount.html`).
2. Copy an existing `<a class="option">` block and change the name, description, and href.
3. Reload the browser. No build step.

## Credits

Decision tree built collaboratively by Tulloch + Claude (Sonnet 4.6 / Opus 4.7), 2026-05-03.
