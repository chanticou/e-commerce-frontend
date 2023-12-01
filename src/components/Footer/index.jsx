import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Paralax } from "../Paralax/index";
import "./index.css";
export const Footer = () => {
  return (
    <>
      <Paralax />
      <div className="footer-container">
        <div className="footer-section contact-section">
          <h5 className="footer-title">Contacto</h5>
          <p>¿Tienes alguna pregunta? Envíanos un correo electrónico a:</p>
          <p>
            <a href="mailto:contacto@tusitio.com">
              ventas@solsoftcomputacion.com.ar
            </a>
          </p>
        </div>

        <div className="footer-section terms-section">
          <h5>Términos y condiciones</h5>
          <Nav.Link as={Link} to="/termsAndConditions">
            Leer los términos completos
          </Nav.Link>
        </div>

        <div className="footer-section social-media-section">
          <h5 className="follow-us">Síguenos</h5>
          <ul className="ul_footer">
            <li>
              <img
                src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1696769214/instagram-logo2_cbzsmz.png"
                alt="Instagram"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1696769214/twitter-logo_npcw27.png"
                alt="Twitter"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1696769213/logo-facebook_sdta07.png"
                alt="Facebook"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
