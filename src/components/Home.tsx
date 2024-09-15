import React from 'react';
import SearchBar from './SearchBar';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <SearchBar />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    boxSizing: 'border-box'
  },
};

export default Home;
