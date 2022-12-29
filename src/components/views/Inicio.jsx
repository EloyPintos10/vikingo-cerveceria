import React from 'react';
import { Row } from 'react-bootstrap';
import CardProductoInicio from './pagInicio/CardProductoInicio';
import { useEffect, useState } from "react";
import { consultarAPI } from '../helpers/queriesAdmin';
import DataStore from './pagInicio/DataStore';

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
          //console.log(respuesta)
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

<article>

        <Row xs={1} md={2} lg={4} >
          {productos.map((producto) => (
            <CardProductoInicio
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
              
            ></CardProductoInicio>
          ))}
        </Row>
</article>
</section>
</>
    );
};

export default Inicio;