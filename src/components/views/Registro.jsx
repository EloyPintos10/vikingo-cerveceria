import React from 'react';
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from '../helpers/queriesRegistro';
import "../../css/registro.css"
import emailjs from "emailjs-com"
import bannerVertical from "../common/img/bannerVertical.png"


const Registro = ({setUsuarioLogueado}) => {
    const navigate = useNavigate();
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (datos) => {

      if(datos.email === "ragnar@hotmail.com" && datos.password === "Pintose1542"){
       datos.perfil = "admin"
      }else{
        datos.perfil = "cliente"
      }    
     
        crearUsuarioAPI(datos, datos.perfil).then((respuesta) => {
          if (respuesta.status === 201) {
  
            Swal.fire(
              `Te registraste correctamente, ${datos.nombre}`,
              "Inicia sesion con la nueva cuenta.",
              "success"
            );

            var parametros = {
              nombre:(datos.nombre),
              email:(datos.email) 
              
          };
            emailjs.send('service_2khpjbl', 'template_nkrf3fq',parametros, "-GX5UHwn7TZrNOH2Y")
            .then(function(response) {
               console.log('ENVIADO!', response.status, response.text);
            }, function(error) {
               console.log('FALLO...', error);
            });
           
            
            
            
              localStorage.setItem('tokenRagnar', JSON.stringify(datos));
             
               setUsuarioLogueado(datos, datos.perfil)
           
              navigate("/");
          } else {
            Swal.fire(
              `Hubo un error inesperado`,
              "Intentelo nuevamente en breve.",
              "error"
            );
          }
        });
        
       

    };
    return (
        <div>
      
          <Form onSubmit={handleSubmit(onSubmit)}  className="container formulario2 my-5" id='fondoCrear'>

            <div className='row'>
              <div className='col-lg-6 col-md-6'>
              <h3 className="text-center my-5">Registrate!</h3>
            <Form.Group className="mb-4 container">
              <Form.Control
                type="text"
                placeholder="Ingrese un Nombre"
                {...register("nombre", {
                  required: "Debe ingresar un nombre",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre no debe tener mas de 30 caracteres",
                  },
                  pattern: {
                    value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                    message: "Debe ingresar un nombre",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 container">
              <Form.Control
                type="text"
                placeholder="Ingrese un Apellido"
                {...register("apellido", {
                  required: "Debe ingresar un apellido",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre no debe tener mas de 30 caracteres",
                  },
                  pattern: {
                    value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                    message: "Debe ingresar un nombre de apellido",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 container">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("userName", {
                  required: "Debe ingresar un nombre de usuario",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre no debe tener mas de 30 caracteres",
                  },
                  pattern: {
                    value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                    message: "Debe ingresar un nombre de usuario valido",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 container">
              <Form.Control
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "Debe ingresar un email",
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Debe ingresar un formato valido",
                  },
                })}
              />
              <Form.Text className="text-danger mb-2">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-4 container">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "Debe ingresar una contraseña",
                  minLength: {
                    value: 8,
                    message: "Su contraseña debe tener al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Su contraseña debe tener como 30 caracteres como maximo",
                  },
                })}
             
              />
              <Form.Text className="text-danger mb-2">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="justify-content-center d-grid">
              <Button
                className="btn btn-dark btn-lg btn-block mt-2 btnRegistrarse"
                type="submit"
              >
                Registrarse
              </Button>
             
              <button
                className="btn btn-danger btn-sm mt-4 btnRegistrarse"
                type="button"
                onClick={() => navigate("/login")}
              >
                ¿Ya estas registrado?
              </button>
            </div>
              </div>
              <div className='col-lg-6 col-md-6 text-center'>
                <img src={bannerVertical} alt="banner" className='divImg' />
              </div>
            </div>
            
          </Form>
        
        </div>
    );
};

export default Registro;