import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProductoInicio from "./pagInicio/cardProductoInicio";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queriesAdmin";
import "../../css/inicio.css";
import { BsWhatsapp } from "react-icons/bs";
import Header from "./CarritoCompra/Header";
import Carrousel from "./pagInicio/Carrousel";

const Inicio = ({ setUsuarioLogueado, usuarioLogueado }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
  }, []);

  return (
    <div>
      <Carrousel></Carrousel>

      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        allCountProducts={setCountProducts}
        setCountProducts={setCountProducts}
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Header>

      <section>
        <Container>
          <div className="fuente titulos-inicio" id="cervezas">
            <h1>CERVEZAS</h1>
          </div>
          
            
          <Row xs={1} md={2} lg={4}>

            {productos.map((producto) =>
              producto.categoria === "cervezas" ? (
                <CardProductoInicio
                  key={producto._id}
                  producto={producto}
                  setProductos={setProductos}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  allCountProducts={setCountProducts}
                ></CardProductoInicio>
              ) : (
                <div className="claseVacia">No hay Productos</div>
              )
            )}
          </Row>
          

          <div className="fuente titulos-inicio" id="comida">
            <h1>COMIDAS</h1>
          </div>
          <Row xs={1} md={2} lg={4}>
            {productos.map((producto) =>
              producto.categoria === "comidas" ? (
                <CardProductoInicio
                  key={producto._id}
                  producto={producto}
                  setProductos={setProductos}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  allCountProducts={setCountProducts}
                ></CardProductoInicio>
              ) : (
                <div className="claseVacia">No hay Productos</div>
              )
            )}
          </Row>

          <div className="fuente titulos-inicio" id="tragos">
            <h1>TRAGOS</h1>
          </div>
          <Row xs={1} md={2} lg={4}>
            {productos.map((producto) =>
              producto.categoria === "tragos" ? (
                <CardProductoInicio
                  key={producto._id}
                  producto={producto}
                  setProductos={setProductos}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  total={total}
                  setTotal={setTotal}
                  countProducts={countProducts}
                  setCountProducts={setCountProducts}
                  allCountProducts={setCountProducts}
                ></CardProductoInicio>
              ) : (
                <div className="claseVacia">No hay Productos</div>
              )
            )}
          </Row>
          </Container>

        <a
          href="https://api.whatsapp.com/send?phone=+3815390682&text=Quiero%20Comprar!"
          className="divIcono"
        >
          <BsWhatsapp className="iconoMsj" />
        </a>
      </section>
    </div>
  );
};

export default Inicio;
