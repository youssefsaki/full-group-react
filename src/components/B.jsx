import React, { useContext } from 'react'
import { stateContext } from '../context/UserContext'

const B = () => {
    
    let state = useContext(stateContext);
    
  return (
    <div style={{margin:"50px", width:"250px" ,background:"red" , textAlign:"center"}}>
     {state.map((info, index) => (
        <h1 key={index}>{info}</h1>
     ))}
    </div>
 
    
  )
}

export default B