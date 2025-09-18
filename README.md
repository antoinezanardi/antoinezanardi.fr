# 🐺 Antoine ZANARDI's Portfolio

My personal portfolio website, built to showcase my profile, projects, and professional background — while also serving as a demonstration of clean, fully tested, and production-ready web development.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=antoinezanardi_antoinezanardi.fr&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=antoinezanardi_antoinezanardi.fr)

👉 You can visit the live portfolio here: **[antoinezanardi.fr](https://antoinezanardi.fr)** or check out the development version at **[antoinezanardi-fr.vercel.app](https://antoinezanardi-fr.vercel.app/)**.

---

## 📖 Table of Contents

- [🚀 Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [✅ Testing & Quality](#testing-quality)
- [🔄 Deployment Workflow](#deployment-workflow)
- [🏗️ Getting Started](#getting-started)
- [📜 License](#license)

---

## <a name="features"></a>🚀 Features

This portfolio is not just a website, but also a **playground for professional-grade practices**:

- **Who I am** — personal introduction & contact info.
- **Technical skills** — languages, frameworks, and tools I master.
- **Portfolio** — selected projects that I’m most proud of.
- **Professional experiences** — my career journey.
- **Education & certifications** — my academic path and achievements.

---

## <a name="tech-stack"></a>🛠️ Tech Stack

- **[Nuxt 4](https://nuxt.com/)** with **TypeScript**
- **Vue.js** for UI development
- **Bootstrap** for styling
- **Vercel** — pre-production deployments
- **GCP (Google Cloud Platform)** — production hosting

---

## <a name="testing-quality"></a>✅ Testing & Quality

This repository demonstrates how I build reliable software with strong testing strategies:

- **Unit tests** — [Vitest](https://vitest.dev/) with **100% coverage**.
- **End-to-End tests** — [Playwright](https://playwright.dev/).
- **Mutation tests** — [Stryker](https://stryker-mutator.io/).
- **Linting & formatting** — [ESLint](https://eslint.org/).
- **Code quality and coverage** — [SonarCloud](https://sonarcloud.io/).
- **CI/CD pipelines** — [GitHub Actions](https://github.com/features/actions).

---

## <a name="deployment-workflow"></a>🔄 Deployment Workflow

- **Pre-production** → Automatically deployed to **Vercel** when merging into `develop`.
- **Production** → Automatically deployed to **GCP** when merging into `master`.

---

## <a name="getting-started"></a>🏗️ Getting Started

Clone the repository:

```bash
git clone https://github.com/antoinezanardi/antoinezanardi.fr.git
cd antoinezanardi.fr
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
pnpm run preview
```

Run tests:

```bash
# Unit tests
pnpm run test:unit

# End-to-End tests
pnpm run test:cucumber

# Mutation tests
pnpm run test:stryker
```

---

## <a name="license"></a>📜 License

This project is licensed under the **MIT License**.
See the [LICENSE](./LICENSE) file for details.