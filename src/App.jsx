import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0);

  console.log(counter); // the counter now is like i declared a variable => let counter = 0; 'JS'

  /*
    The use State Returns an Array : 

      console.log(useState); [undefined, function]

      ? [state, functionToUpdateTheState]
  */

  return (
    <div>
      {/* 
        We Can't use class because it's already reservered in html 
        ? use instead => className

        and also for inline styling =>
          
            background-color: rgb(255, 0, 0); css
            style={{backgroundColor: rgb(255, 0, 0)}} inline-style in react 
      */}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevState => prevState + 1)}>INCREMENT</button>
      <button onClick={() => setCounter(prev => prev - 1)}>DECREMENT</button>
      <button>INCREMENT BY 10</button>
      <button>RESET</button>
   </div>
  )
}

export default App
