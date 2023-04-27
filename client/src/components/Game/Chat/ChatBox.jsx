import React from 'react'

import { useRoom } from './ChatContext'
import { Flex, Text } from '@chakra-ui/react'

export default function ChatBox(props) {
	const { messages } = useRoom()

	return (
		<Flex
			direction={'column'}
			p={4}
			my={2}
			outline={'solid'}
			outlineColor={'blue.700'}
			maxH={150}
			overflowY={'scroll'}
		>
			{messages &&
				messages.map((message, i) => {
					return (
						<Text
							key={i}
							textAlign={
								props.user.displayName === message.from ? 'left' : 'right'
							}
							height={'5'}
							maxHeight={'5'}
						>
							{message.from}: {message.message}
						</Text>
					)
				})}
		</Flex>
	)
}
