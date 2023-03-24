import React from 'react'
import UserAvatarCircle from './user-avatar-circle.js'
import '../css/left-side-body-tab-user.css'

function LeftSideBodyTabUser(user) {
  return (
    <div className='left-side-tabs'>
        <UserAvatarCircle />
        <p>{user.name}</p>
    </div>
  )
}

export default LeftSideBodyTabUser