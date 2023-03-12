import React from 'react'
import { useState } from 'react'
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	FormHelperText,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
} from '@chakra-ui/react'

export default function Signup() {
	const [count, setCount] = useState(0)

	return (
		<Box>
			<Card>
				<CardBody>
					<h2>Sign up here!</h2>

					<FormControl>
						<FormLabel>Email address</FormLabel>
						<Input type='email' />
						<FormHelperText>We'll never share your email.</FormHelperText>
					</FormControl>
				</CardBody>
			</Card>
		</Box>
	)
}
