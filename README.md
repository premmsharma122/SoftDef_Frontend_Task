# 🪴 FloraVision Landing Page

A **pixel-perfect, highly responsive, production-ready** implementation of the **FloraVision Digital Twin Ecosystem Landing Page**, built using **React.js**, **Vite**, and **Tailwind CSS**.

The project replicates the original Figma design with a modern **glassmorphism UI**, immersive botanical aesthetics, and a fully responsive layout across all screen sizes.

---

## ✨ Preview

> **Dark Botanical Glassmorphism • Responsive • Component-Based • Modern UI**

---

## 🚀 Features

- 🌿 Pixel-perfect Figma implementation
- 🌑 Atmospheric botanical background with layered foliage textures
- ✨ Glassmorphism UI using `backdrop-blur`
- 🎨 Custom whimsical typography integration
- 📱 Fully responsive (320px – 1440px+)
- ⚡ Built with Vite for fast development
- 🧩 Modular component-based architecture
- 🎯 Smooth hover animations & micro-interactions
- 🛒 Responsive mobile navigation drawer
- 💚 Clean and maintainable code structure

---

## 🎨 Design Highlights

### 🌿 Botanical Background
- Deep layered foliage texture
- Radial spotlight lighting effects
- Atmospheric dark theme

### 🪟 Glassmorphism
- Frosted glass panels
- Semi-transparent backgrounds
- Soft borders
- High contrast UI elements

### ✍ Typography
- Custom **Architects Daughter** font
- Modern botanical aesthetic
- Elegant heading hierarchy

### ✨ Micro Interactions
- Hover scaling effects
- Smooth transitions
- Interactive CTA buttons
- Responsive navigation drawer

---

# 🏗️ Project Structure

```text
floravision/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrendyPlants.jsx
│   │   └── TopSelling.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

# 🛠 Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎯 Lucide React Icons

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/floravision.git

cd floravision
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install Additional Packages

```bash
npm install lucide-react

npm install -D tailwindcss@3 postcss autoprefixer
```

---

## 4️⃣ Generate Tailwind Configuration

```bash
npx tailwindcss init -p
```

Update **tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 5️⃣ Configure Tailwind

Replace everything inside **src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 6️⃣ Run the Development Server

```bash
npm run dev
```

The application will be available at

```
http://localhost:5173
```

---

# 📂 Components

| Component | Description |
|------------|-------------|
| Navbar | Responsive navigation with branding, search, cart, and mobile drawer |
| Hero | Main landing section with CTA and testimonials |
| TrendyPlants | Glassmorphism plant showcase cards |
| TopSelling | Featured products grid with custom badges |
| App | Main layout assembly |
| main.jsx | React application entry point |

---

# 📱 Responsive Design

Supports:

- 📱 Mobile
- 📱 Tablets
- 💻 Laptop
- 🖥 Desktop
- 🖥 Large Screens

Optimized for screen sizes ranging from **320px to 1440px+**.

---

# ✨ UI Highlights

- Glassmorphism Effects
- Botanical Theme
- Radial Ambient Lighting
- Smooth Animations
- Frosted Cards
- Custom Typography
- Modern Product Cards
- Interactive Buttons

---

# 📸 Screenshots

> Add your screenshots here.

```
/screenshots
├── desktop.png
├── mobile.png
└── tablet.png
```

---

# 📦 Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Prem Sharma**

- GitHub: https://github.com/premmsharma122
- LinkedIn: [https://linkedin.com/in/your-profile](https://www.linkedin.com/in/prem-sharma-0a4b62291/)

---

⭐ If you found this project helpful, don't forget to **Star** the repository!
