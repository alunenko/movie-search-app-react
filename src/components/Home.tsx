import React from 'react';
import SearchBar from './SearchBar';

const styles: { container: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    boxSizing: 'border-box'
  },
};

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <SearchBar />
    </div>
  );
};

export default Home;
