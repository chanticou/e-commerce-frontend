import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HandleDeleteProductCart,
  handleClickCounter,
} from "../../redux/actions/index";
import { BsFillCartXFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./index.css";

export const Cart = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { cart } = useSelector((state) => state);

  const totalAllProducts = cart.reduce((accum, item) => {
    const priceToUse = item.offert ? item.offertPrice : item.price;
    return accum + priceToUse * item.quantity;
  }, 0);

  const formatPrice = (price) => {
    return price.toLocaleString("es-AR");
  };
  return (
    <>
      {!cart.length ? (
        <div className="empty-cart">
          <BsFillCartXFill className="empty-cart-icon" />
          <p className="empty-cart-text">Carrito vacío</p>
          <p>¡Parece que aún no has elegido lo que buscas!</p>
          <button className="add-to-cart-button">
            <Link className="add-to-cart-link" to="/">
              Continuar comprando
            </Link>
          </button>
        </div>
      ) : (
        <div className="card-cart">
          <h1 className="cart-name">Carrito</h1>
          {cart.map((el) => (
            <div className="cart-item" key={el.id_Product}>
              <div className="content-image_cart">
                <img
                  className="card-image_cart"
                  src={el.thumbnail}
                  alt={el.name}
                />
              </div>
              <div className="card-carts">
                <p className="card-name_cart">{el.name}</p>
                <p className="card-description_cart">{el.description}</p>
                {el.offertPrice ? (
                  <p className="card-price_cart">
                    ${formatPrice(el.offertPrice)}
                  </p>
                ) : (
                  <p className="card-price_cart">
                    Precio: ${formatPrice(el.price)}
                  </p>
                )}
                <p className="card-price_cart">
                  Subtotal: ${formatPrice(el.price * el.quantity)}
                </p>
                {/* <p className="card-stock_cart">Stock: {el.stock}</p> */}
                <button
                  className="card-delete_button"
                  onClick={() =>
                    dispatch(HandleDeleteProductCart(el.id_Product, cart))
                  }
                >
                  Remove
                </button>
                <div className="counter">
                  <button
                    onClick={() =>
                      el.quantity > 1 &&
                      dispatch(
                        handleClickCounter("decrement", cart, el.id_Product)
                      )
                    }
                  >
                    -
                  </button>

                  <span>{el.quantity}</span>

                  <button
                    onClick={(e) =>
                      el.stock > 0 &&
                      el.quantity > 0 &&
                      dispatch(
                        handleClickCounter("increment", cart, el.id_Product)
                      )
                    }
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="total">
              <span>Total:</span>
              <span>${formatPrice(totalAllProducts)}</span>
            </div>
            <Link className="href" to={`/ticketDetail`}>
              <button className="proceed-to-checkout">Proceder al pago</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
