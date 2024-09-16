# Test Assignment Requirements
- ✅ Vite
- ✅ React
    - ✅ TypeScript
    - ✅ Functional components
    - ✅ Hooks
        - ✅ useState
        - ❌ useEffect
- ✅ Ant Design as the UI library
- ✅ Redux Toolkit & RTK Query
    - ✅ Setup global state
    - ✅ Handle API requests
- ✅ React-router
- ❌ ESLint
- ❌ Prettier
- ❌ Set up linters and auto-formatting on commits
    - ❌ husky
    - ❌ lint-staged
- ✅Include a README.md file with instructions on how to run the project and a brief description of the architecture.

# Instructions on how to run
1. Clone project
2. Navigate to project folder
3. Install packages `npm i`
4. Setup `.env` file with key `VITE_OMDB_API_KEY`
5. To run project locally `npm run dev`

# Brief description of the architecture
```
src/                        - The root directory for the source code
├── components/             - Reusable UI components
│   ├── Header.tsx          - Includes navigation and branding
│   ├── SearchBar.tsx       - Searching movies, used on pages: search, home
│   ├── Home.tsx            - The layout or content specifically for the homepage
├── features/               - Contains Redux slices, which manage specific pieces of the application's state
│   ├── movieSlice.ts       - Handles state and actions related to movies
├── hooks/                  - Custom React hooks, typically for logic that can be reused across components
│   ├── useFetchMovies.ts   - A hook to fetch movie data
├── pages/                  - Components corresponding to different routes or pages in the application
│   ├── HomePage.tsx        - The homepage layout
│   ├── SearchPage.tsx      - The page to display search results
│   ├── FavoritesPage.tsx   - Displays a list of favorited movies
│   └── MovieDetailPage.tsx - Shows details about a specific movie
├── store.ts                - Centralized Redux store configuration
├── App.tsx                 - Main application component, handling routing and overall structure
├── main.tsx                - Entry point for the application, rendering the App component into the DOM
└── App.css                 - Global styles for the application
```
