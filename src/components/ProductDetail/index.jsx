import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import {
  ProductDetailFunction,
  FilterByType,
  handleAddToCart,
  showProductAddedPopup,
} from "../../redux/actions/index";
// import { TermsAndConditionsPopup } from "../TermsAndConditionsPopup/index";
import Swal from "sweetalert2";
import "./index.css";

export const ProductDetail = () => {
  let dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const { id_product } = useParams();
  const { allProductsFilter, productDetail, cart, isAuthenticated } =
    useSelector((state) => state);

  const [showSpinner, setShowSpinner] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  // terms and conditions
  // const [termsAccepted, setTermsAccepted] = useState(
  //   localStorage.getItem("termsAccepted") === "true"
  // );
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    dispatch(ProductDetailFunction(id_product, allProductsFilter)).then(() =>
      setShowSpinner(false)
    );
    dispatch(FilterByType());
  }, [id_product]);

  // const handleAcceptTerms = () => {
  //   setTermsAccepted(true);
  //   localStorage.setItem("termsAccepted", "true");
  //   setShowTermsPopup(false);
  // };

  const handleAdd = () => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "error",
        title: "Authentication Required",
        text: "You need to be logged in to add items to your cart.",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          loginWithRedirect();
        }
      });
      // } else if (!termsAccepted) {
      // setShowTermsPopup(true);
    } else {
      // El usuario está autenticado y ha aceptado los términos
      dispatch(handleAddToCart(productDetail, cart, isAuthenticated));
      setIsAdded(true);
      dispatch(showProductAddedPopup(productDetail));
    }
  };
  const formatPrice = (price) => {
    return price.toLocaleString("es-AR");
  };

  return (
    <>
      {showSpinner && <div className="loading-spinner">Loading...</div>}
      {!showSpinner && (
        <>
          {/* {showTermsPopup && (
            <TermsAndConditionsPopup onAccept={handleAcceptTerms} />
          )} */}
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
              <p className="product-description">{productDetail.sku}</p>
              <div className="content-button_price">
                <div className="content-price">
                  {productDetail.offert ? (
                    <>
                      <div className="content-productPrice_offertPrice">
                        <p className="product-price original-price">
                          ${formatPrice(productDetail.price)}
                        </p>
                        <p className="product-price offert-price">
                          <span className="offert-price_product">
                            $ {formatPrice(productDetail.offertPrice)}
                          </span>
                          <span className="offert-percentage">23% OFF</span>
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="product-price">
                      ${formatPrice(productDetail.price)}
                    </p>
                  )}
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
        </>
      )}
    </>
  );
};
