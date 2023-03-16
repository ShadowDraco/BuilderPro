import React from 'react'

import { useRoom } from './ChatContext'
import { Flex, Text } from '@chakra-ui/react'

export default function ChatBox() {
	const { messages } = useRoom()

	return (
		<Flex direction={'column'}>
			{messages &&
				messages.map((message, i) => {
					return <Text key={i}>{message}</Text>
				})}
		</Flex>
	)
}
