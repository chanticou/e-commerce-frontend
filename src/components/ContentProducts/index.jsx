import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, changePage } from "../../redux/actions/index";
import { Products } from "../Products/index";
import { Pagination } from "../Pagination/index";
import { BannerPayment } from "../BannerPayment/index";
import { FiltersCarrousel } from "../FiltersCarrousel/index";
import "./index.css";

export const ContentProducts = () => {
  const dispatch = useDispatch();
  const { allProductsFilter, currentPage, productsPerPage, categories } =
    useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(getAllProducts(currentPage, productsPerPage));
  // }, [dispatch, currentPage, productsPerPage]);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const sortedProducts = allProductsFilter.sort((a, b) => {
    if (a.offert && !b.offert) return -1;
    if (!a.offert && b.offert) return 1;
    return 0;
  });

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = sortedProducts.slice(startIndex, endIndex);

  const totalProductsPerPage = allProductsFilter.length;
  const totalPages = Math.ceil(totalProductsPerPage / productsPerPage);

  const handlePageChange = (newPage) => {
    dispatch(changePage(newPage));
  };

  return (
    <>
      <div>
        <FiltersCarrousel categories={categories} />
      </div>
      <div className="content-cards">
        {productsToShow.length > 0 &&
          productsToShow.map((el) => (
            <Products key={el.id_Product} data={el} />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        productsPerPage={productsPerPage}
        onPageChange={handlePageChange}
      />
      <BannerPayment />
    </>
  );
};
