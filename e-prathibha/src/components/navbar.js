import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link } from 'react-router-dom';


function Navbarr() {
  return (
    <Navbar className="c1" style={{ backgroundColor: '#3498db',paddingTop:"10" }}>
      <Container className='c2 '>
        <Navbar.Brand to="/" style={{ color: '#fff', marginRight: '10px' }}>
          <b>E-PRATHIBHA</b>
        
          </Navbar.Brand>
         
        <Navbar.Collapse className="justify-content-end" class="c3">
          <Navbar.Text style={{ marginRight: '20px' }}>
            <Link to="/login" className="log"style={{ color: '#fff' }}>
              Login/
            </Link>
            
            &nbsp;&nbsp;&nbsp;
            <Link to="/register" style={{ color: '#fff' }}>
              Register
            </Link>
            &nbsp;&nbsp;&nbsp;
            <Link to="/Home" style={{ color: '#fff' }}>
              Home
            </Link>
            <br />
            
          </Navbar.Text>
        </Navbar.Collapse>
      
      </Container>
    </Navbar>
  );
}

export default Navbarr;
