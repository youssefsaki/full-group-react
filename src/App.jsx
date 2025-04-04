import BreakLine from "./components/BreakLine"
import Counter from "./components/Counter"
import UseStateArray from "./components/UseStateArray"
import UseStateForm from "./components/useStateForm"

const App = () => {
  return (
    <div>
        {/* Delaring The Components */}
        <Counter />
        
        <BreakLine />

        <UseStateForm />

        <UseStateArray />

    </div>
  )
}

export default App