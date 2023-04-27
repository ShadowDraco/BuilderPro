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

			<Flex gap={8} alignItems='center' justifyContent='space-between'>
				<Link href='/'>
					<Button>Home</Button>
				</Link>
				{props.user && (
					<Button>
						<Link href='/game'>Game</Link>
					</Button>
				)}
				<Link href='/about'>
					<Button>About</Button>
				</Link>
				<Link href='/contact'>
					<Button>Contact</Button>
				</Link>
			</Flex>

			{props.user ? (
				<Flex gap={5} alignItems='center' justifyContent='center'>
					<Box>
						<Text fontFamily={'monospace'} fontSize={'2xl'}>
							{props.user.displayName}
						</Text>
					</Box>
					<Box>
						<Logout />
					</Box>
				</Flex>
			) : (
				<Flex
					gap={3}
					alignItems='center'
					justifyContent='center'
					background={'lightgoldenrodyellow'}
				>
					<Box>
						<Link href='/login' color={'black'}>
							<Button background={'Highlight'}>Log in!</Button>
						</Link>
					</Box>
					<Box>
						<Link href='/signup' color={'black'}>
							<Button background={'Highlight'}>Sign up!</Button>
						</Link>
					</Box>
				</Flex>
			)}
		</Flex>
	)
}
