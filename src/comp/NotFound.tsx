import { Link } from 'react-router-dom';
import React from 'react'

const NotFound = () => {
  return (
      <div className='flex flex-col gap-2'>
          404 not found
      <Link to="/">Home</Link>
    </div>
  )
}

export default NotFound
