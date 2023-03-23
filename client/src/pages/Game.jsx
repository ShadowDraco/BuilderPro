import React, { useEffect, useState } from 'react'

import { Flex, Container, Link } from '@chakra-ui/react'

import ChatManager from '../components/Game/Chat/ChatManager'
import { usePhaserGame, PhaserConfig } from '../game/phaser/GameConfig'

export default function Game(props) {
	const PhaserGame = usePhaserGame(PhaserConfig)

	const [loading, setLoading] = useState(false)

	return (
		<Container my={5} centerContent className='Game' minWidth={'full'}>
			{props.user ? (
				<>
					<Flex
						m={5}
						width={'fit'}
						alignItems={'center'}
						justifyContent={'center'}
						outline='double'
						outlineColor='blue'
						id='phaser-target'
					></Flex>

					<ChatManager user={props.user} />
				</>
			) : (
				<Link href='/login'>You need to Log in to play the game!</Link>
			)}
		</Container>
	)
}
