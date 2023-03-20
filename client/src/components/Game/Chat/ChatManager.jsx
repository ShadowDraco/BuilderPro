import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import ChatBox from './ChatBox'
import SendChat from './SendChat'
import EnterRoom from './EnterRoom'

import { useRoom } from './ChatContext'

export default function ChatManager(props) {
	const { inRoom } = useRoom()

	return (
		<Container minWidth='80%'>
			{inRoom ? (
				<Flex direction={'column'}>
					<ChatBox user={props.user} /> <SendChat user={props.user} />
				</Flex>
			) : (
				<EnterRoom />
			)}
		</Container>
	)
}
