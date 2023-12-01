import "./index.css";
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button
          className="pagination-btn prev"
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt; Prev
        </button>
      )}
      <span className="pagination-number">{currentPage}</span>
      <span className="total-pages"> de {totalPages} </span>
      {currentPage < totalPages && (
        <button
          className="pagination-btn next"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente &gt;
        </button>
      )}
    </div>
  );
};
