import { fetchMovies } from '@/services/api';
import { create } from 'zustand';

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface MovieState {
  movies: Movie[];
  fetchMoviesSearch: (searchTerm: string) => void;
}

export const useSearchMovies = create<MovieState>((set) => ({
  movies: [],
  fetchMoviesSearch: async (searchTerm: string) => {
    try {
      const response = await fetchMovies({ searchTerm });
      set({ movies: response.Search || [] }); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      set({ movies: [] });
    }
  }
}));
