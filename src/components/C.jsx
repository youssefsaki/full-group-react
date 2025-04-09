
const C = ({
  counter,
  increment,
  decrement,
  reset
}) => {

  const ACTIONS = [
    { text: 'INCREMENT', onClick: increment},
    { text: 'DECREMENT', onClick: decrement, cssStyle: {margin: '20px'} },
    { text: 'RESET', onClick: reset },
  ];

  return (
    <div>
      <h1
        className="text-lg"
      >Counter - {counter}</h1>

    {ACTIONS.map(({text, onClick, cssStyle}) => (
      <button
        className="bg-gray-400"
        key={text}
        onClick={onClick}
        style={cssStyle}
      >
        {text}
      </button>
    ))}

      {/* <button
        className="bg-gray-400"
        onClick={() => decrement()}
        
      >DECREMENT</button>
      <button
        className="bg-gray-400"
        onClick={() => increment()}
        style={{ margin: '20px'}}
      >INCREMENT</button>
      <button
        className="bg-gray-400"
        onClick={() => reset()}
      >RESET</button> */}
    </div>
  )
}

export default C