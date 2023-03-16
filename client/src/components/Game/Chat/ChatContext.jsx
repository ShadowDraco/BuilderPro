import React, { useState, useContext, createContext } from 'react'

const ChatContext = createContext()

export function useRoom() {
	return useContext(ChatContext)
}

export function ChatProvider({ children }) {
	const [roomName, setRoomName] = useState('')
	const [inRoom, setInRoom] = useState(false)
	const [messages, setMessages] = useState([])

	function setRoom(roomName) {
		setInRoom(true)
		setRoomName(roomName)
	}

	function leaveRoom() {
		setInRoom(false)
		setRoomName('')
	}

	function sendMessage(message) {
		setMessages([...messages, message])
	}

	return (
		<ChatContext.Provider
			value={{ roomName, setRoom, leaveRoom, inRoom, messages, sendMessage }}
		>
			{children}
		</ChatContext.Provider>
	)
}
