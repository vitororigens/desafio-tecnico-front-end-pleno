import { fetchMovies } from '@/services/api';
import create from 'zustand';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieState {
  movies: Movie[];
  fetchMovies: (searchTerm: string) => void;
}

export const useMoviesStore = create<MovieState, []>((set) => ({
  movies: [],
  fetchMovies: async (searchTerm: string) => {
    const movies = await fetchMovies(searchTerm);
    set({ movies });
  }
}));
