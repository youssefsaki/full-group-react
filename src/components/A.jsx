
import {useContext} from 'react';
import { stateContext } from '../context/UserContext';

const A = () => {

  let state = useContext(stateContext);

  console.log(state)

  return (
    <div>
      hello from A
    </div>
  )
}

export default A