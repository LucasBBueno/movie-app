import React from 'react'

import { useNavigate } from 'react-router-dom'

import MovieDetail from '../../../domain/entities/movie-details-model'
import ResumeCard from '../../shared/components/Details/ResumeCard'
import Actors from '../../shared/components/Details/Actors'

import PhotoPlaceholder from '../../assets/photo-placeholder.png'

import * as S from './styles'

const resume =  {
  title: "Spider-Man: No Way Home",
  description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  year: "2014",
  type: "movie",
  genres: ['Action', 'Adventure', 'Fantasy'],
  poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
  imdbrating: "81",
  director: "John Watts",
  released: "17 Dec 2021",
  duration: "148 min"
}

const actors = [
  {
    name: 'Tom Holland',
    image: PhotoPlaceholder
  },
  {
    name: 'Zendaya',
    image: PhotoPlaceholder
  },
  {
    name: 'Jacob Batalon',
    image: PhotoPlaceholder
  }
]

const Details = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Navigation>
        <button onClick={() => navigate(-1)}>
          Results
        </button>
        <p>/</p>
        <p>{'Spider Man'}</p>
      </S.Navigation>
      <S.Content>
        <ResumeCard
          resume={resume}
        />
        <Actors
          actors={actors}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default Details