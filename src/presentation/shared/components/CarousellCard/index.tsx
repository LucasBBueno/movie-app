import React from 'react'

import * as S from './styles'

type CarouselCardProps = {
  movie: {
    id: string
    title: string
    poster: string
  }
}

const CarouselCard = ({ movie }: CarouselCardProps) => {
  const handleViewMovieDetail = (movieId: string) => {
    console.log('handleViewMovieDetail', movieId)
  }

  return (
    <S.Wrapper onClick={() => handleViewMovieDetail(movie.id)}>
      <img 
        src={movie.poster}
        alt={movie.title}
      />
    </S.Wrapper>
  )
}

export default CarouselCard