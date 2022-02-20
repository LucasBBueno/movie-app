import React from 'react'

import { useNavigate} from 'react-router-dom'

import SearchArea from '../../shared/components/SearchArea'
import Carousel from '../../shared/components/Carousel'

import VideoBackground from '../../assets/avengers.mp4'

import * as S from './styles'
import Header from '../../shared/components/Header'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header handleClick={() => navigate('/')} />
      <S.Wrapper>
        <video id="background-video" autoPlay loop muted>
          <source src={VideoBackground} type="video/mp4" />
        </video>
        <S.Content>
          <S.Search>
            <SearchArea onSearch={() => navigate('/listagem')}/>
          </S.Search>
          <Carousel onNavigate={(movieId) => navigate(`/detalhes/${movieId}`)} />
        </S.Content>
      </S.Wrapper>
    </>
  )
}

export default Home