import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Swal from 'sweetalert2';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import "../../css/inicio.css";
import Logo from "../common/img/LOGO VIKINGOS.png"

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('tokenRagnar');
    setUsuarioLogueado({});
    navegacion('/')
  }

const redireccion = ()=>{
  if(usuarioLogueado.perfil === "admin"){
    navegacion ("/administrar")
  }else {
    Swal.fire(
      "ACCESO NO AUTORIZADO",
      `No puedes acceder como administrador`,
      "error"
    );
  }
}

    return (
        <div>
             
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="  fondoprueba">
          <Container fluid >
            <Navbar.Brand className='text-light  ' href="#"><img   alt="logo" className='logoMenu' /></Navbar.Brand>
            <Navbar.Toggle className='bg-light' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 Hola {usuarioLogueado.nombre}.!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" className="nav-item nav-link">Inicio</NavLink>
                  <NavLink to="#action2" className="nav-item nav-link">Productos</NavLink>
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
                {usuarioLogueado.nombre ?(
                  
                  <>
                 

                    
                 <div className='d-flex text-center'>
                  
                    
                  <Button to="/administrar" className='btn btn-primary me-2 mt-3' onClick={redireccion}>Administrador</Button>
                    
                   
                <Button className='btn btn-danger me-2 mt-3' onClick={logout}>
                  Cerrar Sesión
                </Button>
                  
                </div>
                  

                
              </>
            ) : (
              <div className='d-flex text-center'>
              
              
              <Link to="/login" className='btn btn-primary ms-2 mt-3'>Iniciar Sesión</Link>
              <Link to="/registro" className='btn btn-primary ms-2 mt-3'>Registrarse</Link>
            </div>
            )}
                
               




      
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    
        </div>
    );
};


export default Menu;