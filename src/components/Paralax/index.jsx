import React from "react";
import { Parallax } from "react-parallax";

export const Paralax = () => {
  const imageSrc =
    "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696874253/nasa-Q1p7bh3SHj8-unsplash_t4h2je.jpg";
  // "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696873639/pexels-sinden-sunna-3029916_xn3wju.jpg";
  // "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696873223/pexels-pixabay-373543_shhs5j.jpg";

  return (
    <Parallax
      bgImage={imageSrc}
      strength={500}
      style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
    >
      <div style={{ height: "200px" }}>
        {/* Aquí puedes poner cualquier contenido que se moverá con el efecto parallax */}
        <h1
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Sombra para el texto
          }}
        >
          BE YOURSELF
        </h1>
      </div>
    </Parallax>
  );
};
