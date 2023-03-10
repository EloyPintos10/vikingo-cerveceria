import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardProductoInicio from './pagInicio/cardProductoInicio';
import { useEffect, useState } from "react";
import { consultarAPI } from '../helpers/queriesAdmin';

import "../../css/inicio.css"
import { BsWhatsapp } from "react-icons/bs";
import ShoppingCart from './CarritoCompra/ShoppingCart';
import Header from './CarritoCompra/Header';
import Carrousel from './pagInicio/Carrousel';



const Inicio = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  const [quantity, setQuantity] = useState(1);
  

  



    const [productos, setProductos] = useState([]);


    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
          
         setProductos(respuesta);
        })
    },[])
    return (
        <>
        <Carrousel></Carrousel>
        
        <div className='text-center'>
            <h1 className='fw-bold '>PRODUCTOS</h1>
        </div>
        <Header 
        quantity= {quantity}
        setQuantity= {setQuantity}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        allCountProducts={setCountProducts}
        setCountProducts={setCountProducts}
        ></Header>

<section id="tarjetas">

<Container>

        <Row xs={1} md={2} lg={4} >
          {productos.map((producto) => (
            <CardProductoInicio
              key={producto.id}
              producto={producto}
              setProductos={setProductos}
              allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        allCountProducts={setCountProducts}
              
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