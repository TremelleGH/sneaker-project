import React from 'react'
import bgImage from '../video/background-img.mp4'

function Main() {
  return (
    <div>
        <video autoPlay loop muted style={{objectFit: "cover", height: '100%', width: '100%'}}>
            <source src={bgImage} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Main