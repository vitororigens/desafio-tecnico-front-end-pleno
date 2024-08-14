import { create } from 'zustand';
import { fetchMovies } from '@/services/api';

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;  // Gêneros/Categorias do filme
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
  categories: string[];
  fetchMovie: (params: { moviePropts: string; }) => Promise<void>;
}

export const useMoviePropts = create<MovieProptsStore>((set) => ({
  movie: [],
  categories: [],
  fetchMovie: async ({ moviePropts }) => {
    try {
      const response = await fetchMovies({ moviePropts });
      const genres = extractCategories(response);
      set({ movie: response, categories: genres });
    } catch (error) {
      console.error('Error fetching movie details:', error);
      set({ movie: [], categories: [] });
    }
  },
}));

// Função para extrair categorias dos filmes
const extractCategories = (movies: Movie[]) => {
  const genresSet = new Set<string>();

  movies.forEach(movie => {
    const genres = movie.Genre.split(', ');
    genres.forEach(genre => genresSet.add(genre));
  });

  return Array.from(genresSet);
};
