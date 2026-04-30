# 🚧 IronLift Cranes — React Project



A modern, responsive crane services website built using **React + Vite**, featuring smooth animations, modular architecture, and a dynamic contact workflow.
🌐 Live Demo

🔗 Live Demo: https://iron-lift-cranes.vercel.app/
---

## 📌 Features

* ⚡ Built with **React (Vite)**
* 🎨 Styled using **Tailwind CSS**
* 🎞️ Smooth animations with **Framer Motion**
* 🧩 Modular structure (components, sections, hooks, utils)
* 📦 Centralized data handling (`/data`)
* 📱 Fully responsive design
* 📨 Dynamic contact form with validation
* 🔄 Scroll-based animations (crane hook, sections)

---

## 📂 Project Structure

```plaintext
src/
├── components/       # Layout & reusable UI
├── pages/            # Route-level pages
├── sections/         # Page sections (Hero, Services, etc.)
├── data/             # Static content & config
├── hooks/            # Custom React hooks
├── utils/            # Helpers & validation logic
├── App.jsx           # Main app + routing
├── main.jsx          # Entry point
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/pawar-kaustubh/IronLift-Cranes.git
cd client
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Run development server

```bash
npm run dev
```

App will run at:

```plaintext
http://localhost:5173
```

---

### 4. Build for production

```bash
npm run build
```

---

### 5. Preview production build

```bash
npm run preview
```

---

## 📦 Dependencies

Main libraries used:

* **react**
* **react-router-dom**
* **framer-motion**
* **tailwindcss**
* **lucide-react**
* **sonner (toast notifications)**
* **axios** (for API-ready structure)

---

## 🧠 Key Concepts Used

* Component-based architecture
* Reusable UI + section separation
* Centralized data layer (`data/index.js`)
* Custom hooks (form validation, navigation)
* Scroll-based animations with Framer Motion
* Responsive design with Tailwind

---

## 🎯 How It Works

* **Home Page** → Displays Hero, Services, Testimonials
* **Services Page** → Lists crane fleet dynamically
* **Contact Page** → Prefills form based on selected crane
* **Sidebar Crane** → Moves based on scroll position
* **Loader** → Animated entry screen using Framer Motion

---

## 🚀 Future Improvements

* Backend integration (Node.js / Express)
* Admin dashboard for managing listings
* Authentication system
* API-based dynamic data

---

## 👨‍💻 Author

**Kaustubh (CSE Student)**

* React Developer
* MERN Stack Enthusiast

---

## 📄 License

This project is for educational and portfolio purposes.
