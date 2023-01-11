import React from 'react';
import { SlHandbag } from "react-icons/sl";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';






export const CardProductoInicio = ({producto, allProducts,setAllProducts,countProducts,setCountProducts,total, setTotal}) => {
  const{ id, nombreProducto, precio, imagen } = { ...producto};
const quantity =1

  const onAnddProducts = (producto) => {
    if (allProducts.find(item => item.id === producto.id)){
    const productos = allProducts.map(item => item.id === producto.id
     ? {...item, quantity: item.quantity + 1 }: item);
     setTotal(total+ producto.precio * quantity);
     setCountProducts(countProducts + quantity);
      return setAllProducts([...productos]);
   }
    
    setTotal( producto.precio*quantity + total );
    setCountProducts(countProducts + producto.quantity);
    setAllProducts([...allProducts, producto]);
    console.log(countProducts)
}
  


    const title =
  <span>
    <SlHandbag className='iconoTarjetas' title="compra rapida"/>
  </span>
    


    return (   
             
        
            
     

       
        <div className='container-items d-flex justify-content-center mb-4'>
          

      <Card  style={{ width: '21rem' }}>
      <Card.Img  src={imagen} className="imgTarjetas" />
      <Card.Body>
      <Card.Title className="p-3 text-center">{nombreProducto}</Card.Title>
        
        <a className='d-flex justify-content-center compra'>
        <DropdownButton className='mt-3 boton' id="dropdown-item-button" title={title}  >


          
    

      <Dropdown.ItemText>Talle</Dropdown.ItemText>
      <select className='inputTarjetas' >
      <option  value="">Seleccione Talle</option>
      <option  value="L">L</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="XL">XL</option>
    
      </select>
      <Dropdown.ItemText>Color</Dropdown.ItemText>
      <select className='inputTarjetas' >
      <option  value="">Seleccione Talle</option>
      <option  value="L">L</option>
    <option value="S">S</option>
    <option value="M">M</option>
    <option value="XL">XL</option>
      </select>
      <div className='btnAgregarCarrito'>

    <button onClick={()=> onAnddProducts(producto)} className='mt-3 css-button-sliding-to-left--sky'  type='submit'> Agregar al carrito</button>
      </div>
   
      
     
      
           
    </DropdownButton>
    </a>
       
      </Card.Body>
    </Card>
            
          
    </div>
         
          
    
    );
};

export default CardProductoInicio;