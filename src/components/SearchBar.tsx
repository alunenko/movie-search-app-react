import React, { useState } from 'react';
import { Input, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useGetMoviesByTitleQuery } from '../hooks/useFetchMovies';

const { Search } = Input;

interface SearchBarProps {
  initialQuery?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState<string>(initialQuery);
  const navigate = useNavigate();

  const { isLoading, error } = useGetMoviesByTitleQuery(query, {
    skip: !query,
  });

  const handleSearch = (value: string) => {
    setQuery(value);
    navigate('/search', { state: { query: value } });
  };

  return (
    <div>
      {isLoading ? (
        <div style={style.spin}>
          <Spin />
          <span style={style.spinText}>Loading...</span>
        </div>
      ) : (
        <Search
          placeholder="Search for a movie..."
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          defaultValue={initialQuery}
        />
      )}
      {error && !isLoading && <div>Error fetching movies.</div>}
    </div>
  );
};

const style = {
  spin: {
    height: '40px',
    display: 'flex',
    alignItems: 'center'
  },
  spinText: {
    marginLeft: '10px'
  }
}

export default SearchBar;
