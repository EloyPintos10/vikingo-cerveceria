import React from 'react';
import { Row } from 'react-bootstrap';
import cardProductoInicio from './pagInicio/cardProductoInicio';
import { useEffect, useState } from "react";

const Inicio = () => {
    const [productos, setProductos] = useState([]);
    return (
        <>
        <div className='text-center'>
            <h1 className='fw-bold tuclase2'>PRODUCTOS</h1>
        </div>

<section id="mysection">

<article>

        <Row xs={1} md={2} lg={4} >
          {productos.map((producto) => (
            <cardProductoInicio
              key={producto._id}
              producto={producto}
              setProductos={setProductos}
              
            ></cardProductoInicio>
          ))}
        </Row>
</article>
</section>
</>
    );
};

export default Inicio;