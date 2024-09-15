import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import SearchBar from './SearchBar';
import { RootState } from '../store.ts';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const location = useLocation();
  const favorites = useSelector((state: RootState) => state.movie.favorites);
  const showSearchBar = location.pathname !== '/';
  const hasFavorites = favorites.length > 0;

  return (
    <header style={styles.header}>
      <div style={styles.leftSide}>
        <Link to="/" style={styles.title}>
          The Movie Database
        </Link>
      </div>
      <div style={styles.rightSide}>
        {showSearchBar && <SearchBar />}
        <Link to="/favorites" style={styles.icon}>
          {hasFavorites ? <HeartFilled style={styles.filledHeart} /> : <HeartOutlined />}
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    position: 'fixed' as 'fixed',
    top: '0',
    zIndex: '1',
    backgroundColor: 'white',
    width: '100%',
    boxSizing: 'border-box' as 'border-box',
    height: '80px'
},
  leftSide: { display: 'flex', alignItems: 'center' },
  title: { fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' },
  rightSide: { display: 'flex', alignItems: 'center' },
  icon: { marginLeft: '20px', fontSize: '24px' },
  filledHeart: { color: 'red' }
};

export default Header;
