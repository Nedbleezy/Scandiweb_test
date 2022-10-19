import {
  PRODUCTDETAILS_FAILURE,
  PRODUCTDETAILS_REQUEST,
  PRODUCTDETAILS_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  productDetails: [],
};

export const ProductDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTDETAILS_REQUEST:
      return { loading: true };
    case PRODUCTDETAILS_SUCCESS:
      return { ...state, loading: false, productDetails: action.payload };

    case PRODUCTDETAILS_FAILURE:
      return { loading: false, error: action.payload, productDetails: [] };
    default:
      return state;
  }
};
