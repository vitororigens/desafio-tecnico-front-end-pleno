import axios from 'axios';

const API_KEY = '6fc9400';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export interface FetchMoviesParams {
  year?: string;
  type?: string;
  searchTerm?: string; 
  moviePropts?: string;
}

export const fetchMovies = async ({ year, type, searchTerm, moviePropts }: FetchMoviesParams) => {
  try {
    let url = `${BASE_URL}&s=movie`;
    if (moviePropts) {
      url = `https://www.omdbapi.com/?i=${encodeURIComponent(moviePropts)}&apikey=${API_KEY}`;
    }
    if (searchTerm) {
      url = `${BASE_URL}&s=${encodeURIComponent(searchTerm)}`;
    }
    if (year) {
      url += `&y=${encodeURIComponent(year)}`;
    }
    if (type) {
      url += `&type=${encodeURIComponent(type)}`;
    }

    console.log('Request URL:', url); 
    const response = await axios.get(url);

    console.log('API Response:', response.data);

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error);
    }

    return response.data.Search || [response.data];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return []; 
  }
};
