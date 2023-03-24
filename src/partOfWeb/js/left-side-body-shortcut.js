import React from 'react'
import '../css/left-side-body-shortcut.css'

function LeftSideBodyShortcut(shortcut) {
  return (
    <div className='left-side-shortcut'>
        <img className='shortcut-img' src={shortcut.img}></img>
        <p>{shortcut.name}</p>
    </div>
  )
}

export default LeftSideBodyShortcut