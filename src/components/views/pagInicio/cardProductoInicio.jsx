import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import { SlHandbag } from "react-icons/sl";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DataStore from './DataStore';





const CardProductoInicio = ({producto}) => {
    const{ id, nombreProducto, precio, imagen } = { ...producto};
    const title =
  <span>
    <SlHandbag className='iconoTarjetas' title="compra rapida"/>
  </span>
    


    return (
         
        <div>

         
             
      <Col className="d-flex justify-content-center">
        <div className="tarjetas">

          <Link className="tituloscard ">
            <img src={imagen} className="imgTarjetas"/>
          <a className='d-flex justify-content-center compra'>
      
        <DropdownButton className='mt-3' id="dropdown-item-button" title={title  
        }  >
       
          
    

      <Dropdown.ItemText>Talle</Dropdown.ItemText>
      <select className='inputTarjetas' >
      <option  selected>L</option>
    <option value="1">S</option>
    <option value="2">M</option>
    <option value="3">XL</option>
    
      </select>
      <Dropdown.ItemText>Color</Dropdown.ItemText>
      <select className='inputTarjetas' >
      <option  selected>L</option>
    <option value="1">S</option>
    <option value="2">M</option>
    <option value="3">XL</option>
      </select>
      <div className='btnAgregarCarrito'>

    <button className='mt-3 css-button-sliding-to-left--sky'  type='submit'> Agregar al carrito</button>
      </div>
   
      
     
      
           
    </DropdownButton>
          
          </a>

            <Card.Title className="p-3 text-center">{nombreProducto}</Card.Title>
          </Link>
        </div>
        
      </Col>
           </div>
    );
};

export default CardProductoInicio;