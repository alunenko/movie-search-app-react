import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { List, Card, Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { saveToFavorites, removeFromFavorites } from '../features/movieSlice';
import { useGetMoviesByTitleQuery } from '../hooks/useFetchMovies';
import { RootState } from '../store';
import { DeleteOutlined } from '@ant-design/icons';

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = location.state?.query || '';
  const favorites = useSelector((state: RootState) => state.movie.favorites);

  const { data, error, isLoading } = useGetMoviesByTitleQuery(query);

  const handleAddToFavorites = (movie: { imdbID: string; Title: string; Poster: string; Year: string }) => {
    dispatch(saveToFavorites({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
    }));
  };

  const handleRemoveFromFavorites = (movieId: string) => {
    dispatch(removeFromFavorites(movieId));
  };

  const isFavorite = (movieId: string) => favorites.some(movie => movie.id === movieId);

  const handlePosterClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Search Results for "{query}"</h1>
      {isLoading && (
        <div style={styles.spin}>
          <Spin />
          <span style={styles.spinText}>Loading...</span>
        </div>
      )}
      {error && <div>Error fetching movies.</div>}
      {data?.Search && (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data.Search}
          renderItem={(movie: any) => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={movie.Title} src={movie.Poster} style={styles.posterSize} onClick={() => handlePosterClick(movie.imdbID)}/>}
                actions={[
                  isFavorite(movie.imdbID) ? (
                    <Button
                      key="remove"
                      type="primary"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveFromFavorites(movie.imdbID)}
                    >
                      Remove from Favorites
                    </Button>
                  ) : (
                    <Button type="primary" key="favorite" onClick={() => handleAddToFavorites(movie)}>
                      Add to Favorites
                    </Button>
                  ),
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

const styles = {
  spin: {
    height: 'calc(100vh - 216px)',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  spinText: {
    marginLeft: '10px',
  },
  posterSize: {
    width: '100%',
    objectFit: 'cover' as 'cover',
    height: '300px',
    objectPosition: 'top',
  }
};

export default SearchResultsPage;
