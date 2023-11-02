import { Link } from "react-router-dom";
import "./index.css";

export const Products = ({ data }) => {
  return (
    <div className="card">
      <Link className="href" to={`/productDetail/${data.id_Product}`}>
        <img className="card-image" src={data.thumbnail} alt={data.name} />
        <div className="card-details">
          <p className="card-name">{data.name}</p>
          <p className="card-description">{data.description}</p>
        </div>
      </Link>
    </div>
  );
};
