import './App.css';
import React from 'react';
import Sprite from './components/sprite';
import Image from './components/sprite/m1.png';


export default function App() {
  return (
    <div className="zone-container ">
      Sprite
      <Sprite
        image={Image}
        data={{
          x: 0,
          y: 0,
          w: 32,
          h: 32,
        }}
      />
      <br></br>
      Image
      <img src={Image}></img>
    </div>
  );
}
