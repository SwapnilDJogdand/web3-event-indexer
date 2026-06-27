# 🚀 Ponder Sepolia Event Indexer

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Ponder](https://img.shields.io/badge/Ponder-Event%20Indexer-black)
![GraphQL](https://img.shields.io/badge/GraphQL-API-E10098?logo=graphql)
![Solidity](https://img.shields.io/badge/Solidity-Smart%20Contracts-363636?logo=solidity)

A full-stack blockchain event indexing application built with **Ponder**, **Solidity**, **GraphQL**, and **TypeScript**.

The project listens to smart contract events deployed on the **Ethereum Sepolia Testnet**, indexes them into a local database, exposes the indexed data through a **GraphQL API**, and displays everything in a responsive frontend dashboard.

---

## ✨ Features

* 📦 Smart contract deployed on Sepolia
* ⚡ Real-time event indexing with Ponder
* 🔍 Query indexed data using GraphQL
* 📊 Responsive frontend dashboard
* 🔎 Search indexed messages
* 📝 Track Create, Update, and Delete events
* 🗄 Automatic database synchronization

---

## 🏗 Tech Stack

| Technology | Purpose          |
| ---------- | ---------------- |
| Solidity   | Smart Contract   |
| Ponder     | Event Indexer    |
| GraphQL    | API Layer        |
| TypeScript | Backend          |
| JavaScript | Frontend Logic   |
| HTML & CSS | User Interface   |
| Sepolia    | Ethereum Testnet |
| Alchemy    | RPC Provider     |

---

## 📂 Project Structure

```text
.
├── abis/               # Smart contract ABI
├── frontend/           # Dashboard
├── generated/          # Auto-generated Ponder files
├── src/                # Event handlers
├── ponder.config.ts
├── ponder.schema.ts
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/<username>/ponder-sepolia-indexer.git

cd ponder-sepolia-indexer
```

Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file.

```env
PONDER_RPC_URL_1=https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY
```

---

## ▶️ Run the Project

```bash
npm run dev
```

This starts:

* Event Indexer
* GraphQL Server
* Local Database

GraphQL Playground

```text
http://localhost:42069/graphql
```

---

## 🔍 Example GraphQL Query

```graphql
{
  messages(limit: 10) {
    items {
      id
      author
      content
      timestamp
      exists
    }
  }
}
```

---

## 📸 Screenshots

### Dashboard

![Dashboard](./screenshots/frontend.png)

### GraphQL Playground

![GraphQL Playground](./screenshots/graphql.png)

---

## 🔄 Project Workflow

```text
Smart Contract
      │
      ▼
Contract Events
      │
      ▼
Ponder Indexer
      │
      ▼
Local Database
      │
      ▼
GraphQL API
      │
      ▼
Frontend Dashboard
```

---

## 🚀 Future Improvements

* Wallet authentication
* Pagination
* Filtering & sorting
* Docker support
* Deployment guide
* Unit and integration tests

---
