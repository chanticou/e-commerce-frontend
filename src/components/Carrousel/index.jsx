import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/images/image-1.jpg";
import image2 from "../../assets/images/image-2.jpg";
import image3 from "../../assets/images/image-3.jpg";
import "./index.css";

export const CarrouselImages = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          {/* La primera imagen del carrusel */}
          <img className="custom-image" src={image1} alt="Image 1" />
          <Carousel.Caption>
            <h3 className="custom-text">TECNOLOGIA</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* La segunda imagen del carrusel */}
          <img
            className="custom-image"
            src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1698399278/pexels-tima-miroshnichenko-7047246_eatedj.jpg"
            alt="Image 2"
          />
          <Carousel.Caption>
            <h3 className="custom-text_2">FUTURO</h3>
            <p>Descubre la próxima generación de tecnología.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* La tercera imagen del carrusel */}
          <img className="custom-image" src={image3} alt="Image 3" />
          <Carousel.Caption>
            {/* <h3 className="custom-text">INNOVACIÓN </h3> */}
            <p>Avanzando hacia un mañana más brillante.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
