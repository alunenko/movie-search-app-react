import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './features/movieSlice';
import { movieApi } from './hooks/useFetchMovies';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
