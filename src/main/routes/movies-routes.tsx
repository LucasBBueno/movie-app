import React, { useEffect } from 'react'

import { BrowserRouter, BrowserRouterProps, useLocation, Routes, Route } from 'react-router-dom'

import Home from '../../presentation/pages/Home'
import MoviesList from '../../presentation/pages/MoviesList/index.'
import Details from '../../presentation/pages/Details/index.'
import Header from '../../presentation/shared/components/Header'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MoviesRouter = (props: BrowserRouterProps) => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listagem" element={<MoviesList />}/>
        <Route path="/detalhes/" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MoviesRouter