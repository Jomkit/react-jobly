import { NavLink } from 'react-router-dom'
import "./NavBar.css";
import { Nav, NavItem, Navbar, NavbarText } from 'reactstrap';

const NavBar = () => {
  return (
    <Navbar color='secondary' dark>
          <Nav className='d-flex align-items-center'>
            <NavItem>
              <NavLink className="navbar-brand" to="/">React-Jobly</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/companies">Companies</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
          </Nav>
            <NavItem>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </NavItem>
      </Navbar>
  )
}

export default NavBar