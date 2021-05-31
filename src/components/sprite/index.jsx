import React from 'react'


export default function Sprite({ image, data, position }) {
  const { y, x, h, w } = data;
  return (
    <div
      style={{
        position: "absolute",
        // moves the sprite by changing css top and left values
        top: position.y,
        left: position.x,
        // the walking position
        height: `${h}px`,
        width: `${w}px`,
        // the skin, found source in public folder
        backgroundImage: `url(${image})`, 
        backgroundRepeat: "no-repeat",
        // direction
        backgroundPosition: `-${x}px -${y}px`, 
      }} 
    >

    </div>

    
  

  )
}
