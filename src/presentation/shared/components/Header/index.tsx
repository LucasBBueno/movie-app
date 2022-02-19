import React from 'react'

import Logo from '../../../assets/movie-logo.svg'
import SearchIcon from '../../../assets/search.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <img src={Logo} alt="Logo"/>
        <span>
          MovieApp
        </span>
      </S.Logo>
      <S.Search>
        <img src={SearchIcon} alt="Buscar"/>
      </S.Search>
    </S.Wrapper>
  )
}

export default Header