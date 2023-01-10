import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { borrarProductoAPI, consultarAPI } from '../../helpers/queriesAdmin';
import Swal from 'sweetalert2';
const itemProductos = ({producto, setProductos}) => {
    const {_id, nombreProducto, categoria, imagen, precio} = {...producto} 


    

const borrarProducto = ()=>{
    // busco el token de localstorage y lo envio
    // const token = JSON.parse(localStorage.getItem('tokenRagnar')).token|| null
  borrarProductoAPI(_id).then((respuesta)=>{
    
    // TAREA: agregar la ventana de sweetaler para preguntar si queremos borrar el producto, solo en el caso de la respuesta afirmativa realizar el sieguiente codigo:
    if(respuesta.status === 200){
      // se pudo borrar el producto
      Swal.fire("Producto eliminado","El producto fue eliminado exitosamente","success");
      //obtener todos los productos actuales y actualizamos el state productos
      consultarAPI().then((respuesta)=>{
        setProductos(respuesta);
      })
    }else{
      //mostrar al usuario un mensaje de error
      Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
    }
  })
}
    return (
        <tr>
      <td>{_id}</td>
    
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td><img src={imagen} className="imgProductos" /></td>
      <td>{categoria}</td>
      <td>
        <div className='botones'>

        <Button className='btn btn-danger mb-2' onClick={borrarProducto}>
          Borrar
        </Button>
        <Link to={`/administrar/editar/${_id}`} className='btn btn-success'>Editar</Link>
        </div>
      </td>
    </tr>
    );
};

export default itemProductos;