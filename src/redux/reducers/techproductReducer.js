import { TECH_FAILURE, TECH_REQUEST, TECH_SUCCESS } from '../constants';

const initialState = {
  loading: false,
  error: null,
  tech: [],
};

export const TechProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TECH_REQUEST:
      return { loading: true };
    case TECH_SUCCESS:
      return { ...state, loading: false, tech: action.payload };

    case TECH_FAILURE:
      return { loading: false, error: action.payload, tech: [] };
    default:
      return state;
  }
};
