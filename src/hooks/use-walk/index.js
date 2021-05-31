import {useState} from 'react';

// maxSteps is the maximum number of steps on the sprite sheets, in our case, it's 3 across, so 3
export default function useWalk(maxSteps) {
  // dir is the getter, setDir is the setter, sets initial to 0
  const [position, setPosition] = useState({x:512, y:256});
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  // tracks how large a step is
  const stepSize = 16;

  // moves with each dir on x and y coordinates
  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: {x: stepSize, y:0},
    up: {x:0, y: -stepSize},
  }



  function walk(dir) {
    // console.log(directions[dir]);
    // sets the direction, stores it as dir
    // uses the previous state as a parameter
    setDir((prev) => {
      // if previous state is this direction, move that direction
      if (directions[dir] === prev) move(dir)
      // otherwise, you turn that direction
      return directions[dir]
    });
    // updates the step
    // will cycle across the 3 rows
    // if previous step is < maxSteps-1, because computers count from 0,
    // if it is less, increment
    // if it's over, reset to 0
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }


  function move(dir) {
    // arrow functions allows to use previous values
    setPosition((prev) => ({
      // new x is previous x + modifier at that direction.x
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
