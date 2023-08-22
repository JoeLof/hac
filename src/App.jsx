import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link, Route, Routes} from 'react-router-dom'
import Catalogue from './components/Catalogue'
import MovieDetails from './components/MovieDetails'


function App() {

  return (


    <Routes>
      <Route path='/' element={<Catalogue />} />
      <Route path='/movie/:movieID' element={<MovieDetails />} />
    </Routes>
    

  )
}

export default App
