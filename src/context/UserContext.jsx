
import React, { createContext } from 'react'

export const stateContext = createContext();

const UserContextProvider = ({children}) => {

    let name = 'Youssef';
    let age = 23 ;
    let country = "morocco";

  return (
    <stateContext.Provider value={[name , age ,country ]}>
       {children}
    </stateContext.Provider>
  )
}

export default UserContextProvider