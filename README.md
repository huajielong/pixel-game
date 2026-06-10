<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="v1.0"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT"/>
  <img src="https://img.shields.io/badge/React-18+-61DAFB" alt="React 18+"/>
  <img src="https://img.shields.io/badge/Vite-5+-646CFF" alt="Vite 5+"/>
  <img src="https://img.shields.io/github/stars/huajielong/pixel-game?style=social" alt="Stars"/>
  <img src="https://img.shields.io/badge/Backend-Google%20Sheets%20%2B%20GAS-yellow" alt="GAS Backend"/>
</p>

<h1 align="center">🎮 Pixel Quest — Quiz Game</h1>
<p align="center"><b>A pixel-style quiz adventure game — React + Vite frontend with Google Sheets + GAS serverless backend, zero-cost deployment</b></p>
<p align="center">
  🎨 Pixel Retro · 📝 Dynamic Question Bank · 🏆 Score Ranking · ☁️ Zero Server
</p>

<p align="center">
  <a href="#-quick-start">🚀 Quick Start</a> •
  <a href="#-features">⚡ Features</a> •
  <a href="#-configuration">⚙️ Configuration</a> •
  <a href="#-faq">❓ FAQ</a>
</p>

> [中文说明](README.zh.md)

---

## 🤔 Want to build an interactive quiz game without setting up a server?

Building a web quiz game typically requires a backend, database, and deployment — a significant barrier to entry:

| Common Problems | How Pixel Quest Solves Them |
|:----------------|:---------------------------|
| ❓ Don't want to buy a server or configure a database | ✅ **Zero-server architecture** — Google Sheets + GAS as backend |
| ❓ Development setup is too complex | ✅ **Vite lightning-fast startup** — sub-second HMR |
| ❓ Managing questions is cumbersome | ✅ **Google Sheets management** — edit the spreadsheet directly |
| ❓ Game isn't engaging enough | ✅ **Pixel-art retro UI** — 8-bit visual experience |
| ❓ Need to track scores | ✅ **Auto-save records** — attempts, high scores, pass rates all tracked |

---

## 🚀 Quick Start

### Prerequisites

| Dependency | Version |
|:-----------|:-------:|
| Node.js | 18+ |
| npm | 9+ |

### Installation

```bash
git clone https://github.com/huajielong/pixel-game.git
cd pixel-game
npm install
```

### Backend Setup (Google Sheets)

1. Create a **Google Sheet** with two worksheets: `Questions` and `Answers`
2. Deploy [`gas-backend.js`](gas-backend.js) as a Google Apps Script Web App
3. Copy the generated URL to `.env`:

```env
VITE_GOOGLE_APP_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Run

```bash
npm run dev
```

---

## ⚡ Features

| Feature | Description |
|:--------|:------------|
| 🎨 **Pixel Art UI** | 8-bit retro visual style for a nostalgic feel |
| 📝 **Dynamic Question Bank** | Manage questions via Google Sheets, add/update/delete anytime |
| 🏆 **Score Tracking** | Auto-saves attempts, high scores, and pass rates |
| 🔀 **Random Questions** | Randomly selects questions each game, no repeats |
| ☁️ **Zero Server** | Serverless architecture with Google Apps Script |
| ⚡ **Vite Build** | Ultra-fast cold start and hot module replacement |
| 🌐 **One-Click Deploy** | Supports Vercel / Netlify / GitHub Pages |

---

## 🏗️ Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| **React 19** | Frontend UI framework |
| **Vite 7** | Build tool |
| **Google Sheets** | Question bank database |
| **Google Apps Script** | Backend API service |
| **Pixel Art CSS** | Retro pixel visual style |

---

## ❓ FAQ

<details>
<summary><b>Do I need my own server?</b></summary>
Not at all. The frontend can be deployed to free platforms like Vercel/Netlify/GitHub Pages, and the backend uses Google Sheets + Apps Script — zero cost.
</details>

<details>
<summary><b>How do I edit questions?</b></summary>
Simply edit the "Questions" worksheet in your Google Sheet — no code changes needed. Supports adding, deleting, and modifying questions and options.
</details>

<details>
<summary><b>Is it mobile-friendly?</b></summary>
Yes. It uses responsive design and displays well on both phones and desktops.
</details>

<details>
<summary><b>Can I deploy to my own domain?</b></summary>
Yes. The frontend is pure static assets that can be deployed to any static hosting service. Just configure the GAS URL in `.env`.
</details>

---

## 🤝 Contributing

Issues and Pull Requests are welcome!

<a href="https://github.com/huajielong/pixel-game/graphs/contributors">
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen" alt="Contributions Welcome"/>
</a>

## 📄 License

MIT © [huajielong](https://github.com/huajielong)
