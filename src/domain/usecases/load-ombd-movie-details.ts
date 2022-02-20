export interface LoadOmbdMovieDetails {
  load: (params: LoadOmbdMovieDetails.Params) => Promise<LoadOmbdMovieDetails.Model>
}

export namespace LoadOmbdMovieDetails {
  export type Params = {
    movieId: string
  }

  export type Model = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Actors: string,
    Plot: string,
    Awards: string,
    Poster: string,
    Ratings: [
      {
        Source: string,
        Value: string
      }
    ],
    imdbRating: string,
    imdbID: string,
    Type: string,
  }
}