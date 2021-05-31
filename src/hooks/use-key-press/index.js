import {useEffect} from 'react';


// listens for input from the keyboard
export default function useKeyPress (fn) {
  // arrow function thats going to fire
  useEffect(() => {
    // listens for keydown
    window.addEventListener("keydown", fn)
    // removes the key down
    return () => window.removeEventListener("keydown", fn);
  }, [fn]) //second argument is array of dependencies that will fire the arrow function if changed
}
