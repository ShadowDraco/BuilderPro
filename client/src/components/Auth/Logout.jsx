import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, Box } from '@chakra-ui/react'

import { auth } from '../../services/firebase-config'
import { signOut } from 'firebase/auth'

export default function Logout() {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // signup function to call when the user submits a form
  async function logout() {
    try {
      setLoading(true)
      await signOut(auth)
      navigate('/')
    } catch (error) {
      setError(`Uh-oh, ${error}`)
    }
    setLoading(false)
  }

  return (
    <Box>
      <Button onClick={logout} disabled={loading}>
        {error ? error : 'Log out'}
      </Button>
    </Box>
  )
}
