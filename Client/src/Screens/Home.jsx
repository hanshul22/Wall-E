import React from 'react'
import { useUser } from '../Context/User.context'

function Home() {

  const {user} = useUser()

  return (
    <div>{user ? JSON.stringify(user) : <p>Home</p>}</div>
  )
}

export default Home