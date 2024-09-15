import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartOutlined } from '@ant-design/icons';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  const location = useLocation();
  const showSearchBar = location.pathname !== '/';

  return (
    <header style={styles.header}>
      <div style={styles.leftSide}>
        <Link to="/" style={styles.title}>
          The Movie Database
        </Link>
      </div>
      <div style={styles.rightSide}>
        {showSearchBar && <SearchBar />} {}
        <Link to="/favorites" style={styles.icon}>
          <HeartOutlined />
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
    boxSizing: 'border-box',
    height: '80px'
},
  leftSide: { display: 'flex', alignItems: 'center' },
  title: { fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' },
  rightSide: { display: 'flex', alignItems: 'center' },
  icon: { marginLeft: '20px', fontSize: '24px' },
};

export default Header;
