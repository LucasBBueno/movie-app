import React from 'react'

import * as S from './styles'

type CarouselCardProps = {
  movie: {
    id: string
    title: string
    poster: string
  }
  onClick(): void
}

const CarouselCard = ({ movie, onClick }: CarouselCardProps) => {
  return (
    <S.Wrapper onClick={() => onClick()}>
      <img 
        src={movie.poster}
        alt={movie.title}
      />
    </S.Wrapper>
  )
}

export default CarouselCard