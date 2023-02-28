import React from 'react';
import { Button } from 'react-bootstrap';
import { consultarUserAPI, borrarUsuarioAPI } from '../../helpers/queriesRegistro';
import Swal from 'sweetalert2';
const itemUsuarios = ({usuario, setUsuarios}) => {
    const {_id, nombre, email, perfil} = {...usuario} 

    const borrarUsuario = ()=>{
        // busco el token de localstorage y lo envio
         //const token = JSON.parse(localStorage.getItem('tokenRagnar')).token|| null
      borrarUsuarioAPI(_id).then((respuesta)=>{
        
        // TAREA: agregar la ventana de sweetalert para preguntar si queremos borrar el producto, solo en el caso de la respuesta afirmativa realizar el sieguiente codigo:
        if(respuesta.status === 200){
          // se pudo borrar el producto
          Swal.fire("Usuario eliminado","El usuario fue eliminado exitosamente","success");
          //obtener todos los productos actuales y actualizamos el state productos
          consultarUserAPI().then((respuesta)=>{
            setUsuarios(respuesta);
          })
        }else{
          //mostrar al usuario un mensaje de error
          Swal.fire("Ocurrio un error","Vuelva a intentar esta operación en unos minutos","error");
        }
      })
    }
    


    return (
        <tr>
      
    
      <td>{nombre}</td>
      <td>{email}</td>
      
      <td>{perfil}</td>
      <td>
        <div className='botones'>

        <Button className='btn btn-danger mb-2' onClick={borrarUsuario} >
          Borrar
        </Button>
        
        </div>
      </td>
    </tr>
    );
};

export default itemUsuarios;