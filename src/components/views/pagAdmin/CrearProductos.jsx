import React from 'react';
import { crearProductoAPI } from '../../helpers/queriesAdmin';
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {useForm} from 'react-hook-form';
import Swal from "sweetalert2";
import "../../../css/admin.css"

const CrearProductos = () => {
    const {register, handleSubmit, formState:{errors}, reset} = useForm();
  
  const navegacion = useNavigate();

  const onSubmit = (datos) =>{
    console.log(datos)   
      
    datos.quantity = 1
   
    
    const token = JSON.parse(localStorage.getItem('tokenRagnar')).token|| null
    
    crearProductoAPI(datos, token, datos.quantity).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta.status === 201){       
        Swal.fire("Producto creado","El producto fue creado exitosamente","success");        
        reset();        
        navegacion('/administrar');
      }else{
        Swal.fire("Ocurrio un error","El producto no pudo ser creado","error")
      }
    })
  }

    return (
        

        <section className="mainSection my-5" >
      <h1 className=" text-center mt-3">Agregar producto</h1>
      <hr />
      
      <Form onSubmit={handleSubmit(onSubmit)} className="container formulario" id='fondoCrear'>
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Cerveza"
          minLength={2}
          maxLength={50}
          {...register('nombreProducto', {
            required:'El nombre del producto es obligatorio',
            minLength:{
              value:2,
              message: 'La cantidad de caracteres es 2 como minimo'
            },
            maxLength:{
              value:50,
              message:'La cantidad maxima de caracteres es de 50'
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" 
          {...register('precio',{
            	required:'El precio del producto es un dato obligatorio',
              min:{
                value:100,
                message: 'El precio minimo debe ser de $100'
              },
              max:{
                value:50000,
                message: 'El precio maximo debe ser de $50000'
              }
          })
          } />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register('imagen',{
              required: 'La url de la imagen es obligatoria',
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: 'Debe ingresar una URL valida'
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDescripcionProducto">
          <Form.Label>Descripción Producto*</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Ej: Bebida Rubia con alto grado de alcohol"
          minLength={10}
          maxLength={300}
          {...register('descripcionProducto', {
            required:'La descripción del producto es obligatoria',
            minLength:{
              value:10,
              message: 'La cantidad de caracteres es 10 como minimo'
            },
            maxLength:{
              value:300,
              message:'La cantidad maxima de caracteres es de 300'
            }
          })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select {
            ...register('categoria',{
              required:'Debe seleccionar una categoria'
            })
          }>
            <option value="">Seleccione una opcion</option>
            <option value="cervezas">Cervezas</option>
            <option value="comidas">Comidas</option>
            <option value="tragos">Tragos</option>
            
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <div className='text-center'>
        <Button className='btn btnGuardar' type="submit">
          Guardar
        </Button>

        </div>
      </Form>
    </section>
    
    );
};

export default CrearProductos;