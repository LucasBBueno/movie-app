import React from 'react'

import Logo from '../../../assets/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <img src={Logo} />
        <h1>
          MovieApp
        </h1>
      </S.Logo>
      <S.Search>
      </S.Search>
    </S.Wrapper>
  )
}

export default Header