import React from 'react';
import { useLocation } from 'react-router-dom';
import { List, Card, Button, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { saveToFavorites } from '../features/movieSlice';
import { useGetMoviesByTitleQuery } from '../hooks/useFetchMovies';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const query = location.state?.query || '';

  const { data, error, isLoading } = useGetMoviesByTitleQuery(query);

  const handleAddToFavorites = (movie: { imdbID: string; Title: string; Poster: string; Year: string }) => {
    dispatch(saveToFavorites({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Results for "{query}"</h1>
      {isLoading && <Spin tip="Loading..." />}
      {error && <div>Error fetching movies.</div>}
      {data?.Search && (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data.Search}
          renderItem={(movie: any) => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={movie.Title} src={movie.Poster} />}
                actions={[
                  <Button key="favorite" onClick={() => handleAddToFavorites(movie)}>Add to Favorites</Button>,
                ]}
              >
                <Card.Meta title={movie.Title} description={movie.Year} />
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default SearchResultsPage;
