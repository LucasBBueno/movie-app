import axios from 'axios'

import { SearchOmbdMovies } from "../../../domain/usecases/search-ombd-movies";

import { apiKey } from "../../../infra/config/omdb";

export class RemoteSearchOmbdMovies implements SearchOmbdMovies {
  async search(params: SearchOmbdMovies.Params): Promise<SearchOmbdMovies.Model> {
    const { data, status } = await axios.get(`https://www.omdbapi.com/?apiKey=${apiKey}&s=${params.name}&type=movie&page=${params.pageNumber ?? 1}`)
    if(status !== 200) {
      throw new Error('Falha ao buscar os filmes')
    }
    if(data.hasOwnProperty('Error') && data.Error === 'Too many results.') {
      throw new Error('Muitos resultados encontrados')
    }
    if(data.hasOwnProperty('Error')) {
      throw new Error('Falha ao buscar os filmes')
    }
    return data as SearchOmbdMovies.Model
  }
}