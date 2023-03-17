import React from 'react';
import "../../../css/inicio.css"
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../common/img/banner1.png"
import banner2 from "../../common/img/banner2.png"
import banner3 from "../../common/img/banner3.png"

const Carrousel = () => {
    return (
        <div >
             <Carousel className='divCarousel' >
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarrousel"
          src={banner1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarrousel"
          src={banner2}
          
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgCarrousel"
          src={banner3}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Carrousel;