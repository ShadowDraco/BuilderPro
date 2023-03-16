import React, { useContext } from 'react'

import { Box, Button, Flex } from '@chakra-ui/react'

import { useRoom } from '../components/Game/Chat/ChatContext'

export default function Footer() {
	const { roomName, leaveRoom } = useRoom()

	return (
		<Flex
			mt={1}
			p={2}
			gap={6}
			alignItems='center'
			justifyContent='space-between'
			minWidth='full'
			outline='double'
			outlineColor='blue.300'
		>
			<Box>Hello</Box>
			<Box>Im</Box>
			<Box>Footer</Box>

			{roomName ? (
				<>
					<Box> Party: {roomName}</Box>
					<Button colorScheme='blue' onClick={leaveRoom}>
						Leave room
					</Button>
				</>
			) : (
				''
			)}
		</Flex>
	)
}
