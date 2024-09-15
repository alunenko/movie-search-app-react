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
      <Search
        placeholder="Search for a movie..."
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        defaultValue={initialQuery}
      />
      {isLoading && <Spin tip="Loading..." />}
      {error && <div>Error fetching movies.</div>}
    </div>
  );
};

export default SearchBar;
