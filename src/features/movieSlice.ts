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
  },
});

export const { saveToFavorites } = movieSlice.actions;

export default movieSlice.reducer;
