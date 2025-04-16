import { Link, useNavigate } from "react-router-dom"


const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
        <h1 className="text-xl font-bold">Welcome To React!!</h1>
        {/* <Link to='contact'>Contact</Link> */}
        <button onClick={() => navigate('order-success')}>Order Item</button>
    </div>
  )
}

export default Home