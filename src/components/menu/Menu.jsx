import { Link } from 'react-router-dom'

const Menu = () =>{
  return(
    <ul className="menu">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/About">About</Link>
      </li>
      <li>
        <Link  className="link" to="/Lessons">Lessons</Link>
      </li>
      <li>
        <Link  className="link" to="/Projects">Projects</Link>
      </li>
      </ul>
  )

}

export default Menu