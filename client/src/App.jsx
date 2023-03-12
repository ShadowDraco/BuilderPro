import './App.css'

import { useState } from 'react'
import { Container } from '@chakra-ui/react'

import Home from './pages/Home'
import Signup from './components/Signup'
import NoPage from './pages/NoPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	/*
    State
  */

	// const [authenticatedUser, setAuthenticatedUser] = useState({})

	return (
		<Container centerContent maxWidth='full' className='App'>
			<BrowserRouter>
				{/* Header */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/authenticate' element={<Signup />} />
					{/*<Route path='/about' element={<Blogs />} />*/}
					{/*<Route path='contact' element={<Contact />} />*/}
					<Route path='*' element={<NoPage />} />
				</Routes>
				{/* Footer */}
			</BrowserRouter>
		</Container>
	)
}

export default App
