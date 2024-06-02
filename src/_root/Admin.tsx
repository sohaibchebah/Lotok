import React from 'react'
import Nav from '@/comp/Nav'
import Profile from '@/_auth/forms/Profile'
const admin = () => {
  const isAdmin = true;

  return (
    <>
      {isAdmin ? <div>yes i'm admin show me </div> : <div>i'm no an admin</div>}
    </>
  )
  
}

export default admin
