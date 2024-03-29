import React from "react";
import { useState } from "react";
import { crearPedidoAPI } from "../../helpers/queriesPedidos";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../../../css/carrito.css";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  setUsuarioLogueado,
  usuarioLogueado,
}) => {
  const [active, setActive] = useState(false);

  const navegacion = useNavigate();
  
  const onDeleteProduct = (producto) => {
    const results = allProducts.filter((item) => item._id !== producto._id);

    setTotal(total - producto.precio * producto.quantity);
    setCountProducts(countProducts - producto.quantity);
    setAllProducts(results);
  };
  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  const guardarPedido = () => {
    const token = JSON.parse(localStorage.getItem('tokenRagnar')) || null
    if(!token){
   
      Swal.fire(
        "Ups!! Debe Loguearse",
        "Debe Iniciar Sesión para confirmar pedido.",
        "warning"
      );
     }else{
      
   

    const pedidoNuevo = {
      usuario: usuarioLogueado.nombre,
      detallePedido: allProducts,
      montoTotal: total,
      estado: "PENDIENTE",
    };

   
      crearPedidoAPI(pedidoNuevo).then((respuesta) => {
        console.log(respuesta);
        if (respuesta.status === 201) {
          Swal.fire(
            "Pedido creado",
            "El pedido fue confirmado exitosamente",
            "success"
          );

          navegacion("/");
        } else {
          Swal.fire(
            "Ocurrio un error",
            "El pedido no pudo ser enviado",
            "error"
          );
        }
      });
      onCleanCart();
    }
    };

  return (
    <div>
      <header>
        <div className="container-icon">
          <div
            className="container-cart-icon"
            onClick={() => setActive(!active)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="count-products">
              <span id="contador-productos">{allProducts.length}</span>
            </div>
          </div>

          <div
            className={`container-cart-products ${active ? "" : "hidden-cart"}`}
          >
            {allProducts.length ? (
              <>
                <div className="row-product">
                  {allProducts.map((producto) => (
                    <div className="cart-product" key={producto._id}>
                      <div className="info-cart-product">
                        <span className="cantidad-producto-carrito">
                          {producto.quantity}
                        </span>
                        <p className="titulo-producto-carrito">
                          {producto.nombreProducto}
                        </p>
                        <span className="precio-producto-carrito">
                          ${producto.precio}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="icon-close"
                        onClick={() => onDeleteProduct(producto)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="cart-total">
                  <h3>Total:</h3>
                  <span className="total-pagar">${total}</span>
                </div>
                <div className="d-flex ">
                  <button
                    className=" btn-clear-all me-2"
                    onClick={guardarPedido}
                  >
                    CONFIRMAR
                  </button>
                  <button className="btn-clear-all" onClick={onCleanCart}>
                    LIMPIAR
                  </button>
                </div>
              </>
            ) : (
              <p className="cart-empty">El carrito está vacío</p>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
