import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  HandleDeleteProductDB,
  getAllProducts,
  GetAllPayments,
} from "../../redux/actions/index";
import { Link } from "react-router-dom";
import { Modal } from "../Modal";
import { ProductForm } from "../ProductForm/index";
import Button from "react-bootstrap/Button";
import { SKUForm } from "../SKUForm/index";
import "./index.css";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { allProductsFilter } = useSelector((state) => state);
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
        <SKUForm />

        <button className="btn btn-add" onClick={openAddProductModal}>
          Agregar Producto
        </button>
        <Link to="/transactions">
          <button
            className="btn btn-add"
            onClick={() => dispatch(GetAllPayments())}
          >
            Transacciones
          </button>
        </Link>

        {/* */}

        <table className="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>SKU</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allProductsFilter.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td className="td">{product.sku}</td>

                <td className="td">{product.name}</td>
                {product.offertPrice ? (
                  <td className="td">{product.offertPrice}</td>
                ) : (
                  <td className="td">{product.price}</td>
                )}

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
