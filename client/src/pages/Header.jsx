import React from 'react'

import { Flex, Box, CSSReset, Link, Button, Text } from '@chakra-ui/react'
import ThemeToggler from '../components/ThemeToggler'

import Logout from '../components/Auth/Logout'

export default function Header(props) {
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
			<Box>
				<CSSReset />
				<ThemeToggler />
			</Box>

			<Flex gap={3} alignItems='center' justifyContent='space-between'>
				<Button>
					<Link href='/'>Home</Link>
				</Button>
				{props.user && (
					<Button>
						<Link href='/game'>Game</Link>
					</Button>
				)}
			</Flex>

			{props.user ? (
				<Flex gap={4} alignItems='center' justifyContent='center'>
					<Box>
						<Text>{props.user.displayName}</Text>
					</Box>
					<Box>
						<Logout />
					</Box>
				</Flex>
			) : (
				<Flex gap={3} alignItems='center' justifyContent='center'>
					<Box>
						<Button>
							<Link href='/login'>Log in!</Link>
						</Button>
					</Box>
					<Box>
						<Button>
							<Link href='/signup'>Sign up!</Link>
						</Button>
					</Box>
				</Flex>
			)}
		</Flex>
	)
}
