# Gemini Project Context: my-link

This project, `my-link`, is a personal profile or portfolio site built with modern web technologies. The core application is located within the `my-profile` directory.

## Project Overview

*   **Main Application:** Located in `my-profile/`.
*   **Purpose:** A profile/portfolio site bootstrapped with `create-next-app`.
*   **Architecture:** Next.js App Router.

## Tech Stack

*   **Framework:** [Next.js 16+](https://nextjs.org/) (App Router)
*   **UI Library:** [React 19+](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **Linting:** [ESLint](https://eslint.org/)

## Directory Structure (Key Files)

*   `my-profile/app/`: Core application logic, layouts, and pages.
    *   `layout.tsx`: Root layout with font and metadata configuration.
    *   `page.tsx`: Home page content.
    *   `globals.css`: Global CSS and Tailwind directives.
*   `my-profile/public/`: Static assets like SVG logos.
*   `my-profile/package.json`: Project metadata, dependencies, and scripts.
*   `my-profile/next.config.ts`: Next.js configuration.
*   `my-profile/tsconfig.json`: TypeScript configuration.

## Building and Running

Commands should be executed within the `my-profile/` directory.

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

*   **Type Safety:** Strictly use TypeScript for all components and logic.
*   **Styling:** Use Tailwind CSS utility classes. Prefer the new Tailwind 4 syntax where applicable.
*   **Components:** Leverage React Server Components (RSC) by default; use `"use client"` only when client-side interactivity is required.
*   **Fonts:** Utilizing `next/font` with Geist and Geist Mono for optimized performance.
