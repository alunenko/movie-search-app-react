import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMoviesByTitle: builder.query({
      query: (title: string) => `?apikey=${API_KEY}&s=${title}`,
    }),
  }),
});

export const { useGetMoviesByTitleQuery } = movieApi;
