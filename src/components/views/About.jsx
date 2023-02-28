import React from "react";
import "../../css/about.css";
import { Card } from "react-bootstrap";
import Local from "../common/img/local.jpg";
import Tragos from "../common/img/tragos.jpg"
import Comida from "../common/img/comida-tabla.jpg"
import atencion from "../common/img/atencion.jpg"
import avatarVaron from "../common/img/hombre.png"
import avatarMujer from "../common/img/mujer.png"
const About = () => {
  return (
    <div className="mainSection">
      <h1 className="fuente text-center my-4">SOMOS VIKINGO CERVECERÍA</h1>
      <div className="fondoDivLocal container">
        <img src={Local} alt="local" className="imgLocal" />
        <p className="p-about">
          Somos el grupo cervecero más innovador y con mayor tradición en
          Argentina. Contamos con 3 locales, donde nuestros colaboradores
          trabajan con el compromiso de sorprender a nuestros consumidores con
          cerveza de calidad y la mejor atención . Con nosotros te aseguramos
          pasar momentos extraordinarios acompañados de nuestro menú de comida
          que combinados con la variedad de cerveza que tenemos la pasarás
          increíble.
        </p>
      </div>

      <section className="divTarjetasAbout">
      <Card className="tarjetas-about">
      <Card.Img variant="top" src={atencion} />
      <Card.Body>
        <Card.Title className="text-center fuente fw-bold">Buena Atención</Card.Title>        
      </Card.Body>
    </Card>
      <Card className="tarjetas-about">
      <Card.Img variant="top" src={Comida} />
      <Card.Body>
        <Card.Title className="text-center fuente fw-bold">Nuestra Comida</Card.Title>        
      </Card.Body>
    </Card>
      <Card className="tarjetas-about">
      <Card.Img variant="top" src={Tragos} />
      <Card.Body>
        <Card.Title className="text-center fuente fw-bold">Variedad en Tragos</Card.Title>        
      </Card.Body>
    </Card>
        
      </section>

<div className="container">
<hr />

</div>

      <section className="container mt-5">
        <h2 className="fuente fw-bold">INTEGRANTES - FUNDADORES</h2>

<div  className="d-flex justify-content-center">

        <Card className="divAvatar">
      <Card.Img variant="top" src={avatarVaron} className="imgAvatar" />
      <Card.Body>
        <Card.Title className="text-center fuente fw-bold">Eloy Pintos</Card.Title>        
      </Card.Body>
    </Card>
        <Card className="divAvatar">
      <Card.Img variant="top" src={avatarMujer} className="imgAvatar" />
      <Card.Body>
        <Card.Title className="text-center fuente fw-bold">María Jose Aguero</Card.Title>        
      </Card.Body>
    </Card>
       
</div>
      </section>
    </div>
  );
};

export default About;
