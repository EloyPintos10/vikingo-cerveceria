import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../../css/inicio.css";
import logoAnimado from "../common/img/logoAnimado2.gif"

const Menu = () => {
    return (
        <div>
             
      {[false].map((expand) => (
        <Navbar key={expand} bg="black" expand={expand} className="mb-3 p-2">
          <Container fluid >
            <Navbar.Brand className='text-light  ' href="#"><img src={logoAnimado} alt="logo" className='logoAnimado' /></Navbar.Brand>
            <Navbar.Toggle className='bg-light' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Ragnar
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Inicio</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <NavDropdown
                    title="Productos"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                   
                    <NavDropdown.Item href="#action3">Camisas</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Remeras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Chombas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Short de Baño
                    </NavDropdown.Item>
                   
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
        </div>
    );
};

export default Menu;