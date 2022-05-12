import React from 'react'

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>Profile</div>
  )
}

export default Profile