<p align="center">
  <h1 align="center">@myko.pk/errors</h1>
  <p align="center"><strong>Structured errors. Clear context.</strong></p>
  <p align="center">Shared error classes and typed error codes for the MYKO ecosystem — DatabaseError, RedisError, and automatic HTTP status code mapping.</p>
  <p align="center">
    <a href="https://www.npmjs.com/package/@myko.pk/errors"><img src="https://img.shields.io/npm/v/@myko.pk/errors?style=for-the-badge&logo=npm&logoColor=white" alt="npm version"></a>
    <a href="https://www.npmjs.com/package/@myko.pk/errors"><img src="https://img.shields.io/npm/dm/@myko.pk/errors?style=for-the-badge&logo=npm&logoColor=white" alt="npm downloads"></a>
    <a href="https://github.com/mykopk/errors/actions"><img src="https://img.shields.io/github/actions/workflow/status/mykopk/errors/ci.yml?style=for-the-badge&logo=githubactions&logoColor=white&label=CI" alt="build"></a>
    <a href="https://github.com/mykopk/errors"><img src="https://img.shields.io/github/stars/mykopk/errors?style=for-the-badge&logo=github" alt="stars"></a>
    <a href="https://github.com/mykopk/errors"><img src="https://img.shields.io/github/forks/mykopk/errors?style=for-the-badge&logo=github" alt="forks"></a>
    <a href="https://github.com/mykopk/errors"><img src="https://img.shields.io/github/issues/mykopk/errors?style=for-the-badge&logo=github" alt="issues"></a>
    <a href="https://github.com/mykopk/errors"><img src="https://img.shields.io/github/last-commit/mykopk/errors?style=for-the-badge&logo=github" alt="last commit"></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="license"></a>
  </p>
</p>

## 📑 Table of Contents

- [Description](#description)
- [Key Features](#key-features)
- [Use Cases](#use-cases)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## 📝 Description

@myko.pk/errors provides structured error classes and typed error codes for the MYKO ecosystem. Every MYKO package — from database adapters to HTTP services — throws errors from this library, ensuring consistent error shape, serialization, and HTTP status code mapping across the entire stack. Includes `DatabaseError` and `RedisError` classes with structured context, typed error code enums, and automatic status code inference.

## ✨ Key Features

- **🧱 Structured Error Classes** — `DatabaseError` and `RedisError` with `code`, `statusCode`, `cause`, and `context` fields.
- **🔢 Typed Error Codes** — `DATABASE_ERROR_CODES` and `REDIS_ERROR_CODES` enums for type-safe error handling.
- **🌐 HTTP Status Mapping** — Every error code maps to an appropriate HTTP status code automatically.
- **📦 JSON Serializable** — `toJSON()` for clean API responses.
- **📘 Fully Typed** — Full TypeScript support with exported code type utilities.

## 🎯 Use Cases

- Throwing consistent `DatabaseError` instances from every database adapter (Drizzle, Prisma, SQL, Supabase) with a shared error code vocabulary.
- Mapping internal error codes to HTTP status codes for REST API responses.
- Structured error logging with `cause` and `context` for debugging distributed systems.

## 🛠️ Tech Stack

- 📘 **TypeScript**

**Notable libraries:** None — pure error classes, zero runtime deps.

## ⚡ Quick Start

```bash
npm install @myko.pk/errors
```

```ts
import { DatabaseError, DATABASE_ERROR_CODES } from '@myko.pk/errors';
import { REDIS_ERROR_CODES } from '@myko.pk/errors/codes';

throw new DatabaseError(DATABASE_ERROR_CODES.CONNECT_FAILED, {
  cause: originalError,
  context: { host: 'db-primary' },
});
// JSON serialization: { code: 'db.connect_failed', statusCode: 503, ... }
```

## 🚀 Available Scripts

- **build** — `npm run build`
- **typecheck** — `npm run typecheck`

## 📁 Project Structure

```
.
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── SECURITY.md
├── package.json
├── src
│   ├── codes
│   │   └── index.ts
│   ├── errors
│   │   ├── DatabaseError.ts
│   │   ├── RedisError.ts
│   │   └── index.ts
│   └── index.ts
├── tsconfig.json
└── tsup.config.mjs
```

## 🛠️ Development Setup

1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install`
3. Build: `npm run build`

## 🧪 Testing

This project currently exports error classes — runtime tests can be added via Vitest.

```bash
npm run test
```

## 👥 Contributors

<p align="left">
<a href="https://github.com/arsalanwahab" title="arsalanwahab"><img src="https://avatars.githubusercontent.com/u/178069156?v=4&s=64" width="64" height="64" alt="arsalanwahab" style="border-radius:50%" /></a>
</p>

[See the full list of contributors →](https://github.com/mykopk/errors/graphs/contributors)

## 👥 Contributing

Contributions are welcome! Here's the standard flow:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/mykopk/errors.git`
3. **Branch**: `git checkout -b feature/your-feature`
4. **Commit**: `git commit -m 'feat: add some feature'`
5. **Push**: `git push origin feature/your-feature`
6. **Open** a pull request

Please follow the existing code style and include tests for new behavior where applicable.

## 📜 License

This project is licensed under the **MIT** License.

---
Company

MYKO Pakistan

Detail	Information
Website	myko.pk
Email	support@myko.pk
About	Building digital infrastructure and super-app experiences for millions of users across Pakistan.
Built with ❤️ in Pakistan 🇵🇰
