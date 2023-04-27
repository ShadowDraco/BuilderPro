import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'

export default function About() {
	return (
		<Container centerContent my={5}>
			<Box>
				<Text fontSize={'4xl'} textAlign={'center'} color={'highlight'}>
					Welcome to Explorer Pro BETA
					<Text fontSize={'sm'}>
						The game will be updated with new features and bug fixes!
					</Text>
				</Text>
				<Text fontSize={'2xl'} color={'wheat'} textAlign={'center'} mt={5}>
					Play
				</Text>
				<Text fontSize={'1xl'} color={'wheat'} textAlign={'center'} mt={2}>
					Gameplay consists of WASD controls, a few button clicks, and lots of
					fun to give the best gathering and exploring experience!
					<br></br>
					The game is optimized for *mobile* and can also be played on the
					phone!
					<br></br>
					<br></br>- Gather resources and create the best world!
				</Text>
				<Text fontSize={'2xl'} color={'Highlight'} textAlign={'center'} mt={5}>
					Chat
				</Text>
				<Text fontSize={'1xl'} color={'Highlight'} textAlign={'center'} mt={2}>
					Using the built in chat features you can talk in real time with anyone
					who joins the same room as you!
					<br></br>
					Your messages are stored securely so you can continue where you left
					off in the future!
				</Text>
				<Text
					fontSize={'2xl'}
					color={'rebeccapurple'}
					textAlign={'center'}
					mt={5}
				>
					Refresh
				</Text>
				<Text
					fontSize={'1xl'}
					color={'rebeccapurple'}
					textAlign={'center'}
					mt={2}
				>
					The game world is randomly generated with tons of interaction, make it
					your own every time!
				</Text>
			</Box>
		</Container>
	)
}
