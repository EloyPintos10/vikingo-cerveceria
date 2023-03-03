import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Swal from "sweetalert2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../css/inicio.css";
import logovikingo from "../common/img/vikingos.png"





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
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav imgNav items nave ">
      <Container>
        <Navbar.Brand href="#home" className="navegador" > <img src={logovikingo} alt=""  className="logoNav"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          
          <Nav className="me-auto ">
            

            <Nav.Link href="#features" className="fuente text-black item letra "> CERVEZAS</Nav.Link>
            
            

            <Nav.Link href="#pricing" className="fuente text-black item ">TRAGOS</Nav.Link>
            
            

            <Nav.Link href="#pricing" className="fuente text-black item">COMIDA</Nav.Link>
           
            

           
           
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">MI CUENTA</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              CARRITO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
};

export default Menu;
