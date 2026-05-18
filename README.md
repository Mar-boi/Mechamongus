# Mechamongus 🚀

> **Note:** This Project is made for learning to develop websites using React.

Welcome to the **Mechamongus** repository! This is a comprehensive, full-stack web application built to explore and learn modern web development technologies and best practices within the React ecosystem.

## 🛠️ Tech Stack

This project leverages a powerful and modern tech stack:

- **Framework**: [Next.js](https://nextjs.org/) (App/Pages Router)
- **Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Material-UI](https://mui.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Payments**: [Stripe](https://stripe.com/)
- **Backend as a Service**: [Firebase](https://firebase.google.com/)
- **Charts & Data Visualization**: [Chart.js](https://www.chartjs.org/)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 1. Clone the repository

```bash
git clone git@github.com:Mar-boi/Mechamongus.git
cd Mechamongus
```

### 2. Install dependencies

Since this project uses `bun` (or npm), you can install the required packages by running:

```bash
bun install
# or
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the root directory. You can use the provided `.env.example` as a reference:

```bash
cp .env.example .env
```

Make sure to fill in all the required API keys and database URIs in your new `.env` file.

### 4. Setup Prisma Database

Push the database schema and generate the Prisma client:

```bash
bunx prisma generate
bunx prisma db push
```

### 5. Run the Development Server

Start the application in development mode:

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📚 Learning Objectives

As stated, this project serves as a practical learning playground to master:

- Building scalable user interfaces with React and Next.js.
- Integrating secure Authentication flows.
- Interacting with databases using Prisma ORM.
- Handling real-world payment processing with Stripe.
- Creating responsive designs using Tailwind CSS.

---

_Happy Coding!_ 💻
