import React from 'react'
import { Container, Text, Link } from '@chakra-ui/react'

export default function Contact() {
	return (
		<Container centerContent my={5}>
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
				<Text color={'Highlight'}> React, Firebase, and Chakra UI</Text>
				<br></br>
				The game was created using Unity5 and embedded into the website using
				WebGL and React-Unity.
				<br></br>
				<br></br>
				<Text color={'Highlight'}>
					I am a full stack developer with passion and drive looking to make a
					difference. My goal is to take my skills into ministry as soon as
					possible. <br></br> I can use my skills in any world, front end,
					backend, full stack, and even game development!
				</Text>
			</Text>
		</Container>
	)
}
