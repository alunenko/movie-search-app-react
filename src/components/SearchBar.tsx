import React from 'react';
import { Input } from 'antd';

const SearchBar: React.FC = () => {
  return (
    <div style={styles.inputGrid}>
      <Input.Search
        placeholder="Search for a movie by name. For example: Titanic"
        enterButton="Search"
        size="large"
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};

const styles = {
  inputGrid: {
    width: '80%'
  }
}

export default SearchBar;
