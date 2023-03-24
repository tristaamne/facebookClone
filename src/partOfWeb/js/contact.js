
import React from 'react'
import UserAvatarCircle from './user-avatar-circle'
import '../css/contact.css'

function Contact(user) {
  return (
    <div className="contact">
        <div className='ava-box'><UserAvatarCircle />
        <svg className='online' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#00FF00" d="m2 12a10 10 0 1 1 10 10 10 10 0 0 1 -10-10z"/></svg>
</div>
        <p>{user.Name}</p>
    </div>
  )
}

export default Contact