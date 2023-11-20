import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateProduct,
  UpdateProduct,
  OffertFunction,
} from "../../redux/actions/index";
import Swal from "sweetalert2";
import "./index.css";

export const ProductForm = ({ product, closeModal }) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);
  const [err, setErr] = useState(false);
  const [input, setInput] = useState(
    product || {
      sku: "",
      name: "",
      description: "",
      price: 0,
      thumbnail: null,
      stock: 0,
      offert: false,
      offertPrice: 0,
    }
  );

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setInput({ ...input, thumbnail: e.target.files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleChangeOffert = (e) => {
    setInput({ ...input, offert: e.target.checked });
    dispatch(OffertFunction(input.oferta));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      // Update product
      dispatch(UpdateProduct(product.id_Product, input)).then(() => {
        if (closeModal) closeModal();
      });
    } else {
      // Create product
      if (
        !input.sku ||
        !input.name ||
        !input.description ||
        !input.price ||
        !input.thumbnail ||
        !input.stock
      ) {
        setErr(true);
      } else {
        dispatch(CreateProduct(input)).then(() => {
          if (closeModal) closeModal();
        });
        Swal.fire({
          icon: "success",
          title: "Producto creado con exito!",
        });
        setErr(false);
      }
    }
  };

  return (
    <form className="form-product" onSubmit={handleSubmit}>
      <label className="label-product">
        <input
          className="input-product"
          type="text"
          name="sku"
          placeholder="Sku..."
          value={input.sku.toUpperCase()}
          onChange={handleChange}
        />
      </label>
      <label className="label-product">
        <input
          className="input-product"
          type="text"
          name="name"
          placeholder="Nombre..."
          value={input.name}
          onChange={handleChange}
        />
      </label>
      <label className="label-product">
        <input
          className="input-product"
          type="text"
          name="description"
          value={input.description}
          onChange={handleChange}
          placeholder="Descripcion..."
        />
      </label>
      <input
        className="input-product"
        type="file"
        accept="image/*"
        name="thumbnail"
        onChange={handleChange}
      />
      <label className="label-product">
        <input
          className="input-product"
          type="number"
          name="price"
          value={input.price}
          placeholder="Precio..."
          onChange={handleChange}
        />
      </label>

      <label className="label-product">
        <input
          className="input-product"
          type="number"
          name="stock"
          value={input.stock}
          onChange={handleChange}
          placeholder="Stock..."
        />
      </label>
      <label className="label-product__oferta">
        Oferta:
        <input
          className="input-product"
          type="checkbox"
          name="offert"
          checked={input.offert}
          onChange={(e) => handleChangeOffert(e)}
        />
      </label>
      {input.offert && (
        <label className="label-product">
          <input
            className="input-product"
            type="number"
            name="offertPrice"
            value={input.offertPrice}
            placeholder="Precio de Oferta..."
            onChange={handleChange}
          />
        </label>
      )}
      {err && (
        <p style={{ color: "red" }}>Por favor ingresar todos los datos</p>
      )}
      <button className="button-product" type="submit">
        DONE
      </button>
    </form>
  );
};
