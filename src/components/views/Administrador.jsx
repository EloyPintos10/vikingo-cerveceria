import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import "../../css/admin.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { consultarAPI } from "../helpers/queriesAdmin";
import ItemProductos from "./pagAdmin/ItemProductos";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { consultarUserAPI } from "../helpers/queriesRegistro";
import ItemUsuarios from "../views/pagAdmin/ItemUsuarios";
import { consultarPedidosAPI } from "../helpers/queriesPedidos";
import ItemPedidos from "./pagAdmin/ItemPedidos";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [mostrarComponenteProductos, setMostrarComponenteProductos] =
    useState(null);
  const [mostrarComponenteUsuarios, setMostrarComponenteUsuarios] =
    useState(null);
  const [mostrarComponentePedidos, setMostrarComponentePedidos] =
    useState(null);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  useEffect(() => {
    consultarUserAPI().then(
      (respuesta) => {
        setUsuarios(respuesta);
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);
  useEffect(() => {
    consultarPedidosAPI().then(
      (respuesta) => {
        setPedidos(respuesta);
       
      },
      (reason) => {
        console.log(reason);

        Swal.fire(
          "Ocurrio un error",
          "Intentelo nuevamente en unos minutos",
          "error"
        );
      }
    );
  }, []);

  return (
    <div className="mainAdmin mainSection">
      <section className="container fondoSectionTabla">
        <article className="text-center  mt-5 fuente">
          <h1 className="fw-bold mb-4">Bienvenido Administrador </h1>
          <h3 className="fw-bold">¿En qué trabajamos hoy?</h3>
        </article>
        <article className="botonesAdmin text-center fuente">
          <Button
            onClick={() =>
              setMostrarComponenteProductos(!mostrarComponenteProductos)
            }
            className="btn-Admin"
          >
            {mostrarComponenteProductos ? `OCULTAR` : `PRODUCTOS`}
          </Button>
          <Button
            onClick={() =>
              setMostrarComponenteUsuarios(!mostrarComponenteUsuarios)
            }
            className="btn-Admin"
          >
            {mostrarComponenteUsuarios ? `OCULTAR` : `USUARIOS`}
          </Button>
          <Button
            onClick={() =>
              setMostrarComponentePedidos(!mostrarComponentePedidos)
            }
            className="btn-Admin"
          >
            {mostrarComponentePedidos ? `OCULTAR` : `PEDIDOS`}
          </Button>
        </article>
        <div className={mostrarComponenteProductos ? "show-element" : "true"}>
          {mostrarComponenteProductos && (
            <div className="d-flex justify-content-between">
              <p className="titulosadmin">LISTADO PRODUCTOS</p>
              <Link to="/administrar/crear">
                <BsFillPlusCircleFill className="fs-2" />
              </Link>
            </div>
          )}
          {mostrarComponenteProductos && (
            <Table responsive bordered className="fondoTabla">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Categoria</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productos.map((producto) => (
                  <ItemProductos
                    key={producto._id}
                    producto={producto}
                    setProductos={setProductos}
                  ></ItemProductos>
                ))}
              </tbody>
            </Table>
          )}
        </div>
        <div className={mostrarComponenteUsuarios ? "show-element" : "true"}>
          {mostrarComponenteUsuarios && (
            <div className="d-flex justify-content-between">
              <p className="titulosadmin">LISTADO USUARIOS</p>
              <Link to="/registro">
                <BsFillPlusCircleFill className="fs-2" />
              </Link>
            </div>
          )}
          {mostrarComponenteUsuarios && (
            <Table responsive bordered className="fondoTabla">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Perfil</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <ItemUsuarios
                    key={usuario._id}
                    usuario={usuario}
                    setUsuarios={setUsuarios}
                  ></ItemUsuarios>
                ))}
              </tbody>
            </Table>
          )}
        </div>

        <div className={mostrarComponentePedidos ?"show-element" : "true"}>
          {mostrarComponentePedidos && (
            <p className="titulosadmin text-center">LISTADO COMPRAS</p>
          )}
          {mostrarComponentePedidos && (
            <Table responsive bordered className="fondoTabla">
              <thead>
                <tr>
                  
                  <th>Usuario</th>
                  <th>Detalle</th>
                  <th>Monto Total</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
              {pedidos.map((pedido) => (
                  <ItemPedidos
                    key={pedido._id}
                    pedido={pedido}
                    setPedidos={setPedidos}
                  ></ItemPedidos>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </section>
    </div>
  );
};

export default Administrador;
