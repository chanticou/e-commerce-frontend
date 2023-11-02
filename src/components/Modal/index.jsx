import "./index.css";

export const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};
