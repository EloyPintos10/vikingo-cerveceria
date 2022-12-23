import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { consultarUserAPI, login } from "../helpers/queriesRegistro";
import bannerVertical from "../common/img/bannerVertical.png"
const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (datos) => {

    consultarUserAPI(datos).then((respuesta) => {
      const encontrarUsuario = respuesta.find(
        (usuario) => usuario.email === datos.email
      );
      datos.perfil = encontrarUsuario.perfil;
      if (encontrarUsuario) {
        if (encontrarUsuario.password === datos.password) {
          Swal.fire(
            "Bienvenido",
            `Gracias por contar con nosotros, ${encontrarUsuario.nombre}`,
            "success"
          );
          localStorage.setItem(
            "tokenRagnar",
            JSON.stringify(datos, datos.perfil)
          );
          setUsuarioLogueado(datos, datos.perfil);
          navigate("/inicio");
        } else {
          Swal.fire(
            "Error",
            `Contraseña incorrecta, vuelva a intentarlo`,
            "error"
          );
        }
      } else {
        Swal.fire(
          "Email incorrecto",
          `No encontramos un email con ese nombre, vuelve a intentarlo`,
          "error"
        );
      }
    });
  };
  return (
    <div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="container formulario2 mt-5"
        id="fondoCrear"
      >
        <div className="row justify-content-center">

        <div className="col-lg-6 col-md-6">

        <h3 className="text-center my-5 ">Iniciar Sesión</h3>
        
        <Form.Group className="mt-5 mb-3 container">
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
        <Form.Group className="mb-5 container">
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
            className="btn btn-dark btn-lg btn-block mb-2 btnRegistrarse"
            type="submit"
          >
            Iniciar Sesión
          </Button>
          <button
            className="btn btn-danger btn-sm my-3 btnRegistrarse"
            type="button"
            onClick={() => navigate("/Registro")}
          >
            ¿No estás registrado?
          </button>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 text-center">
          <img src={bannerVertical } alt="imagen banner" className="divImg" />
        </div>
        </div>
      </Form>

    </div>
  );
};

export default Login;
