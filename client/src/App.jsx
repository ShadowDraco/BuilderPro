import { useState } from 'react'
import { Container } from '@chakra-ui/react'
import './App.css'
import Signup from './components/Signup'

function App() {
	/*
    State
  */

	return (
		<Container centerContent maxWidth='full' className='App'>
			<Signup />
		</Container>
	)
}

export default App
