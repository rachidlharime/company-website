import { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { Link } from "react-router-dom"

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const backToTop = () => {
      window.scrollTo(0,0);
      setIsOpen(false);
    }
    
    return (
      <Navbar expand="md" dark color='dark' fixed='top'>
        <Link to="/" className='navbar-brand'>reactstrap</Link>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" onClick={backToTop} className='active'>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/About" onClick={backToTop}>About us</Link>
            </NavItem>
            <NavItem>
              <Link to="/Team" onClick={backToTop}>Team</Link>
            </NavItem>
            <NavItem>
              <Link to="/Carrer" onClick={backToTop}>Carrer</Link>
            </NavItem>
            <NavItem>
              <Link to="/Contact" onClick={backToTop}>Contact</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
}

export default Header;