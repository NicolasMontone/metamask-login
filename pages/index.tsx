import React, { useCallback } from 'react'

import { useMoralis } from 'react-moralis'

import { Head } from '../components/Head'
import { LoginScreen } from '../components/LoginScreen'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <LoginScreen />

  const handleLogOut = useCallback(() => {
    logout()
  }, [logout])
  return (
    <div className="h-screen">
      <Head />
      <h1>welcome!</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}
