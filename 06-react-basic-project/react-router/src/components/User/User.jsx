import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div>
      <h2 className='bg-gray-600 text-white text-3xl p-4 font-bold' >User: {userid}</h2>
    </div>
  )
}

export default User
