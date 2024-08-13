import axios from 'axios';

const API_KEY = 'fea450a149a3b99beb8f768b60c48605';
const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

export const fetchMovies = async (searchTerm: string) => {
  const response = await axios.get(`${BASE_URL}&query=${searchTerm}`);
  return response.data.results; 

};
