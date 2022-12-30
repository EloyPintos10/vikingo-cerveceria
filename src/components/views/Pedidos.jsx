import React from "react";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProductoAPI } from "../helpers/queriesAdmin";
import ItemPedidos from "./pagPedidos/ItemPedidos";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { crearPedidoAPI } from "../helpers/queriesPedidos";
import { Navigate } from "react-router-dom";

const Pedidos = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const { id } = useParams();
  const navegacion = useNavigate();

  const [pedidos, setPedidos] = useState([]); 
  
 
  return (
    <div className="container">
      <h1 className="text-center my-4">Carrito</h1>
      <hr />

      <Table responsive bordered className='fondoTabla'>
      <thead>
        <tr>
          
          <th>Id</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>        
       
      </tbody>
    </Table>
    </div>
  );
};

export default Pedidos;
