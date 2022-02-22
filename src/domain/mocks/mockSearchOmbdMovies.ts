import { SearchOmbdMovies } from "domain/usecases/search-ombd-movies";

export const mockSearchOmbMovies = {
  Search: [
    {
      Title: 'Spider',
      Year: '2021',
      imdbID: '12waad2',
      Type: 'movie',
      Poster: 'https://'
    }
  ],
  totalResults: 1
} as SearchOmbdMovies.Model