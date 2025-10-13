import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4">
      <Container>
        <Row>
        
          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-0">Encontranos en</p>
            <p className="mb-0">(011)4777-5555</p>
            <p className="mb-0">consultas@flora.com.ar</p>
          </Col>
          
        
          <Col md={4} className="mb-3 mb-md-0">
            <p className="mb-0">Cómo comprar</p>
            <p className="mb-0">Tipos de envío</p>
            <p className="mb-0">Politicas de Reembolso y Devoluciones</p>
          </Col>
          
       
          <Col md={4} className="text-center">
            <p className="mb-0">Redes Sociales</p>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </div>
          </Col>
    
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;