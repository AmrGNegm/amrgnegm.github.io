# Portfolio Website Plan — AmrGNegm

## Tech Stack
- **Plain HTML/CSS/JS** — no build step, direct GitHub Pages deploy
- **Responsive** — mobile-first, accessibility-focused
- **Colors** — UI/UX standard palette (neutral grays, primary blue `#2563eb`, accent `#0ea5e9`, dark `#111827`, white `#ffffff`, background `#f9fafb`)
- **Typography** — System font stack (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif`)
- **No e-commerce/shopping cart**

## File Structure
```
AmrGNegm/
├── index.html
├── consulting/
│   ├── index.html
│   ├── performance-tuning.html
│   ├── remote-data-engineering.html
│   └── migrations.html
├── training/
│   └── index.html
├── monitoring/
│   └── index.html
├── scripts/
│   └── index.html
├── blog/
│   └── index.html
├── contact/
│   └── index.html
├── privacy.html
├── terms.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
```

## Phase 1: Core Structure & Navigation ~~DONE~~
| Task | Description | Status |
|------|-------------|--------|
| 1.1 | Build primary nav: **Consulting** (dropdown: Performance Tuning, Remote Data Engineering, Migrations) · Training · Monitoring · Scripts · Blog | DONE |
| 1.2 | Add **Contact** link and **Log In** (placeholder, not functional) | DONE |
| 1.3 | Responsive hamburger menu for mobile | DONE |
| 1.4 | Footer with nav duplication, social icons (LinkedIn, GitHub, Twitter, Facebook), dynamic copyright `© Amr Negm. All Rights Reserved.` | DONE |

## Phase 2: Homepage (`index.html`) — Real Content ~~DONE~~
| Task | Description | Status |
|------|-------------|--------|
| 2.1 | **Hero section** — Pain-point copy targeting data leaders struggling with slow reports, broken pipelines, and black-box databases | DONE |
| 2.2 | **3 CTAs**: "Free Stuff" · "Training Classes" · "Hire Me for Consulting" | DONE |
| 2.3 | **About Me section** — Career story (developer → BI → Azure Data Engineer), certifications (Azure Data Engineer, Azure Data Scientist, Azure Fundamentals), mentoring (Data Guys), 1st rank at ITI | DONE |
| 2.4 | **Client/Partner logo area** — Placeholder grid for future client logos | DONE |
| 2.5 | **Lead capture form** — Name, Email, checkboxes: "Scripts & Guides", "Weekly Data Links", "Blog Posts (2-4/week)" | DONE |

## Phase 3: Consulting Section — Real Content ~~DONE~~
| Task | Description | Status |
|------|-------------|--------|
| 3.1 | **Consulting landing** (`consulting/index.html`) — Overview of services, assessment process, Calendly booking placeholder | DONE |
| 3.2 | **Performance Tuning** — SQL Server & Power BI performance optimization | DONE |
| 3.3 | **Remote Data Engineering** — Ongoing Azure pipeline support & monitoring | DONE |
| 3.4 | **Migrations & Upgrades** — DWH migration, cloud adoption, on-prem to Azure | DONE |
| 3.5 | **Consultant Toolkit** — "Coming Soon" | DONE |

## Phase 4: Coming Soon Pages ~~DONE~~
| Task | Description | Status |
|------|-------------|--------|
| 4.1 | **Training** — "Coming Soon" + email capture | DONE |
| 4.2 | **Monitoring** — "Coming Soon" + email capture + description of planned service | DONE |
| 4.3 | **Scripts/Tools** — "Coming Soon" + link to GitHub repos | DONE |
| 4.4 | **Blog** — "Coming Soon" + email capture | DONE |

## Phase 5: Contact & Legal ~~DONE~~
| Task | Description | Status |
|------|-------------|--------|
| 5.1 | **Contact page** — Form: Name, Email, Subject, Message + social links | DONE |
| 5.2 | **Privacy Policy** — Standard privacy policy | DONE |
| 5.3 | **Terms and Conditions** — Standard terms | DONE |

## Phase 6: GitHub Pages Deployment
| Task | Description | Status |
|------|-------------|--------|
| 6.1 | Push code to `main` branch | PENDING |
| 6.2 | Enable GitHub Pages from repo Settings → Pages → Source: `main` / root | PENDING |
| 6.3 | Verify site at `https://amrgnegm.github.io/` | PENDING |

## Deferred Items
- Profile photo (to be added later)
- Calendly booking integration (to be added later)
- Client logos (to be added when available)
- Log In / My Account functionality (not in scope)
- Shopping cart / e-commerce (not needed)