
import PropTypes from 'prop-types';
import C from './C';

const B = ({
    counter, 
    increment,
    decrement,
    reset
}) => {
    //* it accepts props object as a paramter 
    //* i've used the destructuring method directly 

  return (
    <div>
        <C 
            counter={counter}
            increment={increment}
            decrement={decrement}
            reset={reset}  
        />
    </div>
  )
}



export default B