import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

export const Transactions = () => {
  const { getAllPayments } = useSelector((state) => state);
  console.log(getAllPayments);
  return (
    <>
      <div className="transactions-container">
        <h2>Transacciones</h2>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID de Transacción</th>
              <th>Total pago</th>
              <th>Estado</th>
              <th>Método de Pago</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Email</th>
              <th>Order ID</th>
              <th>DNI</th>
            </tr>
          </thead>
          <tbody>
            {getAllPayments.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.id_mercado_pago}</td>
                <td>{transaction.transaction_amount}</td>
                <td>{transaction.status}</td>
                <td>{transaction.payment_method_id}</td>
                <td>
                  {new Date(transaction.date_created).toLocaleDateString()}
                </td>
                <td>{transaction.payer_id}</td>
                <td>{transaction.payer_email}</td>
                <td>{transaction.id_order}</td>
                <td>{transaction.payer_identification.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
