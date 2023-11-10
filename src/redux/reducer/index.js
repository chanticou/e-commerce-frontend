import * as actions from "../actions_types";

const initialState = {
  allProducts: [],
  allProductsFilter: [],
  productDetail: {},
  cart: [],
  isAdmin: false,
  user: {},
  categories: [],
  categoryProducts: [],
  isAuthenticated: false,
  currentPage: 1,
  productsPerPage: 9,
  totalProducts: 0,
  productAddedPopup: {
    show: false,
    productName: "",
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        allProductsFilter: action.payload,
        totalProducts: action.payload.length,
      };
    case actions.FILTER_BY_TYPE:
      return {
        ...state,
        allProductsFilter: action.payload,
      };
    case actions.GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case actions.ADD_TO_CART:
      return {
        ...state,
        cart: [...action.payload],
        isAuthenticated: action.isAuthenticated,
        // totalProducts: action.quantity,
      };
    case actions.DELETE_PRODUCT:
      return {
        ...state,
        cart: [...action.payload],
        // totalProducts: action.quantity,
      };
    case actions.COUNTER_PRODUCT:
      return {
        ...state,
        cart: [...action.payload],
        // totalProducts: action.quantity,
      };
    case actions.LOGIN_USER:
      console.log(action.isAuthenticated);
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
        isAuthenticated: action.payload.isAuthenticated,
        totalProducts: action.quantity,
      };
    case actions.DELETE_PRODUCT_DB:
      return {
        ...state,
        allProducts: state.allProducts
          ? state.allProducts.filter(
              (product) => product.id_Product !== action.payload
            )
          : [],

        allProductsFilter: state.allProductsFilter.filter(
          (product) => product.id_Product !== action.payload
        ),
      };

    case actions.CREATE_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
        allProductsFilter: [...state.allProductsFilter, action.payload],
      };

    case actions.UPDATE_PRODUCT:
      const updatedProducts = state.allProducts.map((product) =>
        product.id_Product === action.payload.id_Product
          ? action.payload
          : product
      );

      const updatedFilteredProducts = state.allProductsFilter.map((product) =>
        product.id_Product === action.payload.id_Product
          ? action.payload
          : product
      );

      return {
        ...state,
        allProducts: updatedProducts,
        allProductsFilter: updatedFilteredProducts,
      };

    case actions.GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case actions.GET_CATEGORY_PRODUCT:
      return {
        ...state,
        allProductsFilter: action.payload,
      };

    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case actions.SET_PRODUCTS_PER_PAGE:
      return {
        ...state,
        productsPerPage: action.payload,
      };
    case actions.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case actions.SHOW_PRODUCT_ADDED_POPUP:
      return {
        ...state,
        productAddedPopup: {
          show: true,
          productName: action.payload,
        },
      };
    case actions.GET_FILTER_SKU:
      return {
        ...state,
        allProductsFilter: action.payload,
      };
    // case actions.CREATE_USER:
    //   return {
    //     users: action.payload,
    //   };

    // case actions.LOGIN_USER:
    //   return {
    //     user: action.payload,
    //   };

    // case actions.ADD_TO_CART:
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };

    // case actions.CART:
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };

    // case actions.DELETE_PRODUCT:
    //   return {
    //     ...state,
    //     addToCart: action.payload,
    //     cart: action.payload,
    //     totalProducts: state.totalProducts - action.quantity,
    //     totalCount: state.totalCount - action.total,
    //   };

    // case actions.FILTER_TYPE:
    //   return {
    //     ...state,
    //     filterAllFoods: [...action.payload],
    //   };
    // case actions.COUNTER_PRODUCTS:
    //   return {
    //     ...state,
    //     cart: action.payload,
    //   };
    // case actions.TOTAL_PRODUCTS:
    //   return {
    //     ...state,
    //     totalProducts: action.payload,
    //   };
    // case actions.TOTAL_COUNT:
    //   return {
    //     ...state,
    //     totalCount: action.payload,
    //   };
    default:
      return state;
  }
}
