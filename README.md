# 🧩 React Bottom Sheet with Custom Spring Motion

This project is a React-based application that demonstrates a **Bottom Sheet UI component** with **multiple snap points** and **custom spring animation** — built **without third-party libraries** like `framer-motion` or `react-spring-bottom-sheet`.

## 🎯 Features

- 🔹 Bottom sheet with **3 snap points**: Closed, Half-open, Fully open
- 🔹 Smooth **spring motion animation** (manually implemented)
- 🔹 **Drag-and-release gesture support**
- 🔹 **Responsive design** for mobile and desktop
- 🔹 Built using **React Functional Components** and **Hooks**
- 🔹 Manual controls (optional buttons)
- 🔹 No third-party animation libraries

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
> If you're downloading manually, skip this step.
```bash
   git clone https://github.com/Omee-Yehme/Bottom-Sheet.git
   cd bott-sheet
```
### 2. Install Dependencies
```bash
  npm install
```
3. Run the Application
```bash
   npm run dev
Then open your browser and navigate to:
http://localhost:5173
```
### 🛠️ How This React App Was Created Using Vite
This project was bootstrapped using Vite, which is a fast frontend build tool.

📌 Steps to Create This Project with Vite
- Install Vite (if not already installed)
You can use npm, yarn, or pnpm.
```bash
npm create vite@latest app-name --template react
Give your project a name (e.g., bott-sheet)
```
- Select Framework
Choose:
```yaml
   ✔ Framework: » React
   ✔ Variant: » JavaScript
```
- Navigate into the project folder:
```bash
cd bott-sheet
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm run dev
```
### 🧱 Project Structure
```bash
├── src/
│   ├── App.jsx             # Main application wrapper
│   ├── App.css             # Core Bottom Sheet logic and UI
│   ├── BottomSheet.jsx     # Custom CSS styles for the sheet
│   ├── BottomSheet.css     # Global/app-level styles
│   └── main.jsx            # React DOM entry point
├── index.html
├── package.json
└── vite.config.js
```
### 📱 Snap Points
Implemented as percentages of the screen height:

- 0% → Fully Open (top of screen)

- 50% → Half Open

- 90% → Closed (only handle visible)

### ⚙️ Spring Motion Animation
- Spring behavior is simulated using a custom physics-based loop:

- Velocity, acceleration, and damping are implemented manually.

- Drag events are tracked using mousedown, mousemove, mouseup, and their mobile equivalents.

- After drag, the sheet snaps to the nearest point using a spring effect (no framer-motion).

### 🔧 Technologies Used
- React (with Hooks)

- Vite (fast dev environment)

- Custom CSS

- No animation libraries

### 📱 Responsive Design
- Bottom sheet adapts to mobile and desktop screen widths.

- Tested with dev tools and mobile simulators.

📌 Assignment Requirements Checklist
- Requirement	Status ✅
- React setup with Hooks & Functional Components	✅
- Bottom Sheet Component	✅
- Three Snap Points	✅
- Custom Spring Motion Animation (No libraries)	✅
- Drag-and-release interaction	✅
- Manual Control (Buttons/Handle)	✅
- Visually Appealing Styles	✅
- Responsive on mobile & desktop	✅

📸 Demo

<img width="300" height="600" alt="image" src="https://github.com/user-attachments/assets/d1b2cdac-9cb6-431c-8133-17aef8d4bc14" />



