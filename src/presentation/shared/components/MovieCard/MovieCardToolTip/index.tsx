import React from 'react'

import MoviePlaceHolder from '../../../../assets/film-poster-placeholder.png'

import * as S from './styles'

type MovieCardToolTipProps = {
  movie: {
    id: string
    year: string
    title: string
    type: string
    poster: string
  }
  onClose(): void
  onGetMoreInfo(): void
}

const MovieCardToolTip = ({ movie, onClose, onGetMoreInfo }: MovieCardToolTipProps) => {
  return (
    <S.Wrapper
      onMouseLeave={() => onClose()}
    >
      <img 
        src={movie.poster === 'N/A' ? MoviePlaceHolder : movie.poster}
        alt={movie.title}
      />
      <S.Details>
        <S.Complement>
          <S.Title>
            {movie.title}
          </S.Title>
          <label>
            {movie.year}
          </label>
          <span>
            {movie.type}
          </span>
        </S.Complement>
        <S.MoreInfo onClick={onGetMoreInfo}>
          Saiba mais
        </S.MoreInfo>
      </S.Details>
    </S.Wrapper>
  )
}

export default MovieCardToolTip