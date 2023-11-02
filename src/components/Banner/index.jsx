import "./index.css";

export const Banner = () => {
  return (
    <div className="futuristic-container">
      <div className="futuristic-line"></div>
      <div className="futuristic-line"></div>
      <div className="futuristic-line"></div>
    </div>
  );
};

// import React, { useState, useEffect } from "react";
// import "./index.css";

// const images = [
//   "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696160410/e-commerce/pexels-amar-preciado-14824330_bf6kw5.jpg",
//   "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696160417/e-commerce/pexels-mariah-n-9281229_diinfa.jpg",
//   "https://res.cloudinary.com/dg05pzjsq/image/upload/v1696160410/e-commerce/pexels-amar-preciado-14824330_bf6kw5.jpg",
// ];
// export const Banner = ({ promoText, promoCode }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="promoBanner"
//       style={{ backgroundImage: `url(${images[currentIndex]})` }}
//     >
//       <div className="overlay">
//         <h2 className="promoText">{promoText}</h2>
//         <div className="codeWrapper">
//           <span className="promoCode">
//             Use Code: <strong>{promoCode}</strong>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
