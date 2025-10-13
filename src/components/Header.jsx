import React from 'react';
import './Header.css';
import logoFlora from '../assets/flora1.jpg'; 
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar  variant="dark" expand="lg" className="mb-4 bg-verde-grisaceo">
      <Container>       
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
               
                src={logoFlora} 
                alt="Flora Logo"
                width="100" 
                height="100" 
                className="d-inline-block align-top me-2 rounded-circle" 
            />
          
        </Navbar.Brand>

       <Nav className="me-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3 fs-4">Home</Nav.Link>
          <Nav.Link as={Link} to="/productos" className="me-3 fs-4">Productos</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3 fs-4">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3 fs-4">Infaltables</Nav.Link>
          </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar productos..."
              className="me-2 form-control search-input" 
              aria-label="Search"
            />
               <Button className="btn-lg btn-custom-search">
                  <FontAwesomeIcon icon={faSearch}
                  className="icon-lupa-color" /> 
                </Button>
          </Form>       

          <Nav className="ms-auto align-items-center">
          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-4">
              Administración
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;