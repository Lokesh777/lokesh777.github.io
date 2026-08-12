# Portfolio Report — lokesh777.github.io

Generated: 2026-08-11

## 1. Overview

A single-page React portfolio for **Lokesh Kumar Bairwa** (Full Stack Web Developer), built with
Create React App and deployed to GitHub Pages at `https://Lokesh777.github.io`.

The page is a one-shot scroll experience — `BrowserRouter` is mounted in `src/index.js` but no
`<Routes>`/`<Route>` components are used anywhere; navigation is done via `react-scroll` anchors.

## 2. Tech Stack

| Area       | Technology |
|------------|-----------|
| Framework  | React 18, Create React App 5 (`react-scripts`) |
| UI         | Chakra UI v2, MUI v5, CSS Modules, animate.css |
| Animation  | framer-motion, react-awesome-reveal |
| Icons      | react-icons, @mui/icons-material, grommet-icons |
| Forms      | @emailjs/browser + sweetalert2 (contact form) |
| Router     | react-router-dom 6 (mounted, unused) + react-scroll |
| Misc       | react-github-calendar, react-scroll-trigger |
| Deploy     | gh-pages (`predeploy` = `npm run build`, `deploy` = `gh-pages -d build`) |

## 3. Page Structure (render order in `src/App.js`)

1. **Navbar** — `src/components/Navbar.jsx`
   - Fixed top bar with logo (LB.gif), desktop + mobile (hamburger) menus.
   - Links: Home, About, Skills, Projects, GitHubCalendar, Contact, Resume.
   - Resume item fetches `LokeshKumarBairwa.pdf` from `public/` and downloads it as
     "Lokesh Kumar Bairwa.pdf".
2. **Home / Hero** — `src/components/HomePage.jsx`
   - Name, role headline, short blurb, "CONTACT ME" button (anchor to `#contact`).
3. **About** — `src/Router/About.jsx`
   - Profile photo (`avatar.jpg`), short bio, resume download button.
4. **Skills** — `src/components/SkillSection.jsx`
   - Chakra `Tabs` with horizontally scrollable tab bar and chevron buttons.
   - Skill data in `src/components/skills.js`: 11 categories
     (Frontend, Backend, Database, Auth & Security, AI & Integrations, State Management,
     UI & Charts, Performance, Testing, DevOps & Tools, AI Tools).
5. **Projects** — `src/Router/projectCard.jsx`
   - 5 cards (see §4). Clicking a card image/placeholder opens a Chakra modal
     (`src/components/ProjectDetail.jsx`) with the full description, stack icons, and links.
6. **GitHub Stats** — `src/components/Github.jsx`
   - `github-profile-summary-cards` profile details image + GitHub trophy row.
   - NOTE: the summary-card `<img>` uses `http://` (not https) — see §7.
7. **Contact** — `src/Router/contact.jsx`
   - Phone, email, location buttons; GitHub / email / LinkedIn social links.
   - EmailJS form (name, email, message) → sends to `service_6xirjde` /
     `template_1blpeve`; success/error alerts via SweetAlert2.

## 4. Projects

| # | Project | Type | Code | Demo / Links |
|---|---------|------|------|--------------|
| 1 | **PromptBI** | Company work (badge: "Company · PromptBI") | none | 4 LinkedIn "Feed Update" demo links |
| 2 | **Exam Saathi** | Personal | github.com/LokeshKumavat/ExamSaathi-Frontend | examsaathi.vercel.app |
| 3 | **Support Ticket System** | Personal | github.com/LokeshKumavat/Support-Ticket-System | support-ticket-system-ten.vercel.app |
| 4 | **Dubai Tourism App** | Personal | github.com/LokeshKumavat/Dubai-Tourism | dubai-tourism-nine.vercel.app |
| 5 | **Interview Scheduler** | Personal | github.com/LokeshKumavat/Interview-Scheduler | interview-scheduler-phi.vercel.app |

- No project has a screenshot image yet — each card renders a gradient `imagePlaceholder`
  with the project title.
- Card shows: title, optional company badge, stack icons, Code + Demo buttons, and a short
  one-line `about` (13px). Full multi-line details live in the modal.

## 5. Recent Changes (uncommitted work in progress)

Modified files:
- `src/Router/projectCard.jsx` — added PromptBI data + modal wiring (`selected` state).
- `src/Router/ProjectCarditem.jsx` — added company badge + clickable image/placeholder.
- `src/components/Github.jsx`, `Navbar.jsx`, `SkillCard.jsx`, `SkillSection.jsx`
- `src/styles/Project.module.css`, `src/styles/Skill/*.module.css`

New files:
- `src/components/ProjectDetail.jsx` — Chakra modal detail view.
- `src/components/skills.js` — skills/categories data (duplicated under `src/data/skills.js`).
- `src/data/skills.js` — duplicate of the above (see §7).

Last commits: cleanup ("remove the unwanted animation"), a few "added"/"update" commits.

## 6. Build Status

- `npm run build` → **Compiled successfully** (no warnings after removing unused imports).
- Pre-existing dependency note: Browserslist `caniuse-lite` is outdated
  (`npx update-browserslist-db@latest`).

## 7. Observations / Issues

1. **Certificate error (pending investigation):** the user reported an "unknown certificate
   verification error". Likely candidates:
   - `src/components/Github.jsx:16` loads `http://github-profile-summary-cards.vercel.app/...`
     over plain HTTP (not HTTPS) → mixed content / redirect / TLS issues.
   - The LinkedIn "Feed Update" demo URLs redirect through LinkedIn, which some networks /
     corporate proxies flag with TLS interception errors.
   - Not yet diagnosed: which command/URL produced the error (browser vs CLI).
2. **Duplicate skills data:** `src/data/skills.js` mirrors `src/components/skills.js`; the
   active one is `components/skills.js` (imported by SkillSection). The `src/data` copy is
   dead code.
3. **Insecure image source:** Github stats section uses `http://` URLs — should be `https://`.
4. **Hardcoded secrets:** EmailJS service/template IDs and the public key are committed inline
   in `contact.jsx` (EmailJS public keys are client-side by design, but worth knowing).
5. **PromptBI has no code/live link** on the card (only 4 LinkedIn demos in the modal) — the
   card's Code/Demo buttons are hidden for it.
6. `react-github-calendar` is a dependency but the GitHub section actually uses
   `github-profile-summary-cards` + trophy images instead.
