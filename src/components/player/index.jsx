import React from 'react'
import Actor from '../actor'
import useKeyPress from "../../hooks/use-key-press"
import useWalk from '../../hooks/use-walk'

export default function Player({ skin }) {
  const {dir, step, walk, position} = useWalk(3)
  const data = {
  h: 32,
  w: 32,
  }
  

  
  
  // reading key presses
  useKeyPress((e) => {
    // will give up,down,left,right without arrow word
    const dir = e.key.replace("Arrow", "").toLowerCase();
    walk(dir)
    
    
    
    e.preventDefault();
  })
  

  
  return (
    <div>
      <Actor
        sprite={`/sprites/skins/${skin}.png`}
        data={data}
        step={step}
        dir={dir}
        position={position}
      />
    </div>
  )
}
