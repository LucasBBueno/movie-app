import React, { useState } from 'react'

import MoviePlaceHolder from '../../../assets/film-poster-placeholder.png'

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

  const handleShowToolTip = () => {
    setShowToolTip(true)

    setTimeout(() => {
      setShowToolTip(false)
    }, 8000)
  }

  return (
    <S.Wrapper>
      {showTooltip && (
        <MovieCardToolTip
          movie={movie}
          onClose={() => setShowToolTip(false)}
          onGetMoreInfo={onGetMoreInfo}
        />
      )}
      <S.Content>
        <img 
          src={movie.poster === 'N/A' ? MoviePlaceHolder : movie.poster}
          alt={movie.title}
          onMouseEnter={() => handleShowToolTip()}
          onClick={() => handleShowToolTip()}
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default MovieCard