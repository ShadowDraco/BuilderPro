import React from 'react'

import { Box, Container, Text, Link } from '@chakra-ui/react'

import nature1 from '/nature1.png'

export default function Home() {
	return (
		<Container
			centerContent
			my={5}
			height={600}
			width={500}
			backgroundImage={nature1}
		>
			<Box background={'blackAlpha.500'} mt={20}>
				<Text fontSize={'4xl'} mt={5} textAlign={'center'} color={'highlight'}>
					Welcome to Explorer Pro
				</Text>
				<Text fontSize={'2xl'} color={'wheat'} textAlign={'center'} mt={5}>
					<Link href='/login' color='white'>
						Log in
					</Link>{' '}
					and enjoy a game where you explore a randomly generated world!
				</Text>
			</Box>
		</Container>
	)
}
