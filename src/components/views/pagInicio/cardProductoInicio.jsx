import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { SlHandbag } from "react-icons/sl";


const CardProductoInicio = ({producto}) => {
    const{ id, nombreProducto, precio, imagen } = { ...producto};
    return (
        <div>
             
      <Col className="d-flex justify-content-center">
        <div className="tarjetas">

          <Link className="tituloscard ">
            <img src={imagen} className="imgTarjetas"/>
          <Link className='d-flex justify-content-center '>
        <SlHandbag className='iconoTarjetas' title="compra rapida"/>
          
          </Link>

            <Card.Title className="p-3 text-center">{nombreProducto}</Card.Title>
          </Link>
        </div>
        
      </Col>
           </div>
    );
};

export default CardProductoInicio;