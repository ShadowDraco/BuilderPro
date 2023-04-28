import React from 'react'
import { Container, Text, Link, Box } from '@chakra-ui/react'
import nature3 from '/nature3.png'
export default function Contact() {
	return (
		<Container centerContent my={5} backgroundImage={nature3} height={600}>
			<Box background={'blackAlpha.600'} mt={20}>
				<Text
					fontSize={'4xl'}
					textAlign={'center'}
					color={'highlight'}
					width='full'
				>
					Ethan Storm |&nbsp;
					<Link
						href='https://github.com/shadowdraco'
						target='blank'
						color='white'
						background={'gray'}
					>
						Github
					</Link>
				</Text>
				<Text fontSize={'1xl'} color={'wheat'} textAlign={'center'} mt={5}>
					The website was built using
				</Text>
				<Text color={'Highlight'} textAlign={'center'}>
					{' '}
					React, Firebase, and Chakra UI
				</Text>
				<br></br>
				<Text fontSize={'1xl'} color={'wheat'} textAlign={'center'} mt={5}>
					The game was created using Unity5 and embedded into the website using
					WebGL and React-Unity.
					<br></br>
					<br></br>
				</Text>
				<Text color={'Highlight'} textAlign={'center'}>
					I am a full stack developer with passion and drive looking to make a
					difference. My goal is to take my skills into ministry as soon as
					possible. <br></br> I can use my skills in any world, front end,
					backend, full stack, and even game development!
				</Text>
			</Box>
		</Container>
	)
}
