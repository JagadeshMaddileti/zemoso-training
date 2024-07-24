import React, { useState} from 'react'

const State = () => {
    const [user ,setUser]=useState({name:"user"})

    const handleCick=()=>{
        const updatedUser={name:"updated user"}
        setUser(updatedUser)
    }

  return (
    <>
    <button onClick={handleCick}>Click</button>
    <p>{user.name}</p>
    </>
  )
}

export default State;