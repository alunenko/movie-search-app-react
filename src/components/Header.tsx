import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

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
        {showSearchBar && <Input.Search placeholder="Search for a movie..." />}
        <Link to="/favorites" style={styles.icon}>
          <HeartOutlined />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '20px' },
  leftSide: { display: 'flex', alignItems: 'center' },
  title: { fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' },
  rightSide: { display: 'flex', alignItems: 'center' },
  icon: { marginLeft: '20px', fontSize: '24px' },
};

export default Header;
