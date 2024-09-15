import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Card, Button, Empty, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { removeFromFavorites } from '../features/movieSlice';

const FavoritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.movie.favorites);

  const handleRemoveFromFavorites = (id: string) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <div style={styles.container}>
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <List grid={{ gutter: 16, column: 4}}
              dataSource={favorites} renderItem={(movie: any) => (
          <List.Item>
            <Card
              key={movie.id}
              hoverable
              style={styles.card}
              cover={<img alt={movie.title} src={movie.poster} style={styles.poster} />}
            >
              <Card.Meta title={movie.title} description={`Year: ${movie.year}`} />
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                style={styles.removeButton}
                onClick={() => handleRemoveFromFavorites(movie.id)}
              >
                Remove
              </Button>
            </Card>
          </List.Item>
        )}/>
      ) : (
        <Empty description="No favorite movies yet." style={styles.empty}/>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    height: 'calc(100vh - 112px)',
  },
  card: { width: '100%' },
  poster: { width: '300px', height: '300px', objectFit: 'cover' as 'cover', objectPosition: 'top' },
  removeButton: { marginTop: '10px', width: '100%' },
  empty: {
    minHeight: 'calc(100% - 125px)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column' as 'column'
  }
};

export default FavoritesPage;
