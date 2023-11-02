import React from "react";

import { Paralax } from "../Paralax/index";
import "./index.css";
export const Footer = () => {
  return (
    <>
      <Paralax />
      <div className="footer-container">
        <div className="footer-section about-section">
          <h5>Acerca de nosotros</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            tenetur debitis soluta natus eveniet unde vitae repellat culpa!
          </p>
        </div>

        <div className="footer-section social-media-section">
          <h5>Síguenos</h5>
          <ul>
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
