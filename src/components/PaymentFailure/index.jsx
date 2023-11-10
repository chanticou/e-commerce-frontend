import { useLocation } from "react-router-dom";

export const PaymentFailure = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const collection_id = searchParams.get("collection_id");
  const collection_status = searchParams.get("collection_status");
  const payment_id = searchParams.get("payment_id");

  return (
    <div className="payment-approved-container">
      <h1 className="payment-approved-title">Pago Aprobado</h1>
      <p className="payment-approved-text">Collection ID: {collection_id}</p>
      <p className="payment-approved-text">
        Collection Status: {collection_status}
      </p>
      <p className="payment-approved-text">Payment ID: {payment_id}</p>
    </div>
  );
};
