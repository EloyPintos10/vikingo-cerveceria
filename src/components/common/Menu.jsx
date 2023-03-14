import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import "../../css/inicio.css";
import { AiOutlineUser } from "react-icons/ai";
import Logo from "../common/img/LOGO VIKINGOS.png";

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
      <Navbar
        bg="light"
        expand="lg"
        className="nav imgNav navbar espacio  pd dropdown-toggle.flecha"
      >
        <Container>
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo2" />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#cervezas" className="fuente fw-bold">CERVEZAS</Nav.Link>
              <Nav.Link href="#tragos" className="fuente fw-bold">TRAGOS</Nav.Link>
              <Nav.Link href="#comida" className="fuente fw-bold">COMIDA</Nav.Link>
              {usuarioLogueado.nombre ?(
                <>
              <NavDropdown
                className="flecha menuMobile"
                id="basic-nav-dropdown"
                title={<AiOutlineUser className="tamañoIconos" />}
              >
                
                <NavDropdown.Item>
                  <Button to="/Administrar" className="link-drop btnAdmin fuente" onClick={redireccion}>Administrador</Button>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Button className="link-drop btnCerrar fuente" onClick={logout}>Cerrar Sesión</Button>
                </NavDropdown.Item>
              </NavDropdown>
              </>
              ) :(
                <NavDropdown
                className="flecha"
                id="basic-nav-dropdown"
                title={<AiOutlineUser className="tamañoIconos" />}
              >
                
                <NavDropdown.Item>
                  <Link to="/registro" className="link-drop">Registrarse</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/login" className="link-drop">Iniciar Sesión</Link>
                </NavDropdown.Item>
              </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
