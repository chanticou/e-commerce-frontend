// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getAllProducts } from "../../redux/actions/index";
// import { Products } from "../Products/index";
// import { Pagination } from "../Pagination/index";
// import "./index.css";

// export const ContentProducts = () => {
//   const dispatch = useDispatch();
//   const { allProductsFilter } = useSelector((state) => state);
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);
//   console.log(allProductsFilter, "allProductsFilter");
//   return (
//     <>
//       <div className="content-cards">
//         {allProductsFilter?.length &&
//           allProductsFilter.map((el) => (
//             <Products key={el.id_Product} data={el} />
//           ))}
//       </div>
//       <Pagination />
//     </>
//   );
// };

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, changePage } from "../../redux/actions/index";
import { Products } from "../Products/index";
import { Pagination } from "../Pagination/index";
import "./index.css";

export const ContentProducts = () => {
  const dispatch = useDispatch();
  const { allProductsFilter, currentPage, productsPerPage, totalProducts } =
    useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllProducts(currentPage, productsPerPage));
  }, [dispatch, currentPage, productsPerPage]);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = allProductsFilter.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    dispatch(changePage(newPage));
  };

  return (
    <>
      <div className="content-cards">
        {productsToShow?.length &&
          productsToShow.map((el) => (
            <Products key={el.id_Product} data={el} />
          ))}
      </div>

      <Pagination
        currentPage={currentPage} //1
        totalProducts={totalProducts} //6
        productsPerPage={productsPerPage} //0
        onPageChange={handlePageChange}
      />
    </>
  );
};
