import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes, Link} from 'react-router-dom'
import Navbar from './components/navbar'
import Landing from './pages/Landing'
import Anime from './pages/anime'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/anime' element={<Anime/>}/>

        </Routes>
    </>
  )
}

export default App
