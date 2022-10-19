import {
  CLOTHES_FAILURE,
  CLOTHES_REQUEST,
  CLOTHES_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  clothes: [],
};

export const ClothesProducts = (state = initialState, action) => {
  switch (action.type) {
    case CLOTHES_REQUEST:
      return { loading: true };
    case CLOTHES_SUCCESS:
      return { ...state, loading: false, clothes: action.payload };

    case CLOTHES_FAILURE:
      return { loading: false, error: action.payload, clothes: [] };
    default:
      return state;
  }
};
