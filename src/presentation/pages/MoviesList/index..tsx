import React, { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import Movie from '../../../domain/entities/movie-model'
import MovieCard from '../../shared/components/MovieCard'

import * as S from './styles'

const moviesMock = [
  {
    title: "The Lego Movie",
    year: "2014",
    id: "tt1490017",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
  },
  {
    title: "The Simpsons Movie",
    year: "2007",
    id: "tt0462538",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTgxMDczMTA5N15BMl5BanBnXkFtZTcwMzk1MzMzMw@@._V1_SX300.jpg"
  },
  {
    title: "Scary Movie",
    year: "2000",
    id: "tt0175142",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    title: "El Camino: A Breaking Bad Movie",
    year: "2019",
    id: "tt9243946",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BNjk4MzVlM2UtZGM0ZC00M2M1LThkMWEtZjUyN2U2ZTc0NmM5XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_SX300.jpg"
  },
  {
    title: "Scary Movie 2",
    year: "2001",
    id: "tt0257106",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMzQxYjU1OTUtYjRiOC00NDg2LWI4MWUtZGU5YzdkYTcwNTBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    title: "Bee Movie",
    year: "2007",
    id: "tt0389790",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMjE1MDYxOTA4MF5BMl5BanBnXkFtZTcwMDE0MDUzMw@@._V1_SX300.jpg"
  },
  {
    title: "Scary Movie 3",
    year: "2003",
    id: "tt0306047",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
  },
  {
    title: "The Lego Batman Movie",
    year: "2017",
    id: "tt4116284",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
  },
  {
    title: "Scary Movie 4",
    year: "2006",
    id: "tt0362120",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
    title: "Epic Movie",
    year: "2007",
    id: "tt0799949",
    type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTA3NDM5ODU3NzleQTJeQWpwZ15BbWU3MDgyMjgyNDE@._V1_SX300.jpg"
  }
]

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([])

  const navigate = useNavigate()

  useEffect(() => {
    //busca pelo contexto pesquisado
    setMovies(moviesMock)
  }, [])

  return (
    <S.Wrapper>
      <S.Total>
        <h2>
        Resultados para: A
        </h2>
      </S.Total>
      <S.Results>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            movie={movie}
            onGetMoreInfo={() => navigate('/detalhes')}
          />
        ))}
      </S.Results>
    </S.Wrapper>
  )
}

export default MoviesList