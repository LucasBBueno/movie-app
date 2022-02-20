import React from 'react'

import { SearchMoviesContextProvider } from './search-movies'

const GlobalContext: React.FC = ({ children }) => {
  return <SearchMoviesContextProvider>{children}</SearchMoviesContextProvider>
}

export default GlobalContext