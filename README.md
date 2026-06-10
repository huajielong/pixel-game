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

---

<p align="center">
  ⭐ If you like it, give it a Star!
</p>

---

<h1 align="center">🎮 Pixel Quest — 像素风闯关问答游戏</h1>
<p align="center"><b>像素风闯关问答游戏 — React+Vite前端，Google Sheets+GAS无服务器后端，零成本部署</b></p>
<p align="center">
  🎨 像素复古 · 📝 动态题库 · 🏆 成绩排名 · ☁️ 零服务器
</p>

<p align="center">
  <a href="#-快速开始">🚀 快速开始</a> •
  <a href="#-功能特性">⚡ 功能特性</a> •
  <a href="#-配置指南">⚙️ 配置指南</a> •
  <a href="#-常见问题">❓ 常见问题</a>
</p>

---

## 🤔 想做个互动问答游戏但不想搭服务器？

做一个 Web 问答游戏需要后端、数据库、部署……门槛不低：

| 你可能遇到的问题 | Pixel Art Quiz Game 帮你解决 |
|:-----------------|:---------------------------|
| ❓ 不想买服务器、配置数据库 | ✅ **零服务器架构** — Google Sheets + GAS 当后端 |
| ❓ 开发配置太复杂 | ✅ **Vite 极速启动** — 秒级热更新 |
| ❓ 题目管理麻烦 | ✅ **Google Sheets 管理** — 直接编辑表格修改题库 |
| ❓ 游戏不够有趣 | ✅ **像素风复古 UI** — 8-bit 风格的视觉体验 |
| ❓ 成绩需要记录 | ✅ **自动记录** — 闯关次数、最高分、通关率一应俱全 |

---

## 🚀 快速开始

### 环境要求

| 依赖 | 版本 |
|:-----|:----:|
| Node.js | 18+ |
| npm | 9+ |

### 安装

```bash
git clone https://github.com/huajielong/pixel-game.git
cd pixel-game
npm install
```

### 配置后端（Google Sheets）

1. 创建 **Google Sheet**，建两个工作表：`题目` 和 `回答`
2. 将 [`gas-backend.js`](gas-backend.js) 部署为 Google Apps Script Web App
3. 复制生成的 URL 到 `.env`：

```env
VITE_GOOGLE_APP_SCRIPT_URL=https://script.google.com/macros/s/你的_SCRIPT_ID/exec
```

### 运行

```bash
npm run dev
```

---

## ⚡ 功能特性

| 功能 | 说明 |
|:-----|:------|
| 🎨 **像素风 UI** | 8-bit 复古视觉风格，满满的怀旧感 |
| 📝 **动态题库** | Google Sheets 管理题目，随时增删改 |
| 🏆 **成绩记录** | 自动保存闯关次数、最高分、通关率 |
| 🔀 **随机抽题** | 每次游戏随机抽取题目，不重复 |
| ☁️ **零服务器** | Google Apps Script 无服务器架构 |
| ⚡ **Vite 构建** | 极速冷启动和热更新 |
| 🌐 **一键部署** | 支持 Vercel / Netlify / GitHub Pages |

---

## 🏗️ 技术栈

| 技术 | 用途 |
|:-----|:------|
| **React 19** | 前端 UI 框架 |
| **Vite 7** | 构建工具 |
| **Google Sheets** | 题库数据库 |
| **Google Apps Script** | 后端 API 服务 |
| **Pixel Art CSS** | 复古像素视觉风格 |

---

## ❓ 常见问题

<details>
<summary><b>需要自己的服务器吗？</b></summary>
完全不需要。前端可部署到 Vercel/Netlify/GitHub Pages 等免费平台，后端使用 Google Sheets + Apps Script，零成本。
</details>

<details>
<summary><b>如何修改题目？</b></summary>
直接在 Google Sheet 的「题目」工作表中编辑即可，无需修改代码。支持增删改题目和选项。
</details>

<details>
<summary><b>支持移动端吗？</b></summary>
支持。使用响应式设计，在手机和电脑上都能良好显示。
</details>

<details>
<summary><b>可以部署到自己的域名吗？</b></summary>
可以。前端是纯静态资源，可部署到任何静态托管服务，只需配置好 `.env` 中的 GAS URL 即可。
</details>

---

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

<a href="https://github.com/huajielong/pixel-game/graphs/contributors">
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen" alt="Contributions Welcome"/>
</a>

## 📄 License

MIT © [huajielong](https://github.com/huajielong)

---

<p align="center">
  ⭐ 如果觉得好玩，点个 Star 支持一下吧！
</p>
