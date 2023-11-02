import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  GET_ALL_PRODUCTS,
  FILTER_BY_TYPE,
  GET_PRODUCT_DETAIL,
  ADD_TO_CART,
  COUNTER_PRODUCT,
  LOGIN_USER,
  CREATE_PRODUCT,
  DELETE_PRODUCT_DB,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_CATEGORY,
  GET_CATEGORY_PRODUCT,
  GET_CREATE_ORDER,
  SET_CURRENT_PAGE,
  SET_PRODUCTS_PER_PAGE,
  CHANGE_PAGE,
} from "../actions_types";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const url = "http://localhost:4000/getAllProducts";
      const result = await axios.get(url);

      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: result.data.payload,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function FilterByType(typeFilter) {
  return (dispatch, getState) => {
    try {
      const { allProducts } = getState();

      let filteredProducts = allProducts;

      if (typeFilter !== "All") {
        filteredProducts = allProducts.filter(
          (product) => product.type === typeFilter
        );
      }

      dispatch({
        type: FILTER_BY_TYPE,
        payload: filteredProducts,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function ProductDetailFunction(id_product) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/getProductById/${id_product}`;
      const result = await axios.get(url);

      if (result.data && result.data.payload) {
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: result.data.payload,
        });
      } else {
        console.error("Producto no encontrado.");
      }
    } catch (err) {
      console.log(err);
    }
  };
}

export function handleAddToCart(productDetail, cart, isAuthenticated) {
  return async function (dispatch) {
    try {
      let found = cart.find((el) => el.id_Product === productDetail.id_Product);
      if (found) {
        productDetail["quantity"] += 1;
      } else {
        productDetail.quantity = 1;
        productDetail["total"] = productDetail.priceUSDAmd;
        cart.push(productDetail);
      }

      dispatch({
        type: ADD_TO_CART,
        payload: [...cart],
        isAuthenticated: isAuthenticated,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function HandleDeleteProductCart(product_id, cart) {
  return function (dispatch) {
    try {
      let deleteCartProduct = cart.filter((el) => el.id_Product !== product_id);

      dispatch({
        type: DELETE_PRODUCT,
        payload: [...deleteCartProduct],
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function handleClickCounter(type_name, cart, product_id) {
  return function (dispatch) {
    try {
      if (type_name === "increment") {
        cart = cart.map((el) => {
          if (el.id_Product === product_id) {
            let newQuantity = el.quantity + 1;
            let newStock = Math.max(el.stock - 1, 0);
            let newTotal = newQuantity * el.priceUSDAmd;
            return {
              ...el,
              quantity: newQuantity,
              total: newTotal,
              stock: newStock,
            };
          }
          return el;
        });
      }
      if (type_name === "decrement") {
        cart = cart.map((el) => {
          if (el.id_Product === product_id) {
            let newQuantity = el.quantity - 1;
            let newStock = Math.max(el.stock + 1, 0);
            let newTotal = el.total - el.priceUSDAmd;

            return {
              ...el,
              quantity: newQuantity,
              total: newTotal,
              stock: newStock,
            };
          }
          return el;
        });
      }
      dispatch({
        type: COUNTER_PRODUCT,
        payload: [...cart],
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function LoginUser(input, isAuthenticated) {
  return async function (dispatch) {
    try {
      const url = "http://localhost:4000/signIn";
      const response = await axios.post(url, input);

      const user = response.data.payload.user;
      const isAdmin = user.user_type === "admin";

      dispatch({
        type: LOGIN_USER,
        payload: {
          user,
          isAdmin,
          isAuthenticated: isAuthenticated,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function CreateProduct(product) {
  return async function (dispatch) {
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("type", product.type);
      formData.append("thumbnail", product.thumbnail);
      formData.append("price", product.price);
      formData.append("description", product.description);
      formData.append("stock", product.stock);

      const url = "http://localhost:4000/createProduct";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: CREATE_PRODUCT,
        payload: response.data.payload,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function HandleDeleteProductDB(id_product) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/deleteProduct/${id_product}`;
      await axios.delete(url);

      dispatch({
        type: DELETE_PRODUCT_DB,
        payload: id_product,
      });

      return Promise.resolve();
    } catch (err) {
      console.error(err);
      return Promise.reject(err);
    }
  };
}

export function UpdateProduct(id_product, input) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/updateProduct/${id_product}`;
      let response = await axios.put(url, input);

      dispatch({
        type: UPDATE_PRODUCT,
        payload: response.data.product,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function GetCategory() {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/categories`;
      let response = await axios.get(url);
      dispatch({
        type: GET_CATEGORY,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export function GetCategoryProduct(categoryId) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/products/category/${categoryId}`;
      let response = await axios.get(url);

      dispatch({
        type: GET_CATEGORY_PRODUCT,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

// Pagination
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page,
  };
};

export const setProductsPerPage = (number) => {
  return {
    type: SET_PRODUCTS_PER_PAGE,
    payload: number,
  };
};

export const changePage = (newPage) => {
  return {
    type: CHANGE_PAGE,
    payload: newPage,
  };
};

// PAYMENT BACKEND
export function CreateOrderPayment(total, cart, user) {
  return async function (dispatch) {
    try {
      const url = `http://localhost:4000/createOrder`;
      let response = await axios.post(url, {
        total: total,
        cart: cart,
        user: user,
      });
      console.log(response, "ARESPONDE");

      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        return response.data;
      }

      dispatch({
        type: GET_CREATE_ORDER,
        payload: response.data,
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export const getSuccessFromBackend = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/success");
      // console.log(navigation);
      console.log(response, "AKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
      if (response.data === "Success") {
        // navigation.navigate("/");
        console.log("entro==============================0");
      }
    } catch (error) {
      console.error("Hubo un error al obtener datos:", error);
    }
  };
};
