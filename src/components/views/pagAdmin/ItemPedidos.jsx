import React from "react";
import { Button } from "react-bootstrap";
import {
  borrarPedidoAPI,
  consultarPedidosAPI,
  editarPedidoAPI,
} from "../../helpers/queriesPedidos";
import Swal from "sweetalert2";

const itemPedidos = ({ pedido, setPedidos }) => {
  const { _id, usuario, detallePedido, montoTotal, estado } = { ...pedido };

  const editarPedido = () => {
    Swal.fire({
      title: "Cambiar estado del pedido?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, entregado",
    }).then((result) => {
      if (result.isConfirmed) {
        pedido.estado = "ENTREGADO";
        editarPedidoAPI(_id, pedido).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Pedido entregado",
              "El pedido fue entregado exitosamente",
              "success"
            );

            consultarPedidosAPI().then((respuesta) => {
              setPedidos(respuesta);
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

  const borrarPedido = () => {
    Swal.fire({
      title: "Cancelar este pedido?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarPedidoAPI(_id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire(
              "Pedido Cancelado",
              "El pedido fue cancelado  exitosamente",
              "success"
            );

            consultarPedidosAPI().then((respuesta) => {
              setPedidos(respuesta);
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
      <td>{usuario}</td>
      <td></td>
      <td>${montoTotal}</td>
      <td>{estado}</td>
      <td>
        <div className="botones">
          <Button className="btn btn-danger mb-2" onClick={borrarPedido}>
            Cancelar Pedido
          </Button>
          <Button className="btn btn-success" onClick={editarPedido}>
            Cambiar Estado
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default itemPedidos;
