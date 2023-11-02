import { useLocation } from "react-router-dom";

export const SuccessPayment = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const collection_id = searchParams.get("collection_id");
  const collection_status = searchParams.get("collection_status");
  const payment_id = searchParams.get("payment_id");
  const external_reference = searchParams.get("external_reference");

  return (
    <div>
      <h1>¡Pago exitoso!</h1>
      <p>ID de la colección: {collection_id}</p>
      <p>Estado de la colección: {collection_status}</p>
      <p>ID del pago: {payment_id}</p>
      <p>Referencia externa: {external_reference}</p>
      {/* Añade más detalles si es necesario */}
    </div>
  );
};
