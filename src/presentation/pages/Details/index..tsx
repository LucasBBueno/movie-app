import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import ResumeCard from '../../shared/components/Details/ResumeCard'
import Actors from '../../shared/components/Details/Actors'
import { RemoteLoadOmdbMovieDetails } from '../../../service/usecases/load-ombd-movie-details/remote-load-omdb-movie-details'
import { LoadOmbdMovieDetails } from '../../../domain/usecases/load-ombd-movie-details'
import Header from '../../shared/components/Header'

import PhotoPlaceholder from '../../assets/photo-placeholder.png'

import * as S from './styles'

const Details = () => {
  const [movieDetails, setMovieDetails] = useState<LoadOmbdMovieDetails.Model>()
  const navigate = useNavigate()


  const params = useParams()

  const loadMovieDetailService = new RemoteLoadOmdbMovieDetails()

  const fetchOmbMovieDetails = async () => {
    try {
      const movieId = params.id
      if(movieId) {
        const res = await loadMovieDetailService.load({
          movieId
        })
        setMovieDetails(res)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchOmbMovieDetails()
  }, [])

  return (
    <>
      <Header handleClick={() => navigate('/')} />
      <S.Wrapper>
        <S.Navigation>
          <button onClick={() => navigate(-1)}>
            Voltar
          </button>
          <p>/</p>
          <p>{movieDetails?.Title ?? ''}</p>
        </S.Navigation>
        {movieDetails && (
          <S.Content>
            <ResumeCard
              resume={{
                title: movieDetails.Title,
                description: movieDetails.Plot,
                year: movieDetails.Year,
                genres: movieDetails.Genre.split(','),
                poster: movieDetails.Poster,
                imdbrating: movieDetails.imdbRating,
                director: movieDetails.Director,
                released: movieDetails.Released,
                duration: movieDetails.Runtime
              }}
            />
            <Actors
              actors={movieDetails.Actors.split(',').map(actor => {
                return {
                  name: actor,
                  image: PhotoPlaceholder
                }
              })}
            />
          </S.Content>
        )}
      </S.Wrapper>
    </>
  )
}

export default Details