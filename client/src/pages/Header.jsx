import React from 'react'

import { Flex, Box, CSSReset } from '@chakra-ui/react'
import ThemeToggler from '../components/ThemeToggler'

export default function Header() {
  return (
    <Flex
      mt={1}
      gap={2}
      alignItems='center'
      justifyContent='center'
      minWidth='full'
      outline='double'
      outlineColor='blue.300'
    >
      <Box>Header</Box>
      <Box>
        <CSSReset />
        <ThemeToggler />
      </Box>
    </Flex>
  )
}
