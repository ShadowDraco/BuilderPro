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

export default function EnterRoom(props) {
	const [loading, setLoading] = useState(false)

	const { setRoom } = useRoom()
	const roomRef = useRef()

	const handleSubmit = e => {
		e.preventDefault()

		setRoom(roomRef.current.value)
		roomRef.current.value = ''
	}

	return (
		<Box minWidth='full'>
			<Card p={1}>
				<CardBody>
					<form onSubmit={handleSubmit}>
						<Flex gap={4} justifyContent='center' alignItems='center'>
							<FormControl>
								<Flex justifyContent='center' alignItems='center'>
									<FormLabel minWidth={'fit-content'}>Room Name:</FormLabel>
									<Input type='text' ref={roomRef} />
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
