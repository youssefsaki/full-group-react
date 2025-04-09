import { useState } from "react";
import B from "./B";

const A = () => {

    const [counter, setCounter] = useState(0);

    const INCREMENT_COUNTER = () => {
        setCounter(prev =>prev + 1)
    }

    const DECREMENT_COUNTER = () => {
        setCounter(prev => prev - 1)
    }

    const RESET = () => {
        setCounter(0);
    }

  return (
    <div>
        <B 
            counter={counter}  
            increment={INCREMENT_COUNTER} 
            decrement={DECREMENT_COUNTER}
            reset={RESET}
        />
    </div>
  )
}

export default A