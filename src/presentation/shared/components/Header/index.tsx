import React from 'react'

import Logo from '../../../assets/movie-logo.svg'

import * as S from './styles'

type HeaderProps = {
  handleClick(): void
}

const Header = ({ handleClick }: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Logo onClick={handleClick}>
        <img src={Logo} alt="Logo"/>
        <span>
          MovieApp
        </span>
      </S.Logo>
    </S.Wrapper>
  )
}

export default Header