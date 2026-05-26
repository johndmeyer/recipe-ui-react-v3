# Copilot Instructions

## Stack

- Languages: TypeScript (4.9+), JavaScript (ES2020)
- Framework: React (19.x)
- UI: MUI (Material UI 9.x, @emotion/react, @emotion/styled)
- Data grid: @mui/x-data-grid
- Package manager: npm
- Build tool: react-scripts (CRA 5.x)

## Architecture
```
src/
  components/        # UI components (DropDown, InfoRow, RecipeCard*, RefItemEditor, ResultsTable)
  services/          # Data access, mock data, API abstraction
  utils/             # Utility functions (e.g., formatter)
  assets/            # Static assets (images, etc.)
  types.ts           # Centralized TypeScript types/interfaces
  App.tsx, index.tsx # App root and entry point
```
- **Data flow** React props/state, hooks, async/await for data fetching
- **No external APIs by default** (mockData used for data) - not yet integrated with backend
- **No explicit domain/repository/service layering** - not yet integrated with backend

## Conventions

- **File naming**: PascalCase for components, camelCase for utils/services
- **Component export**: default exports for components
- **Types/interfaces**: all in types.ts
- **Async**: async/await for data fetching
- **State**: React hooks (useState, useEffect)
- **Error handling**: minimal, mostly omitted in mocks
- **UI**: MUI components, functional React components

## Testing
- **Framework**: Jest, React Testing Library
- **Test files**: *.test.tsx in src
- **Setup**: setupTests.ts for jest-dom
- **Mocks**: Uses mockData for services, no HTTP requests in tests

## Avoid
- **No Redux, MobX, or other state libraries**
- **No class components**
- **No legacy folders outside src**
- **No direct DOM manipulation**
- **No custom webpack/eject unless necessary**