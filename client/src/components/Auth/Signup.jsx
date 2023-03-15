import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Card,
	CardBody,
	Text,
	Spinner,
} from '@chakra-ui/react'

// include firebase auth, create and update, and firestore database
import { auth } from '../../services/firebase-config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from '../../services/firebase-config'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {
	const navigate = useNavigate() // redirect function from react router

	// references to html form inputs on the page
	const emailRef = useRef()
	const usernameRef = useRef()
	const passwordRef = useRef()

	// display error and loading states
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	// signup function to call when the user submits a form
	async function signup(email, password, username) {
		try {
			// create a user
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			// add the desired username to the user profile
			await updateProfile(userCredential.user, {
				displayName: username,
			})

			// set up basic data to store on users
			const newUserConfig = {
				health: 150,
				attack: 25,
				defense: 10,
				potions: 5,
			}

			// create a document in the database with the same ID as the user
			await setDoc(doc(db, 'users', userCredential.user.uid), newUserConfig)

			// navigate to the game route
			navigate('/game')
		} catch (error) {
			setError(`Uh-oh, that email is probably in use!`)
		}
	}
	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError('')
			setLoading(true)
			await signup(
				emailRef.current.value,
				passwordRef.current.value,
				usernameRef.current.value
			)
			// set error to '' if there isn't one
		} catch (error) {
			setError(`Uh-oh, ${error.message}`)
		}

		setLoading(false)
	}

	return (
		<Box mt={5} p={2} minWidth='70%' maxWidth='80%'>
			<Card p={1}>
				<CardBody>
					<Text fontSize='3xl' m={3}>
						{error ? `${error}` : 'Sign up here!'}
					</Text>

					<form onSubmit={handleSubmit}>
						<FormControl>
							<FormLabel>Email address</FormLabel>
							<Input type='email' ref={emailRef} />
							<FormHelperText>We'll never share your email.</FormHelperText>
						</FormControl>

						<FormControl>
							<FormLabel>Username</FormLabel>
							<Input type='text' ref={usernameRef} />
							<FormHelperText>Your unique username</FormHelperText>
						</FormControl>

						<FormControl>
							<FormLabel>Password</FormLabel>
							<Input type='password' ref={passwordRef} />
							<FormHelperText>Use a unique password :)</FormHelperText>
						</FormControl>

						<Button type='submit' disabled={loading} colorScheme='blue'>
							Submit!
						</Button>
						{loading && <Spinner />}
					</form>
				</CardBody>
			</Card>
		</Box>
	)
}
