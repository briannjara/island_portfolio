# 3D Island Portfolio

A sophisticated 3D portfolio website featuring an immersive island environment for intuitive navigation. Built with modern web technologies including React, Three.js, and TailwindCSS.

## Overview

This portfolio showcases an interactive 3D environment where users can explore different sections through an innovative island-based navigation system. The project demonstrates advanced web development capabilities while maintaining optimal performance and responsiveness.

## Key Features

- Immersive 3D island environment with interactive navigation
- Dynamic 3D model animations (Fox, Bird, Plane)
- Responsive design supporting multiple device formats
- Integrated contact system using EmailJS
- Ambient background music with user controls
- Comprehensive project showcase
- Interactive experience timeline
- Detailed skills presentation
- Modern UI implementing neo-brutalism design principles

## Technology Stack

- **Frontend Framework:** React.js
- **3D Graphics:** Three.js with React Three Fiber/Drei
- **Styling:** TailwindCSS
- **Communication:** EmailJS
- **Routing:** React Router DOM
- **Build Tool:** Vite
- **3D models source:** https://sketchfab.com/

## Installation & Setup

1. **Clone Repository**
   ```bash
   https://github.com/briannjara/island_portfolio.git
   cd island_portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:
   ```
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_EMAILJS_PRIVATE_KEY=your_private_key
   ```

4. **Launch Development Server**
   ```bash
   npm run dev
   ```

## User Guide

- Navigate the island using click and drag interactions
- Access different sections by clicking designated areas
- Control background music via the sound toggle
- Utilize the contact form for direct communication

## Project Architecture
├── components/ # Reusable UI components
├── models/ # 3D model components
├── pages/ # Main application pages
├── assets/ # Static assets
├── constants/ # Config and content data
└── hooks/ # Custom React hooks


## Customization

Edit the following files to customize the content:

- `src/constants/index.js` - Update projects, skills and experiences
- `src/assets/` - Add/modify images and 3D models
- `tailwind.config.js` - Customize theme and styling

## License

This project is licensed under the MIT License.

## Credits

- 3D Models from [Sketchfab](https://sketchfab.com/)
- Background Music: Sakura Theme