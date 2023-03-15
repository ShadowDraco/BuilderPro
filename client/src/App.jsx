import './App.css'

import { useState, useContext } from 'react'
import { Container } from '@chakra-ui/react'

import Header from './pages/Header'
import Home from './pages/Home'
import Signup from './components/Signup'
import NoPage from './pages/NoPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Container centerContent maxWidth='full' className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/authenticate' element={<Signup />} />
					{/*<Route path='/game' element={<Game />} />*/}
					{/*<Route path='/about' element={<About />} />*/}
					{/*<Route path='contact' element={<Contact />} />*/}
					<Route path='*' element={<NoPage />} />
				</Routes>
				{/* Footer */}
			</BrowserRouter>
		</Container>
	)
}

export default App
