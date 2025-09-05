# Otaku Stories

Otaku Stories is a modern web application for browsing and commenting on anime-related blog posts. Built with React, Vite, Tailwind CSS, and React Router, it provides a fast, responsive, and interactive experience for anime fans.

---

## ✨ Features

- **Browse Posts:** View a list of anime blog posts fetched from a remote API.
- **Post Details:** Read full post content rendered with Markdown.
- **Commenting:** Add your own comments to any post.
- **Responsive Design:** Looks great on mobile, tablet, and desktop.
- **Client-side Routing:** Seamless navigation using React Router.
- **Modern UI:** Styled with Tailwind CSS for a clean, vibrant look.

---

## 🛠️ Tech Stack

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [React Router](https://reactrouter.com/) — Routing
- [React Markdown](https://github.com/remarkjs/react-markdown) — Markdown rendering

---

## 📁 Project Structure

```
Otaku_reader/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.jsx
    ├── main.jsx
    ├── PostDetail.jsx
    ├── posts.jsx
    └── assets/
        └── react.svg
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/otaku-stories.git
   cd otaku-stories
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📝 Usage

- **Home Page:** Lists all available anime blog posts. Click on a post to view details.
- **Post Detail Page:** Shows the full content of the post (with Markdown support) and allows you to add comments.
- **Add Comment:** Enter your name and comment, then submit. Your comment will appear below the post.

---

## 🌐 API

This app fetches posts and comments from a public API:

- **Posts:** `https://anime-blog-7oi4.onrender.com/api/posts`
- **Single Post:** `https://anime-blog-7oi4.onrender.com/api/posts/:id`
- **Post Comments:** `https://anime-blog-7oi4.onrender.com/api/posts/:id/comments`

---

## 🧩 Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

---

## 📄 License

MIT

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)

---

Made with ❤️ for anime fans!