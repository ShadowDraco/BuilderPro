import React from 'react'

import { Container, Flex } from '@chakra-ui/react'

import ChatBox from './ChatBox'
import SendChat from './SendChat'
import EnterRoom from './EnterRoom'

import { useRoom } from './ChatContext'

export default function ChatManager(props) {
	const { inRoom } = useRoom()

	return (
		<Container maxWidth='70%'>
			<small>
				Please note: Press the send button manually due to the way that Unity
				handles keyboard input.
			</small>
			{inRoom ? (
				<Flex direction={'column'}>
					<ChatBox user={props.user} />
					<SendChat user={props.user} discoverChatRef={props.discoverChatRef} />
				</Flex>
			) : (
				<EnterRoom />
			)}
		</Container>
	)
}
