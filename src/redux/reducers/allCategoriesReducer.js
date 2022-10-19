import {
  GETCATEGORIES_FAILURE,
  GETCATEGORIES_REQUEST,
  GETCATEGORIES_SUCCESS,
} from '../constants';

const initialState = {
  categories: [],
  loading: false,
  error: '',
};

export const allCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETCATEGORIES_REQUEST:
      return { loading: true };
    case GETCATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        categories: action.payload,
      };
    case GETCATEGORIES_FAILURE:
      return { loading: false, error: action.payload, currencies: [] };
    default:
      return state;
  }
};
