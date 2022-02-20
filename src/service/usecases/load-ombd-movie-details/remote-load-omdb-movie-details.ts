import axios from "axios";

import { LoadOmbdMovieDetails } from "../../../domain/usecases/load-ombd-movie-details";

import { apiKey } from "../../../infra/config/omdb";

export class RemoteLoadOmdbMovieDetails implements LoadOmbdMovieDetails {
  async load(params: LoadOmbdMovieDetails.Params): Promise<LoadOmbdMovieDetails.Model> {
    const { data, status } = await axios.get(`http://www.omdbapi.com/?apiKey=${apiKey}&i=${params.movieId}`)
    if(status !== 200) {
      throw new Error('Falha ao buscar os filmes')
    }
    if(data.hasOwnProperty('Error')) {
      throw new Error('Falha ao buscar os filmes')
    }
    return data as LoadOmbdMovieDetails.Model
  }
}