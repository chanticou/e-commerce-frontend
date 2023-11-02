import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HandleDeleteProductDB,
  getAllProducts,
} from "../../redux/actions/index";
import { Modal } from "../Modal";
import { ProductForm } from "../ProductForm/index";
import Button from "react-bootstrap/Button";

import "./index.css";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const openModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentProduct(null);
    setIsModalOpen(false);
  };

  const openAddProductModal = () => {
    setCurrentProduct(null);
    setIsModalOpen(true);
  };
  const deleteById = (id_product) => {
    dispatch(HandleDeleteProductDB(id_product))
      .then(() => {
        dispatch(getAllProducts());
      })
      .catch((error) => {
        console.error("Error eliminando el producto:", error);
      });
  };

  return (
    <>
      <div className="content_dashboard">
        <h1 className="dashboard-title">Dashboard</h1>
        <button className="btn btn-add" onClick={openAddProductModal}>
          Agregar Producto
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="product-image"
                  />
                </td>

                <td className="td">{product.name}</td>
                <td className="td">{product.priceUSDAmd}</td>

                <td>
                  <Button
                    variant="outline-success"
                    onClick={() => openModal(product)}
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => deleteById(product.id_Product)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isModalOpen && (
          <Modal onClose={closeModal}>
            <ProductForm product={currentProduct} closeModal={closeModal} />
          </Modal>
        )}
      </div>
    </>
  );
};