import { Link } from "react-router-dom"

const Navbar = () =>{
  return(
    <div>
      <nav className="navbar navbar-expand-sm color navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* <Link className="nav-link" to ="/roleview">RoleView</Link> */}
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;
