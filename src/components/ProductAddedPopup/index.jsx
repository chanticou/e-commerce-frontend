import React from "react";
import "./index.css";

export const ProductAddedPopup = ({ show, productName, onHide }) => {
  const [shouldRender, setShouldRender] = React.useState(show);
  const [isAnimatingOut, setIsAnimatingOut] = React.useState(false);

  // Handle the exit animation
  const startHideSequence = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false); // Reset the animation state
      onHide(); // Call the onHide function to update the parent state
    }, 500); // This should be the length of your animation
  };

  React.useEffect(() => {
    if (show) {
      setShouldRender(true);
    } else if (!show && shouldRender) {
      startHideSequence();
    }
  }, [show, shouldRender]);

  // Remove the popup from the DOM after the hide animation
  const onAnimationEnd = () => {
    if (!show && !isAnimatingOut) {
      setShouldRender(false);
    }
  };

  // Optional: if you want to apply an animation class when showing the popup, you can conditionally set a class name here
  const popupClassName = `popup-background ${
    isAnimatingOut ? "slide-out" : ""
  }`;

  return (
    shouldRender && (
      <div className={popupClassName} onAnimationEnd={onAnimationEnd}>
        <div className="popup-container">
          <button className="close-btn" onClick={startHideSequence}>
            ×
          </button>
          <div className="popup-content">
            <h2>Product Added!</h2>
            <p>{productName} has been added to your cart.</p>

            <button className="go-to-cart-btn">Go to Cart</button>
            {/* TODO: Navigate to cart */}
          </div>
        </div>
      </div>
    )
  );
};
