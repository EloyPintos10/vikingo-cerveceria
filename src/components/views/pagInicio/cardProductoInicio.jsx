import React from 'react';
import { SlHandbag } from "react-icons/sl";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';






const CardProductoInicio = ({producto}) => {
    const{ id, nombreProducto, precio, imagen } = { ...producto};
    const title =
  <span>
    <SlHandbag className='iconoTarjetas' title="compra rapida"/>
  </span>
    


    return (   
             
        
            
     

       
        <div className='d-flex justify-content-center mb-4'>
      <Card  style={{ width: '21rem' }}>
      <Card.Img  src={imagen} className="imgTarjetas" />
      <Card.Body>
      <Card.Title className="p-3 text-center">{nombreProducto}</Card.Title>
        
        <a className='d-flex justify-content-center compra'>
        <DropdownButton className='mt-3 boton' id="dropdown-item-button" title={title  
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
       
      </Card.Body>
    </Card>
    </div>
         
          
    
    );
};

export default CardProductoInicio;