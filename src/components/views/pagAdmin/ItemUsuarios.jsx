import React from "react";
import { Button } from "react-bootstrap";
import {
  consultarUserAPI,
  borrarUsuarioAPI,
} from "../../helpers/queriesRegistro";
import Swal from "sweetalert2";
const itemUsuarios = ({ usuario, setUsuarios }) => {
  const { _id, nombre, email, perfil } = { ...usuario };

  const borrarUsuario = () => {
   

    Swal.fire({
      title: "Eliminar este usuario?",
      showCancelButton: true,
      confirmButtonText: "Borrar",
      icon: "warning",      
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        
        borrarUsuarioAPI(_id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario eliminado",
              "El usuario fue eliminado exitosamente",
              "success"
            );

            consultarUserAPI().then((respuesta) => {
              setUsuarios(respuesta);
            });
          } else {
            Swal.fire(
              "Ocurrio un error",
              "Vuelva a intentar esta operación en unos minutos",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>

      <td>{perfil}</td>
      <td>
        <div className="botones">
          <Button className="btn btn-danger mb-2" onClick={borrarUsuario}>
            Borrar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default itemUsuarios;
