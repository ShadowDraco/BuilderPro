import React, { useState, useContext, createContext, useEffect } from 'react'

import {
	orderBy,
	query,
	addDoc,
	collection,
	onSnapshot,
	serverTimestamp,
	where,
} from 'firebase/firestore'
import { db } from '../../../services/firebase-config'

const ChatContext = createContext()

export function useRoom() {
	return useContext(ChatContext)
}

export function ChatProvider({ children }) {
	const messagesRef = collection(db, 'messages')

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

	// on refresh and state update, grab a 'snapshot' of the database messages
	useEffect(() => {
		try {
			if (roomName) {
				const messagesQuery = query(
					messagesRef,
					where('roomName', '==', roomName),
					orderBy('time')
				)

				// then append a message to the room
				const unsubscribe = onSnapshot(messagesQuery, snapshot => {
					let newMessages = []
					snapshot.forEach(doc => {
						newMessages.push({ ...doc.data(), id: doc.id })
					})
					setMessages(newMessages)
				})

				return () => unsubscribe()
			}
		} catch (error) {
			console.log(error.message, error)
		}
	}, [roomName])

	async function sendMessage(from, message) {
		try {
			setMessages([
				...messages,
				{ from: from, message: message, time: serverTimestamp() },
			])
			await addDoc(messagesRef, {
				from: from,
				message: message,
				roomName: roomName,
				time: serverTimestamp(),
			})
		} catch (error) {
			console.log(error.message, error)
		}
	}

	return (
		<ChatContext.Provider
			value={{ roomName, setRoom, leaveRoom, inRoom, messages, sendMessage }}
		>
			{children}
		</ChatContext.Provider>
	)
}
