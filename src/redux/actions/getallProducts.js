import axios from 'axios';
import { FETCH_PRODUCT_BY_CATEGORY } from '../../queries/queries';
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAILURE,
} from '../constants';

export const getALLproducts = () => (dispatch) => {
  dispatch({ type: ALL_PRODUCTS_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: FETCH_PRODUCT_BY_CATEGORY,
      variables: {},
    })
    .then((res) => {
      dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: ALL_PRODUCTS_FAILURE, payload: err.message });
    });
};
