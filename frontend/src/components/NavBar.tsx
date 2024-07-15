import { NavLink } from 'react-router-dom'
import "./NavBar.css";
import { Nav, NavItem, Navbar } from 'reactstrap';
import { useContext } from 'react';
import { userContext } from './contexts/userContext';
import LogoutForm from './LogoutForm';

const NavBar = () => {
  const currUser = useContext(userContext);
  return (
    <Navbar color='info' dark>
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
            <NavItem style={{ listStyle: "none" }}>
              { currUser ? 
                  <div className='d-flex align-items-center'>
                    <NavLink to="/profile">Profile</NavLink>
                    <LogoutForm />
                  </div>
                :
                  <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                  </>
              }
            </NavItem>
      </Navbar>
  )
}

export default NavBar