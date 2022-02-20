import React from 'react';

import { ToastContainer } from 'react-toastify'

import MoviesRouter from './main/routes/movies-routes';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <MoviesRouter />
      <ToastContainer />
    </>
  )
}

export default App;
