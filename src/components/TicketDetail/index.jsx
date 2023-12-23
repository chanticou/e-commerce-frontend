import { React, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CreateOrderPayment,
  getSuccessFromBackend,
} from "../../redux/actions/index";
import "./index.css";

export const TicketDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  let dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);

  const totalAllProducts = cart.reduce((accum, item) => {
    const priceToUse = item.offert ? item.offertPrice : item.price;
    return accum + priceToUse * item.quantity;
  }, 0);

  const handlePayment = () => {
    dispatch(CreateOrderPayment(totalAllProducts, cart, user));
  };

  const formatPrice = (price) => {
    return price.toLocaleString("es-AR");
  };
  return (
    <>
      <div className="order-resume_title">
        <h2>Resumen de Orden</h2>
      </div>
      <div className="ticket-container">
        {cart.map((item) => (
          <div className="ticket-item" key={item.id_Product}>
            <div className="ticket-image">
              <img src={item.thumbnail} alt={item.name} />
            </div>
            <div className="ticket-details">
              <p className="ticket-name">{item.name}</p>
              <p className="ticket-description">{item.description}</p>
              {item.offertPrice ? (
                <p className="card-price_cart">
                  ${formatPrice(item.offertPrice)}
                </p>
              ) : (
                <p className="card-price_cart">${formatPrice(item.total)}</p>
              )}
              <p className="ticket-quantity">Cantidad: {item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="ticket-summary">
          <div className="total-amount">
            <span>Total:</span>
            <span>${formatPrice(totalAllProducts)}</span>
          </div>
          <button className="confirm-button" onClick={handlePayment}>
            Confirmar y Pagar
          </button>
        </div>
      </div>
    </>
  );
};
