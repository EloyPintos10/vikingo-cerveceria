import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { login } from "../helpers/queriesRegistro";
import "../../css/registro.css";


const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (datos) => {
    login(datos).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire({
          title: `${respuesta.nombre} <br/>  ¡Bienvenido a VIKINGO!`,

          imageUrl:
            "https://img.freepik.com/vector-premium/dos-tazas-vidrio-tostado-dibujadas-mano-llenas-cerveza-espuma-salpicada_544745-77.jpg?w=2000",
          imageWidth: 250,
          imageHeight: 200,          
          imageAlt: "Custom image",
          confirmButtonColor: "#3085d6",      
          confirmButtonText: "Aceptar",
        });
        localStorage.setItem("tokenRagnar", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        navigate("/administrar/");
      } else {
        Swal.fire(
          "Error",
          `Contraseña o email incorrecto, vuelva a intentarlo`,
          "error"
        );
      }
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={handleSubmit(onSubmit)} className="formulario2 my-5">
        <div>
          <h3 className="text-center ">Iniciar Sesión</h3>
          <hr />
          <Form.Group className="mt-4 mb-3">
            <Form.Control
              placeholder="Ingrese un email"
              {...register("email", {
                required: "Debe ingresar un usuario",
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
          <Form.Group className="mb-5">
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
            <button
              className="btn btn-light btnSesion fw-bold mb-2"
              type="submit"
            >
              Iniciar Sesión
            </button>

            <button
              className="btn btn-danger btn-sm my-3 btnRegistrarse"
              type="button"
              onClick={() => navigate("/registro")}
            >
              ¿No estás registrado?
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
