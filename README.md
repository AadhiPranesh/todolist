# ✨ Task Manager Pro

<div align="center">

![Task Manager Pro](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/react-18.3.1-61dafb.svg)
![Vite](https://img.shields.io/badge/vite-6.0.5-646cff.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**A stunning, modern task management application with premium UI/UX**

[Features](#features) • [Demo](#demo) • [Installation](#installation) • [Usage](#usage) • [Design](#design-philosophy)

</div>

---

## 🎯 Overview

Task Manager Pro is a beautifully crafted todo list application featuring **glassmorphism design**, **smooth animations**, and **premium aesthetics**. Built with React and Vite, it delivers a delightful user experience with state-of-the-art UI patterns.

## ✨ Features

### 🎨 **Premium UI/UX**
- **Glassmorphism Design** - Frosted glass effects with backdrop blur
- **Dark Theme** - Elegant navy background with vibrant gradient accents
- **Smooth Animations** - Entrance, hover, and interaction micro-animations
- **Gradient Typography** - Beautiful purple-pink gradient text effects
- **Custom Styled Components** - Every element designed for visual excellence

### 🚀 **Functionality**
- ✅ **Add Tasks** - Quickly create new tasks with an elegant input
- ✅ **Mark Complete** - Toggle task completion with smooth transitions
- ✅ **Delete Tasks** - Remove tasks with animated delete button
- ✅ **Task Statistics** - Real-time pending and completed task counters
- ✅ **Local State Management** - Instant updates with React hooks

### 📱 **Responsive Design**
- Fully responsive across desktop, tablet, and mobile
- Adaptive layouts with breakpoints at 640px and 400px
- Touch-friendly buttons and interactions on mobile devices

### ♿ **Accessibility**
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure
- Keyboard navigation support
- Proper color contrast ratios

## 🎬 Demo

![Task Manager Pro Screenshot](./screenshot.png)

### Live Features:
- Animated background with pulsing gradients
- Floating particle effects
- Glassmorphic task cards with accent bars
- Hover effects with smooth transitions
- Custom scrollbar styling

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) 18.3.1
- **Build Tool:** [Vite](https://vite.dev/) 6.0.5
- **Styling:** Pure CSS with CSS Variables
- **Typography:** [Inter Font](https://fonts.google.com/specimen/Inter) from Google Fonts
- **State Management:** React Hooks (useState)
- **UUID Generation:** uuid library for unique task IDs

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todolist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🎮 Usage

### Adding a Task
1. Type your task in the input field: *"Create a new task..."*
2. Click the **✨ Add Task** button or press Enter
3. Your task appears with a smooth slide-in animation

### Completing a Task
- Click the checkbox next to any task
- Completed tasks show with crossed-out text and reduced opacity

### Deleting a Task
- Hover over a task to reveal the delete button (🗑️)
- Click to remove the task instantly

### Viewing Statistics
- **⏳ Pending** - Number of incomplete tasks
- **✅ Completed** - Number of finished tasks
- Both badges feature hover effects with glow

## 🎨 Design Philosophy

### Design Tokens
The application uses a comprehensive design system with CSS variables:

```css
--primary-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%);
--bg-primary: #0f172a;
--glass-bg: rgba(255, 255, 255, 0.05);
--shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.4);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Key Design Elements

1. **Glassmorphism**
   - Frosted glass cards with `backdrop-filter: blur(20px)`
   - Semi-transparent backgrounds
   - 1px borders with gradient highlights

2. **Animation System**
   - Container fade-in on load (600ms)
   - Task items slide in from left (400ms)
   - Smooth hover transitions (250ms)
   - Custom easing: `cubic-bezier(0.4, 0, 0.2, 1)`

3. **Color Palette**
   - **Primary:** Indigo (#6366f1) → Purple (#8b5cf6) → Pink (#d946ef)
   - **Success:** Emerald (#10b981)
   - **Warning:** Amber (#f59e0b)
   - **Danger:** Red (#ef4444)

4. **Typography**
   - Font: Inter (300, 400, 500, 600, 700, 800 weights)
   - Heading: 2.75em, 800 weight, gradient text
   - Body: 1em–1.05em, 400–600 weight

## 📁 Project Structure

```
todolist/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── Addlist.jsx           # Task input form
│   │   ├── TodoDisplay.jsx       # Task list container
│   │   ├── TodoItems.jsx         # Individual task card
│   │   └── TodolistContainer.jsx # Main app container
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & design system
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## 🎯 Design Highlights

### Task Item States
- **Pending:** Purple accent bar (#6366f1 → #8b5cf6)
- **Completed:** Green accent bar (#10b981)
- **Hover:** Translates 4px right, expands accent bar
- **Delete Button:** Appears on hover with rotation animation

### Responsive Breakpoints
```css
/* Mobile First */
@media (max-width: 640px) { /* Tablet adjustments */ }
@media (max-width: 400px) { /* Small mobile */ }
```

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Performance

- **Fast Refresh** with Vite HMR
- **Optimized Build** with code splitting
- **CSS Variables** for efficient styling
- **Pure CSS Animations** (no JavaScript animation libraries)

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Contact

For questions or feedback, please open an issue on the repository.

---

<div align="center">

**Made with ✨ and React**

*Designed for elegance. Built for performance.*

</div>
