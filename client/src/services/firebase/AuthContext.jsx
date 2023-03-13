import React, { useContext, useState, useEffect } from 'react'
// create a context
const AuthContext = React.createContext()

import { auth } from '../firebase'

// provide a hook to update the authentication context
export function useAuth() {
  return useContext(AuthContext)
}

// provide a wrapper to put the context in
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  // signup function to call when the user submits a form
  function signup(email, password) {
    console.log('sign up received')
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    // on component mount
    // when the authentication state changes update the user
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    // on component unmount
    return unsubscribe
  }, [])

  // value of the provider
  const value = {
    currentUser,
    signup,
  }

  // return the provider when the
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <h1>Loading</h1>}
    </AuthContext.Provider>
  )
}
