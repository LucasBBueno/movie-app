import React, { createContext, useState } from 'react'

type SearchMoviesType = {
  name: string
}

type SearchMoviesContextProps = {
  state: SearchMoviesType,
  setState: React.Dispatch<React.SetStateAction<SearchMoviesType>>
}

const DEFAULT_VALUE = {
  state: {
    name: ''
  },
  setState: () => {}
}

const SearchMoviesContext = createContext<SearchMoviesContextProps>(DEFAULT_VALUE)

const SearchMoviesContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <SearchMoviesContext.Provider value={{
      state,
      setState
    }}>
      {children}
    </SearchMoviesContext.Provider>
  )
}

export { SearchMoviesContextProvider }
export default SearchMoviesContext