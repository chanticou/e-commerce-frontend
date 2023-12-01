import React from "react";
import "./index.css";

export const BannerPayment = () => {
  return (
    <div className="banner-container">
      <div className="banner-item">
        <div className="banner-icon">💳</div>
        <div className="banner-text">
          <p>Tarjeta de crédito</p>
        </div>
      </div>
      <div className="banner-item">
        <div className="banner-icon">💳</div>
        <div className="banner-text">
          <p>Tarjeta de débito</p>
        </div>
      </div>
      <div className="banner-item">
        <div className="banner-icon">💵</div>
        <div className="banner-text">
          <p>Cuotas sin tarjeta</p>
        </div>
      </div>
      <div className="banner-item">
        <div className="banner-icon">💵</div>
        <div className="banner-text">
          <p>Efectivo</p>
        </div>
      </div>
    </div>
  );
};
