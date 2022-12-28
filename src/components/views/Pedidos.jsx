import React from 'react';
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { obtenerProductoAPI } from '../helpers/queriesAdmin';
import ItemPedidos from './pagPedidos/ItemPedidos';

const Pedidos = () => {

    const [pedidos, setPedidos] = useState([])


//buscamos el parametros de la url
const { id } = useParams();
const navegacion = useNavigate();



useEffect(() => {
  obtenerProductoAPI(id).then((respuesta) => {
    if (respuesta.status === 200) {
             console.log(respuesta)
             setPedidos(respuesta)      
      
    }
  });
}, []);


    return (
        <div className='container'>
            <h1 className='text-center my-4'>Carrito</h1>
            <hr />
           <div>
            <ItemPedidos pedidos = {pedidos} setPedidos= {setPedidos}></ItemPedidos>
           </div>
        </div>
    );
};

export default Pedidos;