import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button, NavLink } from "react-bootstrap";
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
        <div className="d-flex container">
        
          <Link to="/" className="fuente-img">
            <img src={Logo} alt="Logo" className="logo2" />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#cervezas" className="fuente fw-bold">
                CERVEZAS
              </NavLink>
              <NavLink href="#tragos" className="fuente fw-bold">
                TRAGOS
              </NavLink>
              <NavLink href="#comida" className="fuente fw-bold">
                COMIDA
              </NavLink>
              {usuarioLogueado.nombre ? (
                <>
                  <NavDropdown
                    className="flecha menuMobile"
                    id="basic-nav-dropdown"
                    title={<AiOutlineUser className="tamañoIconos" />}
                  >
                    <div className="text-center">
                      <h5>Hola {usuarioLogueado.nombre}!</h5>
                      <hr />
                    </div>
                    <NavDropdown.Item>
                      <Button
                        to="/Administrar"
                        className="link-drop btnAdmin fuente"
                        onClick={redireccion}
                      >
                        Administrador
                      </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Button
                        className="link-drop btnCerrar fuente"
                        onClick={logout}
                      >
                        Cerrar Sesión
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <NavDropdown
                  className="flecha"
                  id="basic-nav-dropdown"
                  title={<AiOutlineUser className="tamañoIconos" />}
                >
                  <NavDropdown.Item>
                    <Link to="/registro" className="link-drop">
                      Registrarse
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/login" className="link-drop">
                      Iniciar Sesión
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>
    </div>
  );
};

export default Menu;
