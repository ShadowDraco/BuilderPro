import React, { useState, useRef } from 'react'

import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Button,
	Flex,
	Card,
	CardBody,
} from '@chakra-ui/react'

import { useRoom } from './ChatContext'

export default function SendChat() {
	const [loading, setLoading] = useState(false)

	const { sendMessage } = useRoom()

	const messageRef = useRef()

	const handleSubmit = e => {
		e.preventDefault()

		sendMessage(messageRef.current.value)
		messageRef.current.value = ''
	}

	return (
		<Box minWidth='full'>
			<Card p={1}>
				<CardBody>
					<form onSubmit={handleSubmit}>
						<Flex gap={4} justifyContent='center' alignItems='center'>
							<FormControl>
								<Flex justifyContent='center' alignItems='center'>
									<FormLabel minWidth={'fit-content'}>Message:</FormLabel>
									<Input type='text' ref={messageRef} />
								</Flex>
							</FormControl>

							<Button type='submit' disabled={loading} colorScheme='blue'>
								Send!
							</Button>
						</Flex>
					</form>
				</CardBody>
			</Card>
		</Box>
	)
}
