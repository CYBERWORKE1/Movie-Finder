const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Replace 'YOUR_API_KEY_HERE' with your actual TMDB API key
const API_KEY = '2aee74c0d0ebca8a935c5652835c90db';

export const searchMovies = async (query: string) => {
  if (!query.trim()) return [];
  
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const getMovieImages = async (movieId: number) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/images?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie images:', error);
    return { backdrops: [], posters: [] };
  }
};

export const getImageUrl = (path: string, size: string = 'w500') => {
  if (!path) return '/placeholder-movie.jpg';
  return `${IMAGE_BASE_URL}/${size}${path}`;
};