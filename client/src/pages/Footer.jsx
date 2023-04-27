import React, { useContext } from 'react'

import { Box, Button, Flex, Link } from '@chakra-ui/react'

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
			<Box>This is ExplorerPro</Box>
			<Box>
				<Link
					color={'Highlight'}
					href='https://github.com/shadowdraco'
					target='blank'
				>
					Built by ShadowDraco
				</Link>
			</Box>
			<Box>The Farming/Gathering Game</Box>
			<Box></Box>

			{roomName ? (
				<>
					<Box> Chat Room: {roomName}</Box>
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
