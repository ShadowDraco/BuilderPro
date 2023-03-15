import React from 'react'

import { Box, Container, Link } from '@chakra-ui/react'

export default function Game(props) {
  return (
    <Container my={5} centerContent>
      {props.user ? (
        <Box>Game for: {props.user.displayName}</Box>
      ) : (
        <Link href='/login'>You need to Log in to play the game!</Link>
      )}
    </Container>
  )
}
