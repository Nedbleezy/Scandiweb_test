import {
  CHANGE_CURRENCY,
  CURRENCIES_FAILURE,
  CURRENCIES_REQUEST,
  CURRENCIES_SUCCESS,
} from '../constants';

const initialState = {
  currencies: [],
  currencyIndex: 0,
  loading: false,
  error: '',
};

if (localStorage.getItem('currency')) {
  initialState.currencyIndex = JSON.parse(localStorage.getItem('currency'));
} else {
  initialState.currencyIndex = 0;
}

export const allCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCIES_REQUEST:
      return { loading: true };
    case CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        currencies: action.payload,
        currencyIndex: 0,
      };
    case CURRENCIES_FAILURE:
      return { loading: false, error: action.payload, currencies: [] };

    case CHANGE_CURRENCY:
      return {
        ...state,
        currencyIndex: action.payload,
      };
    default:
      return state;
  }
};
