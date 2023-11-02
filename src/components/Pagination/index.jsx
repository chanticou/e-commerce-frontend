import "./index.css";

export const Pagination = ({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange,
}) => {
  console.log(totalProducts, "totalProducts");
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="pagination-container">
      {currentPage > 1 && (
        <button
          className="pagination-btn"
          onClick={() => onPageChange(currentPage - 1)}
        >
          &lt; Prev
        </button>
      )}
      {Array.from({ length: totalPages }, (_, index) => (
        <span
          key={index + 1}
          className={`pagination-number ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </span>
      ))}
      {currentPage < totalPages && (
        <button
          className="pagination-btn"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next &gt;
        </button>
      )}
    </div>
  );
};
