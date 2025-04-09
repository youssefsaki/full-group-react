// Importing state hook and a child component
import { useState } from "react"
import UseEffectComp from "./UseEffectComp"

const Timer = () => {
  // This state decides whether to show UseEffectComp or not
  let [state, setState] = useState(true);

  return (
    <div>
        {/* When clicked, this button sets state to false and removes UseEffectComp */}
        <button onClick={() => setState(false)}>Stop Event</button>

        {/* Conditionally render UseEffectComp or "Timer" text */}
        {state ? <UseEffectComp /> : 'Timer'}
    </div>
  )
}

export default Timer
