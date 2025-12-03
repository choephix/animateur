# Animateur

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/choephix/animateur)

A 3D character animation viewer/editor built with Angular 8 and Three.js. Load, preview, and manage 3D character models with animation support.

## Live Demo

🔗 https://threejs-animateur.web.app/

## Features

- 🎭 Load 3D character models via drag-and-drop
- 🎬 Animation playback with mixer controls
- 🎨 Material/texture preview
- 📦 ZIP file import/export support
- 🌲 Scene explorer with hierarchy tree
- ⚡ Real-time performance stats

## Tech Stack

- **Angular 8** - UI framework
- **Three.js** - 3D rendering
- **Angular Material** - UI components
- **JSTree** - Hierarchy visualization
- **JSZip** - Archive handling

## Development

```bash
npm install        # install dependencies
npm start          # dev server @ http://localhost:4200
npm run build      # production build → dist/
npm run lint       # run linter
```

## Project Structure

```
src/
├── app/
│   ├── components/   # viewport, toolbar, explorer, statusbar
│   ├── services/     # scene, loading, export, utilities
│   └── common/       # shared UI components
└── assets/           # textures, styles, themes
```
