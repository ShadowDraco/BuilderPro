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

import { auth } from '../../services/firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Signup() {
  const navigate = useNavigate()

  const emailRef = useRef()
  const passwordRef = useRef()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // login function to call when the user submits a form
  async function login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      navigate('/game')
    } catch (error) {
      setError(`Uh-oh, that email and password may be incorrect!`)
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
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
            {error ? `${error}` : 'Login here!'}
          </Text>

          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type='email' ref={emailRef} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type='password' ref={passwordRef} />
              <FormHelperText>Your unique password :)</FormHelperText>
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
