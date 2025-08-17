import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2 className="logo">
                <Link to={`/`}>Blog</Link>
            </h2>
            <ul className="nav-links">
                <li>
                    <NavLink to={`/`} end className={({ isActive }) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/new`} className={({ isActive }) => isActive ? "new-btn" : ""}>
                        New Post
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`/admin`} className={({ isActive }) => isActive ? "active" : ""}>
                        Edit
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
