import React, { useEffect, useRef, useState } from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { Flex, Box } from '@chakra-ui/react'

import ChatManager from '../components/Game/Chat/ChatManager'
import GameVersion from '../components/Game/GameDetails/GameVersion'

export default function Game(props) {
	const unityRef = useRef(null)
	const chatRef = useRef(null)

	const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
		loaderUrl: '/assets/HTMLBuild.loader.js',
		dataUrl: '/assets/HTMLBuild.data.unityweb',
		frameworkUrl: '/assets/HTMLBuild.framework.js.unityweb',
		codeUrl: '/assets/HTMLBuild.wasm.unityweb',
	})

	const loadingPercentage = Math.round(loadingProgression * 100)

	const handleTyping = key => {
		if (key == 'Backspace') {
			chatRef.current.value = chatRef.current.value.slice(0, -1)
			return
		} else if (key == 'Enter') {
			return
		} else if (key == 'Tab') {
			return
		} else {
			chatRef.current.value += key
		}
	}

	const handleKeyDown = event => {
		// If the Unity canvas has focus, just handle the events manually
		if (event.target.type === 'text' || event.target.type === 'button') {
			!chatRef.current && discoverChatRef
			handleTyping(event.key)
		}
	}

	const discoverChatRef = () => {
		if (!chatRef.current) {
			chatRef.current = document.querySelector('input[type="text"]')
		}
	}

	const focusChatRef = e => {
		chatRef.current.focus()
		console.log(chatRef.current)
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		// because unity steals focus even when told not to, force ref to have the right identity
		discoverChatRef()
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [])

	return (
		<Flex
			className='game-container'
			alignItems='center'
			justifyContent='center'
			direction={'column'}
		>
			{props.user ? (
				<>
					{isLoaded === false && (
						// We'll conditionally render the loading overlay if the Unity
						// Application is not loaded.
						<Box className='loading-overlay'>
							<p
								style={{
									margin: 5,
									fontSize: 'x-large',
									fontFamily:
										'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif',
								}}
							>
								Loading... ({loadingPercentage}%)
							</p>
						</Box>
					)}
					{
						<Unity
							ref={unityRef}
							unityProvider={unityProvider}
							tabIndex={2}
							id='unity'
							style={{
								width: 950,
								height: 600,
								margin: '2em',
								border: '5px black double',
							}}
						/>
					}
					<Flex width='full'>
						<ChatManager
							user={props.user}
							ref={chatRef}
							onClick={focusChatRef}
						/>

						<GameVersion />
					</Flex>
				</>
			) : (
				<Link href='/login'>You need to Log in to play the game!</Link>
			)}
		</Flex>

		/*<Container my={5} centerContent className='Game' minWidth={'full'}>
			
		</Container>*/
	)
}
