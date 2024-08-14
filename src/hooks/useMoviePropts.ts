import { create } from 'zustand';
import { fetchMovies } from '@/services/api';

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

interface MovieProptsStore {
  movie: Movie[];
  fetchMovie: (params: { moviePropts: string; }) => Promise<void>;
}

export const useMoviePropts = create<MovieProptsStore>((set) => ({
  movie: [],
  fetchMovie: async ({ moviePropts }) => {
    try {
      const response = await fetchMovies({ moviePropts });
      console.log('teste', response)
      console.log('parametro', moviePropts)
      set({ movie: response });
    } catch (error) {
      console.error('Error fetching movie details:', error);
      set({ movie: [] });
    }
  },
}));
