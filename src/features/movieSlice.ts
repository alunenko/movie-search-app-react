import { createSlice } from '@reduxjs/toolkit';

interface MovieState {
  favorites: Array<{ id: string; title: string; poster: string; year: string }>;
}

const initialState: MovieState = {
  favorites: [],
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    saveToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(movie => movie.id !== action.payload);
    }
  },
});

export const {
  saveToFavorites,
  removeFromFavorites
} = movieSlice.actions;

export default movieSlice.reducer;
