import { Link, NavLink } from "react-router-dom"
// import { navLinks } from '../constants/index'


const NavBar = () => {

    const isActiveStyleHandler = ({ isActive }) => {
        return {
            backgroundColor: isActive ? 'red' : 'transparent'
        }
    }

  return (
    <div 
        className="bg-green-800 text-white p-[20px] flex justify-around special"
    >
        <h1
            className=""
        >
            <Link to='/'>Logo</Link>
        </h1>
        <ul className="flex gap-[10px] text-sm">
          {/* {Array.isArray(navLinks) && navLinks.map( ({ to, text}, index) => (
            <li key={index}>
                <Link to={to}>{text}</Link>
            </li>
          ) )} */}
          <li>
            <NavLink style={isActiveStyleHandler} to='community'>Community</NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyleHandler} to='learn'>Learn</NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyleHandler} to='blog'>Blog</NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyleHandler} to='blogs'>Blogs</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default NavBar