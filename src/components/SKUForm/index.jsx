import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProductBySKU } from "../../redux/actions/index";
import "./index.css";

export const SKUForm = () => {
  const [searchSKU, setSearchSKU] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const { allProducts, allProductsFilter } = useSelector((state) => state);

  const handleSearchChange = (e) => {
    const skuValue = e.target.value.toUpperCase();
    setSearchSKU(skuValue);
    setErr(false);

    if (skuValue) {
      dispatch(searchProductBySKU(skuValue, allProducts, allProductsFilter));
    } else {
      dispatch(searchProductBySKU("", allProducts));
    }
  };

  return (
    <form className="form-product">
      <input
        className="sku_input"
        type="text"
        placeholder="Buscar por SKU..."
        value={searchSKU.toUpperCase()}
        onChange={handleSearchChange}
      />
      {err && <p style={{ color: "red" }}>Por favor ingresar un dato</p>}
      {/* <button type="submit" class="btn btn-outline-success">
        Buscar
      </button> */}
    </form>
  );
};
