import { Link, Outlet } from "react-router-dom"

const Blogs = () => {
  return (
    <div>
        <h1 className="text-xl font-bold">All Blogs</h1>
        <div>
          <Link to='recipes' style={{ marginRight: '10px'}}>Recipes</Link>
          <Link to='coding'>Coding</Link>
          <Outlet />
        </div>
    </div>
  )
}

export default Blogs