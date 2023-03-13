import React from 'react'
import { useState } from 'react'
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

export default function Signup() {
  const [count, setCount] = useState(0)

  return (
    <Box mt={5} p={2}>
      <Card p={1}>
        <CardBody>
          <Text fontSize='3xl' m={3}>
            Sign up here!
          </Text>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type='text' />
            <FormHelperText>Your unique username</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
            <FormHelperText>Use a unique password :)</FormHelperText>
          </FormControl>
        </CardBody>
      </Card>
    </Box>
  )
}
