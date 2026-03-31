# TradeOS

Your personal trading dashboard — rule grader, calendar, Whoop correlation, and daily briefing. Runs as a native app on iPhone and Mac.

---

## Deploy to GitHub Pages (5 minutes)

### Step 1 — Create the repository

1. Go to **github.com** and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it exactly: `tradeos`
4. Set visibility to **Public** *(required for free GitHub Pages)*
5. Click **Create repository**

### Step 2 — Upload the files

1. On your new empty repository page, click **uploading an existing file**
2. Drag and drop **all files** from this folder into the upload area:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `whoop-callback.html`
   - `privacy.html`
   - `icon-192.png`
   - `icon-512.png`
   - `apple-touch-icon.png`
   - `README.md`
3. Scroll down, click **Commit changes**

### Step 3 — Enable GitHub Pages

1. In your repository, click **Settings** (top menu)
2. Click **Pages** (left sidebar)
3. Under "Branch", select **main** and click **Save**
4. Wait 1–2 minutes, then your app is live at:
   **https://jwmba2015-lab.github.io/tradeos**

---

## Install as an app

### On iPhone / iPad
1. Open **https://jwmba2015-lab.github.io/tradeos** in Safari
2. Tap the **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add**
5. TradeOS now appears on your home screen like any other app

### On Mac
1. Open **https://jwmba2015-lab.github.io/tradeos** in Safari
2. Click **File → Add to Dock**
   *(or in Chrome: three dots menu → Save and share → Create shortcut → Open as window)*
3. TradeOS appears in your dock

---

## Connect Whoop

1. Open TradeOS and tap the **Whoop** tab
2. Tap **Connect Whoop Live**
3. Sign in with your Whoop credentials
4. Tap **Allow** to grant read-only access
5. You'll be redirected back to TradeOS automatically
6. Your recovery, HRV, and sleep data sync automatically on open

To disconnect: Settings → clear browser data for this site, or tap Disconnect in the Whoop tab.

---

## Daily briefing email

The morning email is handled separately by Google Apps Script.
See `tradeos_morning_briefing.gs` for setup instructions.
The Briefing tab inside the app shows the same information live.

---

## Updating the app

When you want to update:
1. Make changes to the files
2. Go to your GitHub repository
3. Click the file you want to update → pencil icon to edit, or drag new file to upload
4. Commit — the live app updates within 1–2 minutes

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Main dashboard app |
| `manifest.json` | Makes it installable as a PWA |
| `sw.js` | Service worker — offline support |
| `whoop-callback.html` | Handles Whoop login redirect |
| `privacy.html` | Privacy policy (required by Whoop API) |
| `icon-192.png` | App icon (Android / PWA) |
| `icon-512.png` | App icon (large) |
| `apple-touch-icon.png` | App icon (iPhone home screen) |
