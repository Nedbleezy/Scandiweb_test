import {
  ALL_PRODUCTS_FAILURE,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  error: '',
  productList: [],
};
export const AllProducts = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS_REQUEST:
      return { loading: true };
    case ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        productList: action.payload,
      };
    case ALL_PRODUCTS_FAILURE:
      return {
        loading: false,
        productList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
