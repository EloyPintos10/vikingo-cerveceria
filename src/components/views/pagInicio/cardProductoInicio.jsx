import React from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../../css/detalle-producto.css";
import { useState } from "react";
import Swal from "sweetalert2";

export const CardProductoInicio = ({
  producto,
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,

  total,
  setTotal,
}) => {
  const { _id, nombreProducto, precio, imagen, descripcionProducto, quantity } =
    {
      ...producto,
    };

  const onAnddProducts = (producto) => {
   
    if (allProducts.find((item) => item._id === producto._id)) {
      const productos = allProducts.map((item) =>
        item._id === producto._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        );
        
        setTotal(total + producto.precio * quantity);
        setCountProducts(countProducts + quantity);
        return setAllProducts([...productos]);
      }
      
      Swal.fire({
        title: `¡Agregado al carito!`,    
        confirmButtonColor: "#3085d6",      
        confirmButtonText: "Aceptar",
      });
    setTotal(producto.precio * quantity + total);
    setCountProducts(countProducts + producto.quantity);
    setAllProducts([...allProducts, producto]);
    
  };

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="d-flex justify-content-center">
     
        <Card className="card-style" >
          <Card.Img src={imagen} className="imgTarjetas" />
          <Card.Body className="card-body fondoT">
            <Card.Title className="p-3 text-center">
              {nombreProducto}
            </Card.Title>
            <p className="text-center">${precio}</p>

            <div className="d-flex justify-content-around ">
              <Button
                onClick={handleShow}
                className="mt-3 btn detalle-btn  css-button-sliding-to-left--sky text-center "
              >
                Ver más
              </Button>

              <button
                onClick={() => onAnddProducts(producto)}
                className="mt-3 css-button-sliding-to-left--sky "
                type="submit"
              >
                {" "}
                <AiOutlineShoppingCart className="fs-4" />
              </button>
            </div>
          </Card.Body>
        </Card>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fuente fw-bold">{nombreProducto}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src={imagen} alt="imagen Producto" className="img-modal" />
          </div>
          <p>{descripcionProducto}</p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-around">
          <p className="text-precio">${precio}</p>
          <button
            onClick={() => onAnddProducts(producto)}
            className="mt-3 css-button-sliding-to-left--sky "
            type="submit"
          >
            {" "}
            <AiOutlineShoppingCart className="fs-4" />
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardProductoInicio;
