import React, { useState } from 'react'

import * as S from './styles'

type SearchAreaProps = {
  onSearch(): void
}

const SearchArea = ({
  onSearch
}: SearchAreaProps) => {
  const [searchName, setSearchName] = useState('')

  const handleSearchMovies = (search: string) => {
    console.log('Faz a busca')
    onSearch()
  }

  return (
    <S.Wrapper>
      <S.Title>
        Encontre os melhores filmes, no MovieApp
      </S.Title>
      <S.InputBox>
        <input 
          placeholder="Procure seu filme" 
          onChange={(e) => setSearchName(e.target.value)} 
        />
        <button onClick={() => handleSearchMovies(searchName)}>
          Buscar
        </button>
      </S.InputBox>
    </S.Wrapper>
  )
}

export default SearchArea