import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateProduct, UpdateProduct } from "../../redux/actions/index";
import "./index.css";

export const ProductForm = ({ product, closeModal }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(
    product || {
      name: "",
      type: "",
      thumbnail: null,
      price: 0,
      description: "",
      stock: 0,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      // Update product
      console.log(product);
      dispatch(UpdateProduct(product.id_Product, input)).then(() => {
        if (closeModal) closeModal();
      });
    } else {
      // Create product
      dispatch(CreateProduct(input)).then(() => {
        if (closeModal) closeModal();
      });
    }
  };
  return (
    <form className="form-product" onSubmit={handleSubmit}>
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
          name="type" // Cambio: Usar "thumbnail" como nombre
          value={input.type}
          placeholder="Tipo..."
          onChange={handleChange}
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
          type="text"
          name="description"
          value={input.description}
          onChange={handleChange}
          placeholder="Descripcion..."
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
      <button className="button-product" type="submit">
        DONE
      </button>
    </form>
  );
};
