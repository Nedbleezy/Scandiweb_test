import axios from 'axios';
import { ALL_CURRENCIES } from '../../queries/queries';
import {
  CHANGE_CURRENCY,
  CURRENCIES_FAILURE,
  CURRENCIES_REQUEST,
  CURRENCIES_SUCCESS,
} from '../constants';

export const getAllCurrencies = () => (dispatch, getState) => {
  dispatch({ type: CURRENCIES_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: ALL_CURRENCIES,
    })
    .then((res) => {
      dispatch({ type: CURRENCIES_SUCCESS, payload: res.data.data.currencies });
    })
    .catch((err) => {
      dispatch({ type: CURRENCIES_FAILURE, payload: err.message });
    });
};

export const changeCurrency = (index) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHANGE_CURRENCY, payload: index });

    localStorage.setItem(
      'currency',
      JSON.stringify(getState().currencies.currencyIndex)
    );
  } catch (error) {
    console.error(error);
  }
};
