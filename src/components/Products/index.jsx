import { Link } from "react-router-dom";
import "./index.css";

export const Products = ({ data }) => {
  const calculateDiscountPercentage = (originalPrice, offertPrice) => {
    if (!originalPrice || !offertPrice) return 0;
    return Math.round((1 - offertPrice / originalPrice) * 100);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("es-AR");
  };

  return (
    <div className="card">
      <Link className="href" to={`/productDetail/${data.id_Product}`}>
        <img className="card-image" src={data.thumbnail} alt={data.name} />
        <div className="card-details">
          <p className="card-name">{data.name}</p>
          <p className="card-description">{data.description}</p>
          <div className="price-container">
            {data.offert ? (
              <>
                <div className="offer-badge">OFERTA DEL DIA</div>
                <p className="original-price">${formatPrice(data.price)}</p>
                <div className="content-newPrice">
                  <p className="offert-price">
                    ${formatPrice(data.offertPrice)}
                  </p>
                  <p className="offert-percentage">
                    {calculateDiscountPercentage(data.price, data.offertPrice)}%
                    OFF
                  </p>
                </div>
              </>
            ) : (
              <p className="regular-price">${formatPrice(data.price)}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
