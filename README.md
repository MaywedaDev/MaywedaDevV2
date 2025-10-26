# MaywedaDev Portfolio

A modern, animated portfolio website built with Vue 3, TypeScript, and TailwindCSS. This project showcases various interactive components and smooth animations using GSAP and Lenis for seamless scrolling experiences.

## Features

- Vue 3 with Composition API and TypeScript
- Smooth scrolling with Lenis
- GSAP animations
- Responsive design with TailwindCSS
- Interactive components including:
  - Curved text animations
  - Decrypted text effect
  - Floating bubbles
  - Gallery sections
  - Marquee scrolling
  - Project cards
  - Staggered menu animations

## Prerequisites

- Node.js (version 16 or higher recommended)
- pnpm (version 10.15.1 or higher)

## Getting Started

⚠️ **Important**: This project uses pnpm as the package manager. Using npm or yarn is not supported and will be blocked by the preinstall script.

1. Clone the repository:

   ```bash
   git clone https://github.com/MaywedaDev/MaywedaDevV2.git
   cd MaywedaDevV2
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm preview
```

## Tech Stack

- Vue 3
- TypeScript
- Vite
- TailwindCSS
- GSAP (for animations)
- Lenis (for smooth scrolling)
- Vue Router
- Iconify (for icons)
- VueBits (for interactive components)

## Acknowledgments

Special thanks to David Haz ([davidhaz.com](https://davidhaz.com/)) for creating VueBits, which provided some of the amazing interactive components used in this project.

## Project Structure

- `/src` - Source code
  - `/assets` - Static assets (fonts, images)
  - `/components` - Vue components
  - `/views` - Vue router views
  - `App.vue` - Root component
  - `main.ts` - Application entry point
  - `router.ts` - Vue router configuration

## License

This project is licensed under the MIT License.
