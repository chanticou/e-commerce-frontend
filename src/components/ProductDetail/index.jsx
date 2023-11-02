import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductDetailFunction,
  FilterByType,
  handleAddToCart,
} from "../../redux/actions/index";
import Swal from "sweetalert2";
import "./index.css";

export const ProductDetail = () => {
  let dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(true); // Establecer inicialmente a true para mostrar el spinner primero

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false); // Desactivar el spinner después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { id_product } = useParams();
  const { loginWithRedirect } = useAuth0();
  const { allProductsFilter, productDetail, cart, isAuthenticated } =
    useSelector((state) => state);

  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    dispatch(ProductDetailFunction(id_product, allProductsFilter)).then(() =>
      setShowSpinner(false)
    );
    dispatch(FilterByType());
  }, [id_product]);
  const handleAdd = () => {
    if (!isAuthenticated) {
      // Mostrar el popup SweetAlert2 para informar al usuario
      Swal.fire({
        icon: "error",
        title: "Authentication Required",
        text: "You need to be logged in to add items to your cart.",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirigir al usuario al inicio de sesión de Auth0
          loginWithRedirect();
        }
      });
    } else {
      // Continuar con la lógica actual de añadir al carrito
      dispatch(handleAddToCart(productDetail, cart, isAuthenticated));
      setIsAdded(true);
    }
  };

  return (
    <>
      {showSpinner ? (
        <div className="loading-spinner">Loading...</div> // Puedes reemplazar esto con tu propio spinner
      ) : (
        <div className="detail-container">
          <div className="image-container">
            <img
              className="product-image_detail"
              src={productDetail.thumbnail}
              alt={productDetail.name}
            />
          </div>
          <div className="info-container">
            <h2 className="product-title">{productDetail.name}</h2>
            <p className="product-description">{productDetail.description}</p>
            <div className="content-button_price">
              <div className="content-price">
                <p className="product-price">${productDetail.priceUSDAmd}</p>
              </div>

              <div>
                <button
                  className="add-to-cart-button"
                  onClick={handleAdd}
                  disabled={isAdded}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};