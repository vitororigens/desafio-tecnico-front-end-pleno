import {create} from 'zustand';
import { fetchMovies } from '@/services/api';

export interface Movies {
  imdbID: string;
  Title: string;
  imdbRating: string;
  Year: string;
  Plot: string;
  Genre: string;
}

interface MovieStore {
  movies: Movies[];
  highestRatedMovie: Movies | null;
  setMovies: (movies: Movies[]) => void;
  setHighestRatedMovie: (movie: Movies | null) => void;
  fetchMovies: (params: { year: string; type: string }) => Promise<void>;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  highestRatedMovie: null,
  setMovies: (movies) => set({ movies }),
  setHighestRatedMovie: (movie) => set({ highestRatedMovie: movie }),
  fetchMovies: async ({ year, type }) => {
    try {
      const response = await fetchMovies({ year, type });
      set({ movies: response });

      if (response.length > 0) {
        const highestRatedMovie = response.reduce((prev: Movies, curr: Movies) =>
          parseFloat(curr.imdbRating) > parseFloat(prev.imdbRating) ? curr : prev
        );
        set({ highestRatedMovie });
      } else {
        set({ highestRatedMovie: null });
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  },
}));
