import React, { useState } from 'react'

import MovieCardToolTip from './MovieCardToolTip'

import * as S from './styles'

type MovieCardProps = {
  movie: {
    id: string
    year: string
    title: string
    type: string
    poster: string
  }
  onGetMoreInfo(): void
}

const MovieCard = ({
  movie,
  onGetMoreInfo
}: MovieCardProps) => {
  const [showTooltip, setShowToolTip] = useState(false)

  return (
    <S.Wrapper>
      <S.Content>
        <img 
          src={movie.poster}
          alt={movie.title}
          onMouseEnter={() => setShowToolTip(true)}
        />
      
      </S.Content>
      {showTooltip && (
        <MovieCardToolTip
          movie={movie}
          onClose={() => setShowToolTip(false)}
          onGetMoreInfo={onGetMoreInfo}
        />
      )}
    </S.Wrapper>
  )
}

export default MovieCard