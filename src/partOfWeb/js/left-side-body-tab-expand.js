import React from 'react'
import '../css/left-side-body-tab.css'

function LeftSideBodyTabExpand(type) {
  return (
    <div className='left-side-tabs'>
        <img src={type.src}></img>
        <p>{type.content}</p>
    </div>
  )
}

export default LeftSideBodyTabExpand