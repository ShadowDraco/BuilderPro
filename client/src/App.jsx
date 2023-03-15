import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Container } from '@chakra-ui/react'

import Header from './pages/Header'
import Home from './pages/Home'
import Game from './pages/Game'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import NoPage from './pages/NoPage'

import { auth } from './services/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'

function App() {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  }, [user])

  return (
    <Container centerContent maxWidth='full' className='App'>
      <BrowserRouter>
        <Header user={user} />
        <Routes>
          <Route path='/' element={<Home user={user} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/game' element={<Game user={user} />} />
          {/*<Route path='/about' element={<About />} />*/}
          {/*<Route path='contact' element={<Contact />} />*/}
          <Route path='*' element={<NoPage user={user} />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </Container>
  )
}

export default App
