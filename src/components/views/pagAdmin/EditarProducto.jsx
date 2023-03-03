import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  consultarAPI,
  editarProductoAPI,
  obtenerProductoAPI,
} from "../../helpers/queriesAdmin";
import "../../../css/admin.css";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navegacion = useNavigate();
  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    obtenerProductoAPI(_id).then((respuesta) => {
      console.log(respuesta);
      if (respuesta.status === 200) {
        setValue("nombreProducto", respuesta.dato.nombreProducto);
        setValue("precio", respuesta.dato.precio);
        setValue("imagen", respuesta.dato.imagen);
        setValue("descripcionProducto", respuesta.dato.descripcionProducto);
        setValue("categoria", respuesta.dato.categoria);
      }
    });
  }, []);

  const onSubmit = (datos) => {
    const token = JSON.parse(localStorage.getItem("tokenRagnar")).token || null;
    editarProductoAPI(_id, datos, token).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto editado",
          "El producto fue correctamente actualizado",
          "success"
        );

        navegacion("/administrar");
      } else {
        Swal.fire(
          "Error al editar el producto",
          "El producto no pudo ser editado",
          "error"
        );
      }
    });
  };

  return (
    <section className="mainSection my-5">
      <article className="container">
        <h1 className=" text-center mt-3">Actualizar producto</h1>
        <hr className="text-warning " />
      </article>

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="container formulario"
        id="fondoCrear"
      >
        <Form.Group className="mb-3" controlId="formNombreProducto">
          <Form.Label>Nombre producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Remera"
            minLength={2}
            maxLength={50}
            {...register("nombreProducto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 2,
                message: "La cantidad de caracteres es 2 como minimo",
              },
              maxLength: {
                value: 50,
                message: "La cantidad maxima de caracteres es de 50",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es un dato obligatorio",
              min: {
                value: 100,
                message: "El precio minimo debe ser de $100",
              },
              max: {
                value: 50000,
                message: "El precio maximo debe ser de $50000",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formdescripcionProducto">
          <Form.Label>Descripción producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Bebida con alto grado de alcohol"
            minLength={10}
            maxLength={300}
            {...register("descripcionProducto", {
              required: "La descripción del producto es obligatoria",
              minLength: {
                value: 10,
                message: "La cantidad de caracteres es 10 como minimo",
              },
              maxLength: {
                value: 300,
                message: "La cantidad maxima de caracteres es de 300",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionProducto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="cervezas">Cervezas</option>
            <option value="comidas">Comidas</option>
            <option value="tragos">Tragos</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <div className="text-center">
          <Button className="btn btnGuardar" type="submit">
            Guardar
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default EditarProducto;
