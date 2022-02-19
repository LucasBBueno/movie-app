import React from 'react'

import { useNavigate} from 'react-router-dom'

import SearchArea from '../../shared/components/SearchArea'
import Carousel from '../../shared/components/Carousel'

import * as S from './styles'

const Home = () => {
  const navigate = useNavigate()

  return (
    <S.Wrapper>
      <S.Content>
        <S.Search>
          <SearchArea onSearch={() => navigate('/listagem')}/>
        </S.Search>
        <Carousel/>
      </S.Content>
    </S.Wrapper>
  )
}

export default Home