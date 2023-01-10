import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardProductoInicio from './pagInicio/cardProductoInicio';
import { useEffect, useState } from "react";
import { consultarAPI } from '../helpers/queriesAdmin';
import DataStore from './pagInicio/DataStore';
import "../../css/inicio.css"
import { BsWhatsapp } from "react-icons/bs";

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
          
         setProductos(respuesta);
        })
    },[])
    return (
        <>
        <DataStore></DataStore>
        <div className='text-center'>
            <h1 className='fw-bold '>PRODUCTOS</h1>
        </div>

<section id="mysection">

<Container>

        <Row xs={1} md={2} lg={4} >
          {productos.map((producto) => (
            <CardProductoInicio
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
              
            ></CardProductoInicio>
          ))}
        </Row>
</Container>

<a href="https://api.whatsapp.com/send?phone=+3815390682&text=Quiero%20Comprar!" className='divIcono' ><BsWhatsapp className='iconoMsj'/></a>

</section>
</>
    );
};

export default Inicio;