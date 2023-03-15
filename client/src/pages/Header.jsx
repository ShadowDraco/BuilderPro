import React from 'react'

import { Flex, Box, CSSReset } from '@chakra-ui/react'
import ThemeToggler from '../components/ThemeToggler'

import { auth } from '../services/firebase-config'

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
			<Box>
				<a href='/'>Home</a>
			</Box>
			<Box>
				<a href='/authenticate'>Sign up!</a>
			</Box>
			<Box>
				<CSSReset />
				<ThemeToggler />
			</Box>
			<Box>{auth.currentUser.email}</Box>
		</Flex>
	)
}
