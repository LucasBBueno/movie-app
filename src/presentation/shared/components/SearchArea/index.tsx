import React, { useState, useContext } from 'react'

import SearchMoviesContext from '../../../contexts/search-movies'

import * as S from './styles'

type SearchAreaProps = {
  onSearch(): void
}

const SearchArea = ({
  onSearch
}: SearchAreaProps) => {
  const [searchName, setSearchName] = useState('')

  const { state, setState } = useContext(SearchMoviesContext)

  const handleSearchMovies = (searchName: string) => {
    setState({
      ...state,
      name: searchName
    })
    onSearch()
  }

  const cannotSearchMovies = (): boolean => {
    console.log("searchName === '' || searchName.length < 3", searchName === '' || searchName.length < 3)
    return searchName === '' || searchName.length < 3
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
          onKeyPress={(e) => e.key === 'Enter' && !cannotSearchMovies() ? handleSearchMovies(searchName) : null}
        />
        <S.SearchButton 
          onClick={() => handleSearchMovies(searchName)}
          disabled={cannotSearchMovies()}
        >
          Buscar
        </S.SearchButton>
      </S.InputBox>
    </S.Wrapper>
  )
}

export default SearchArea