import React from 'react';
import SearchBar from './SearchBar';

const styles: { container: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 84px)',
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
