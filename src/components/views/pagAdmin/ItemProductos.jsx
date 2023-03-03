import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queriesAdmin";
import Swal from "sweetalert2";
const itemProductos = ({ producto, setProductos }) => {
  const {
    _id,
    nombreProducto,    
    categoria,
    imagen,
    precio,
  } = { ...producto };

  const borrarProducto = () => {
    
    const token = JSON.parse(localStorage.getItem("tokenRagnar")).token || null;

    Swal.fire({
      title: "Eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",      
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProductoAPI(_id, token).then((respuesta) => {
         
          if (respuesta.status === 200) {
            
            Swal.fire(
              "Producto eliminado",
              "El producto fue eliminado exitosamente",
              "success"
            );
          
            consultarAPI().then((respuesta) => {
              setProductos(respuesta);
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
      <td className="text-center">
        <img src={imagen} className="imgProductos" alt="img-Producto" />
      </td>
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{categoria}</td>
      <td>
        <div className="botones">
          <Button className="btn btn-danger mb-2" onClick={borrarProducto}>
            Borrar
          </Button>
          <Link to={`/administrar/editar/${_id}`} className="btn btn-success">
            Editar
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default itemProductos;
