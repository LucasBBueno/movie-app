export interface SearchOmbdMovies {
 search: (params: SearchOmbdMovies.Params) => Promise<SearchOmbdMovies.Model>
}

export namespace SearchOmbdMovies {
  export type Params = {
    name: string
    pageNumber?: number
  }

  export type Model = {
    Search: {
      Title: string,
			Year: string,
			imdbID: string,
			Type: string,
			Poster: string
    }[],
    totalResults: number
  }
}