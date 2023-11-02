import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CreateOrderPayment,
  getSuccessFromBackend,
} from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const TicketDetail = () => {
  let dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  const navigate = useNavigate();
  const totalAllProducts = cart.reduce((accum, item) => accum + item.total, 0);

  const handlePayment = () => {
    dispatch(CreateOrderPayment(totalAllProducts, cart, user));
  };

  return (
    <div className="ticket-container">
      <h2>Resumen de Orden</h2>
      {cart.map((item) => (
        <div className="ticket-item" key={item.id_Product}>
          <div className="ticket-image">
            <img src={item.thumbnail} alt={item.name} />
          </div>
          <div className="ticket-details">
            <p className="ticket-name">{item.name}</p>
            <p className="ticket-description">{item.description}</p>
            <p className="ticket-price">${item.total}</p>
            <p className="ticket-quantity">Cantidad: {item.quantity}</p>
          </div>
        </div>
      ))}
      <div className="ticket-summary">
        <div className="total-amount">
          <span>Total:</span>
          <span>${totalAllProducts}</span>
        </div>
        <button className="confirm-button" onClick={handlePayment}>
          Confirmar y Pagar
        </button>
      </div>
    </div>
  );
};
