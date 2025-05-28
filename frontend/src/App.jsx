import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 2

  return (
    <>
      {movieNumber === 1 ? 
        <MovieCard movie={{title: "Nak's Film", release_date: "2024"}}></MovieCard> : 
        <MovieCard movie={{title: "Not Nak's Film", release_date: "2024"}}></MovieCard>
      }
    </>
  )
}

export default App
