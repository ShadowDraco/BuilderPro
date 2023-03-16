import React, { useState } from 'react'

import { Flex, Container, Link } from '@chakra-ui/react'

import { db } from '../services/firebase-config'
import { collection } from 'firebase/firestore'

import ChatManager from '../components/Game/Chat/ChatManager'

export default function Game(props) {
	const [loading, setLoading] = useState(false)

	return (
		<Container my={5} centerContent className='Game' minWidth={'full'}>
			{props.user ? (
				<ChatManager />
			) : (
				<Link href='/login'>You need to Log in to play the game!</Link>
			)}

			<Flex
				height={'30vh'}
				m={5}
				width={'full'}
				alignItems={'center'}
				justifyContent={'center'}
				outline='solid'
				outlineColor='gray'
			>
				spacer
			</Flex>
		</Container>
	)
}
