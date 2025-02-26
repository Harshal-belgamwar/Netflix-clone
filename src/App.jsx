

import './App.css'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Player from './pages/Player'
import SearchPage from './pages/SearchPage'
import About from './pages/About'

function App() {
  

  return (
    
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/player/:id" element={<Player/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      
      
      
      
     
    
  )
}

export default App
