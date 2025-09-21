# Creative Upaay Task Dashboard

This is a full-stack assignment solution for the **Creative Upaay Full Stack Development Assignment**.  
It implements a task dashboard based on the given Figma design with React, Redux, Tailwind CSS, and LocalStorage persistence.

---

## 🚀 Features

- **UI Implementation**
  - Dashboard with three sections: **To Do**, **In Progress**, **Done**
  - Styled using **Tailwind CSS**
- **Task Management**
  - Add new tasks with **title, description, and priority**
  - Move tasks between sections with buttons
  - **Drag-and-drop** support for moving tasks between sections
- **Filtering**
  - Filter tasks by priority (All, Low, Medium, High)
- **State Management**
  - Managed with **Redux Toolkit**
  - Persistent with **LocalStorage**
- **Bonus**
  - Drag & Drop implemented using `react-beautiful-dnd`

---

## 🛠️ Tech Stack

- **React.js** (Frontend)
- **Tailwind CSS** (UI Styling)
- **Redux Toolkit** (State Management)
- **LocalStorage** (Persistence)
- **Vite** (Bundler & Dev Server)

---

## 📂 Project Structure

```
creative-upaay-dashboard/
├── src/
│   ├── components/
│   │   └── TaskBoard.jsx
│   ├── redux/
│   │   ├── store.js
│   │   └── taskSlice.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ▶️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/creative-upaay-dashboard.git
cd creative-upaay-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open the local URL shown in your terminal (usually `http://localhost:5173`).

---

## 📤 Deployment

You can deploy the project easily on:
- **Netlify**
- **Vercel**
- **Render**

Since this is a Vite + React app, just connect your GitHub repo and deploy directly.

---

## 🎥 Video Demo

Record a short video showing:
- Adding tasks
- Moving tasks (button + drag & drop)
- Filtering tasks
- Refreshing the page (to show persistence)

Attach the video link along with your submission.

---

## ✅ Evaluation Checklist

- [x] UI matches Figma design
- [x] Add/Move tasks working
- [x] Filtering implemented
- [x] Redux + LocalStorage used
- [x] Drag-and-drop feature implemented

---

### Author
Developed for **Creative Upaay Full Stack Development Assignment**
