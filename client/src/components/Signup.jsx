import React, { useRef, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
} from '@chakra-ui/react'

import { useAuth } from '../services/firebase/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const { signup } = useAuth() // use signup hook0

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('signing up')
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      // set error to '' if there isn't one
    } catch (error) {
      setError('Uh-oh, something went wrong')
    }

    setLoading(false)
  }

  return (
    <Box mt={5} p={2}>
      <Card p={1}>
        <CardBody>
          <Text fontSize='3xl' m={3}>
            Sign up here!
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

            {error && <FormErrorMessage> {error}</FormErrorMessage>}

            <Button type='submit' disabled={loading} colorScheme='blue'>
              Submit!
            </Button>
          </form>
        </CardBody>
      </Card>
    </Box>
  )
}
