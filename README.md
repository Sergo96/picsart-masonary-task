# Project Overview

This project is a modern web application built with React and Vite, optimized for performance and scalability. Here's a breakdown of the key technologies and decisions made:

## Getting Started

### Prerequisites
- Node.js (v22 or above)
- Yarn (or npm, though commands are given for Yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
Install dependencies:
bash
yarn install

run project: yarn dev

Technologies:

React: A JavaScript library for building user interfaces.
Vite: A build tool for modern web applications.
Yarn: A package manager for JavaScript.
React Query: A library for managing server state in React applications.
Design Decisions:

Vite is chosen for its fast development server, instant server start, and optimized build.
React Query is used for simplified data fetching, caching, and state management.
Performance Optimization:

Architecture:

Submodule Architecture: The project is organized into well-defined submodules,
each responsible for a specific feature or functionality, improving code organization and maintainability.

Image optimization with srcSet for responsive images reduces bandwidth usage.
Lazy loading defers loading of non-critical images for faster initial load.
Virtualized grid improves performance for large datasets by rendering only visible parts.
React Pages (Code Splitting) reduces initial bundle size and improves load times.
React Hooks (useCallback, useMemo) optimize component re-renders.
Ensuring Performance:

Unit testing catches bugs early.
Performance monitoring identifies bottlenecks.
Lighthouse audits maintain high performance scores.
