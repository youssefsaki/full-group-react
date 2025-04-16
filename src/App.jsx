import UserContextProvider from './context/UserContext';
import A from './components/A';
import B from './components/B';

const App = () => {

  return (
    <UserContextProvider>
     <A title='Hello World'/>
     <B />
    </UserContextProvider>
  )
}

export default App