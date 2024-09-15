import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import HomePage from './pages/HomePage.tsx';
import SearchResultsPage from './pages/SearchResultsPage.tsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        {/*<Route path="/favorites" element={<FavoritesPage />} />*/}
        {/*<Route path="/movie/:id" element={<MovieDetailPage />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
