import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [anime, setAnime] = useState([])

  // useEffect(()=>{},[])
  useEffect(()=> {
    axios.get('api/anime')
      .then(response => {
        setAnime(response.data)
      })
      .catch(error => {
        console.error('Error fetching anime data:', error)
      })
  }, [])

  return (
    <>
    <h1>frontend backend connection</h1>
    <h2>anime count: {anime.length}</h2>
    {
      anime.map((anime, index) => {
        return (
          <div key={index}>
            <h3>{anime.title}</h3>
            <p>{anime.status}</p>
          </div>
        )
      })
    }

    
    </>
  )
}

export default App
