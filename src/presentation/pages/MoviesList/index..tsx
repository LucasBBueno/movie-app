import React, { useState, useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { toast } from 'react-toastify' 

import Header from '../../shared/components/Header'
import Movie from '../../../domain/entities/movie-model'
import { RemoteSearchOmbdMovies } from '../../../service/usecases/search-omdb-movies/remote-load-ombd-movies'
import SearchMoviesContext from '../../contexts/search-movies'
import MovieCard from '../../shared/components/MovieCard'

import * as S from './styles'

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [actualPage, setActualPage] = useState(1)
  const [hasMoreResults, setHasMoreResults] = useState(false)

  const { state } = useContext(SearchMoviesContext)

  const searchMoviesService = new RemoteSearchOmbdMovies()

  const navigate = useNavigate()

  const fetchOmbdMoviesByName = async (getMoreResults?: boolean) => {
      setTimeout(async () => {
        try {
          const res = await searchMoviesService.search({
            name: state.name,
            pageNumber: actualPage
          })
          if(res.totalResults > (movies.length)) {
            setHasMoreResults(true)
            setActualPage(actualPage + 1)
          } else {
            setHasMoreResults(false)
          }
          const moviesData = res.Search.map(movie => {
            return {
              title: movie.Title,
              year: movie.Year,
              id: movie.imdbID,
              type: movie.Type,
              poster: movie.Poster
            }
          })
          if(getMoreResults) {
            console.log('(movies.concat(moviesData))', (movies.concat(moviesData)))
            setMovies(movies.concat(moviesData))
          } else {
            setMovies(moviesData)
          }
        } catch (e: any) {
          console.log(e.message)
          if(e.message === 'Muitos resultados encontrados') {
            toast.warn('Muitos resultados encontrados. Realize uma nova pesquisa')
          }
        }
      }, 1000)
  }

  useEffect(() => {
    fetchOmbdMoviesByName()
  }, [state])

  return (
    <>
      <Header handleClick={() => navigate('/')} />
      <S.Wrapper>
        <S.Total>
          <button onClick={() => navigate(-1)}>
            Voltar
          </button>
          <p>/</p>
          <h2>
          Resultados para: {state.name}
          </h2>
        </S.Total>
        <S.Results id="scrollableDiv">
          <InfiniteScroll
            dataLength={movies.length}
            next={() => fetchOmbdMoviesByName(true)}
            hasMore={hasMoreResults}
            loader={<S.LoadingMoreResults>{hasMoreResults ? 'Carregando...' : ''}</S.LoadingMoreResults>}
            endMessage={<S.LoadingMoreResults>{hasMoreResults ? '' : 'Sem dados para exibir'}</S.LoadingMoreResults>}
            scrollableTarget="scrollableDiv"
          >
            <S.RowResult>
              {movies.map(movie => (
                <MovieCard 
                  key={movie.id}
                  movie={movie}
                  onGetMoreInfo={() => navigate(`/detalhes/${movie.id}`)}
                />
              ))}
            </S.RowResult>
          </InfiniteScroll>
        </S.Results>
      </S.Wrapper>
    </>
  )
}

export default MoviesList