import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table} from 'react-bootstrap';
import "../../css/admin.css"
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { consultarAPI } from '../helpers/queriesAdmin';
import ItemProductos from './pagAdmin/ItemProductos';
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { consultarUserAPI } from "../helpers/queriesRegistro";
import ItemUsuarios from "../views/pagAdmin/ItemUsuarios"



const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultarAPI().then(
      (respuesta) => {
        //la respuesta es exitosa
        setProductos(respuesta);
      },
      (reason) => {
        console.log(reason);
        //mostrar un mensaje al usuario
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, []);
  
  
  useEffect(() => {
    consultarUserAPI().then(
      (respuesta) => {
        //la respuesta es exitosa
        setUsuarios(respuesta);
        console.log(respuesta)
      },
      (reason) => {
        console.log(reason);
        //mostrar un mensaje al usuario
        Swal.fire(
          'Ocurrio un error',
          'Intentelo nuevamente en unos minutos',
          'error'
        )
      }
    );
  }, []);


    return (
        <div>
            
            <h1 className='text-center my-4'>Bienvenido Administrador </h1>
<Container>

       <div className='text-center'>
<div className='d-flex justify-content-between'>
          <p className='titulosadmin'>LISTADO PRODUCTOS</p>
          <Link to="/administrar/crear"><BsFillPlusCircleFill className='fs-2'/></Link>          
          
</div>
        <Table responsive bordered className='fondoTabla'>
      <thead>
        <tr>
          
          <th>Id</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Categoria</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>        
        {            
            productos.map((producto)=> <ItemProductos key={producto._id} producto={producto} setProductos={setProductos}></ItemProductos> )
          }
      </tbody>
    </Table>
     
       </div>
       <div className='text-center my-4'>
<div className='d-flex justify-content-between'>
          <p className='titulosadmin'>LISTADO USUARIOS</p>
          <Link to="/registro"><BsFillPlusCircleFill className='fs-2'/></Link>

</div>
        <Table responsive bordered className='fondoTabla'>
      <thead>
        <tr>
          <th>id</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Perfil</th>
          
        </tr>
      </thead>
      <tbody>
       {            
            usuarios.map((usuario)=> <ItemUsuarios key={usuario._id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuarios> )
          } 
      </tbody>
    </Table>
       </div>
      
     <div className='text-center'>

          <p className='titulosadmin'>LISTADO COMPRAS</p>
        <Table responsive bordered className='fondoTabla'>
      <thead>
        <tr>
          <th>N. Pedido</th>
          <th>Usuario</th>
          <th>Detalle</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </Table>
     </div>
        
    
</Container>
        </div>
    );
};

export default Administrador;