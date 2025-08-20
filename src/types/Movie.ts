export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface MovieImages {
  backdrops: Array<{
    file_path: string;
    width: number;
    height: number;
  }>;
  posters: Array<{
    file_path: string;
    width: number;
    height: number;
  }>;
}

export interface UserRating {
  movieId: number;
  rating: number;
  timestamp: number;
}

export interface MovieComment {
  id: string;
  movieId: number;
  text: string;
  timestamp: number;
  author: string;
}

export interface FavoriteMovie {
  movieId: number;
  timestamp: number;
}