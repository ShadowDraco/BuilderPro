import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import ChatBox from './ChatBox'
import SendChat from './SendChat'
import EnterRoom from './EnterRoom'

import { useRoom } from './ChatContext'

export default function ChatManager() {
	const { inRoom } = useRoom()

	return (
		<Container minWidth='80%'>
			{inRoom ? (
				<Flex direction={'column'}>
					<ChatBox /> <SendChat />
				</Flex>
			) : (
				<EnterRoom />
			)}
		</Container>
	)
}
