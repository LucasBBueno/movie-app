import React from 'react'

import * as S from './styles'

type ResumeCardProps = {
  resume: {
    title: string,
    description: string,
    genres: string[],
    imdbrating: string
    director: string
    released: string
    duration: string
    poster: string
  }
}

const ResumeCard = ({ resume }: ResumeCardProps) => {
  return (
    <S.Wrapper>
      <S.Image 
        src={resume.poster}
        alt={resume.title}
      />
      <S.Content>
        <S.Header>
          <S.Title>
            {resume.title}
          </S.Title>
          <S.Rating>
            {resume.imdbrating}
          </S.Rating>
        </S.Header>
        <S.Plot>
          <label>
            Plot
          </label>
          <p>
            {resume.description}
          </p>
        </S.Plot>
        <S.Genres>
          <label>
            Genres
          </label>
          <ul>
            {resume.genres.map((genre, idx) => (
              <li key={idx}>
                {genre}
              </li>
            ))}
          </ul>
        </S.Genres>
        <S.Director>
          <label>
            Director
          </label>
          <p>
            {resume.director}
          </p>
        </S.Director>
        <S.Footer>
          <section>
            <label>
              Release date:
            </label>
            <p>
              {resume.released}
            </p>
          </section>
          <section>
            <label>
              Duration:
            </label>
            <p>
              {resume.duration}
            </p>
          </section>
        </S.Footer>
      </S.Content>
    </S.Wrapper>
  )
}

export default ResumeCard