import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { crearPedidoAPI } from '../../helpers/queriesPedidos';
import "../../../css/carrito.css"
const ItemPedidos = ({pedido, setPedidos}) => {

  const {id, nombreProducto, categoria, imagen, precio} = {...pedido} 

    const navegacion = useNavigate();
    const { handleSubmit, formState:{errors}, reset} = useForm();

    const onSubmit = (datos) =>{
        console.log(datos)
        // busco el token de localstorage y lo envio
        // const token = JSON.parse(localStorage.getItem('tokenRagnar')).token|| null
        
        crearPedidoAPI(datos).then((respuesta)=>{
          console.log(respuesta)
          if(respuesta.status === 201){
            //si la respuesta es correcta indicarle al usuario
            Swal.fire("Pedido creado","El pedido fue solicitado exitosamente","success");
            //resetear el formulario
            reset();
            //redireccionar
            navegacion('/inicio');
          }else{
            Swal.fire("Ocurrio un error","El pedido no pudo ser procesado","error")
          }
        })
      }

    console.log(pedido)
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

        <div className='d-flex my-5 container'>

        <div>
            <img src={imagen} alt="imagen"  className='pedidoImg ' />

        </div>
        <div className='text-center p-5'>
            <h2>DETALLE DE TU COMPRA</h2>
            <h4>{nombreProducto}</h4>
            <p>${precio}</p>
            <Button type='submit'>Comprar</Button>
        </div>
        </div>
        </Form>

    );
};

export default ItemPedidos;