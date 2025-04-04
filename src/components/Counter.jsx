import { useState } from "react"

function Counter() {

  let [counter, setCounter] = useState(0); 
  // Initializing a state variable `counter` with an initial value of 0.
  // `setCounter` is a function that updates the `counter` state.

  console.log(counter); 
  // Logging the current value of `counter` to the console each time the component renders.

  /*
    The useState hook returns an array: 
      [state, functionToUpdateState]
    Here, `counter` is the state, and `setCounter` is the function used to update it.
  */

  //* Function for incrementing the counter by 10
  const handleClick = () => {
    for(let i = 0; i < 10; i++) { 
      // A loop that runs 10 times to increment the counter.
      
      //? setCounter(counter + 1); 

      // This updates `counter`, but since React batches state updates,
      // this won't immediately reflect the new value within the loop.

      setCounter(prev => {
        console.log(prev); 
        // Logs the previous state before updating.
        
        return prev + 1; 
        // Using the previous state (`prev`) ensures accurate updates.
      });
    }
  }

  return (
    <div>
      {/* 
        JSX must use `className` instead of `class` since `class` is a reserved word in JavaScript.
      */}
      
      <h1>{counter}</h1> 

      <button onClick={() => setCounter(prevState => prevState + 1)}>INCREMENT</button> 
      {/* Increments the counter by 1 when clicked. Uses the previous state (`prevState`) to ensure correct updates. */}

      <button onClick={() => setCounter(prev => prev - 1)}>DECREMENT</button> 
      {/* Decrements the counter by 1 when clicked. */}

      <button onClick={handleClick}>INCREMENT BY 10</button> 
      {/* Calls `handleClick` to increment the counter by 10. */}

      <button onClick={() => setCounter(0)}>RESET</button> 
      {/* This button does nothing yet; you might want to add `setCounter(0)` to reset the counter. */}
   </div>
  )
}

export default Counter; 
// Exporting the App component so it can be used in other parts of the project.
