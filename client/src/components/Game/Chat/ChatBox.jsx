import React from 'react'

import { useRoom } from './ChatContext'
import { Flex, Text } from '@chakra-ui/react'

export default function ChatBox(props) {
	const { messages } = useRoom()

	return (
		<Flex
			direction={'column'}
			p={4}
			outline={'solid'}
			outlineColor={'blue.700'}
		>
			{messages &&
				messages.map((message, i) => {
					return (
						<Text
							key={i}
							textAlign={
								props.user.displayName === message.from ? 'left' : 'right'
							}
						>
							{message.from}: {message.message}
						</Text>
					)
				})}
		</Flex>
	)
}
