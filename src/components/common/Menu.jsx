import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
<<<<<<< HEAD

import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../css/inicio.css";


=======
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../css/inicio.css";
import logovikingo from "../common/img/vikingos.png";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";

>>>>>>> b0a4f4a049eb9bfbefb77b3b858e9f2a10e6baba
const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    localStorage.removeItem("tokenRagnar");
    setUsuarioLogueado({});
    navegacion("/");
  };

  const redireccion = () => {
    if (usuarioLogueado.perfil === "admin") {
      navegacion("/administrar");
    } else {
      Swal.fire(
        "ACCESO NO AUTORIZADO",
        `No puedes acceder como administrador`,
        "error"
      );
    }
  };

  return (
    <div>
     
    <Navbar bg="light" expand="lg" className="nav imgNav navbar espacio  pd dropdown-toggle.flecha">
      <Container>
        <Nav.Link href="#home"> < AiOutlineShoppingCart className="tamañoIconos2"/> </Nav.Link>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">CERVEZAS</Nav.Link>
            <Nav.Link href="#link">TRAGOS</Nav.Link>
            <Nav.Link href="#link">COMIDA</Nav.Link>
            <NavDropdown className="flecha"  id="basic-nav-dropdown" title={ <AiOutlineUser className="tamañoIconos"/>} >
              

           
              <NavDropdown.Item href="#action/3.1">Crear cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Iniciar sesión
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#home"> < AiOutlineShoppingCart className="tamañoIconos"/> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
     

    </div>
   
  );
};

export default Menu;
