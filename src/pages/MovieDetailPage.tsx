import React from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMovieByIdQuery } from '../hooks/useFetchMovies';
import { saveToFavorites, removeFromFavorites } from '../features/movieSlice';
import { RootState } from '../store';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.movie.favorites);

  const { data, error, isLoading } = useGetMovieByIdQuery(id!, { skip: !id });

  const handleAddToFavorites = () => {
    if (data) {
      dispatch(saveToFavorites({
        id: data.imdbID,
        title: data.Title,
        poster: data.Poster,
        year: data.Year,
      }));
    }
  };

  const handleRemoveFromFavorites = () => {
    if (data) {
      dispatch(removeFromFavorites(data.imdbID));
    }
  };

  const isFavorite = (movieId: string) => favorites.some(movie => movie.id === movieId);

  if (isLoading) {
    return (
      <div style={styles.spin}>
        <Spin />
        <span style={styles.spinText}>Loading movie details...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error loading movie details.</div>;
  }

  return (
    <div style={styles.container}>
      {data && (
        <Card
          bordered={false}
          cover={<img alt={data.Title} src={data.Poster} style={styles.posterSize} />}
          style={{ display: 'flex', flexDirection: 'row', boxShadow: 'unset' }}
        >
          <h1>{data.Title}</h1>
          <p><strong>Year:</strong> {data.Year}</p>
          <p><strong>Genre:</strong> {data.Genre}</p>
          <p style={{textAlign: 'justify'}}><strong>Plot:</strong> {data.Plot}</p>
          <p><strong>Actors:</strong> {data.Actors}</p>
          <p><strong>Director:</strong> {data.Director}</p>
          <p><strong>Runtime:</strong> {data.Runtime}</p>

          {isFavorite(data.imdbID) ? (
            <Button type="primary" danger onClick={handleRemoveFromFavorites}>
              Remove from Favorites
            </Button>
          ) : (
            <Button type="primary" onClick={handleAddToFavorites}>
              Add to Favorites
            </Button>
          )}
        </Card>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
  },
  posterSize: {
    width: '100%',
    minWidth: '300px',
    objectFit: 'cover' as 'cover',
    height: '100%',
    objectPosition: 'top',
    marginBottom: '20px',
    borderRadius: '8px'
  },
  spin: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinText: {
    marginLeft: '10px',
  },
};

export default MovieDetailPage;
