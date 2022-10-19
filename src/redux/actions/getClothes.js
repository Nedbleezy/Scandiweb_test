import axios from 'axios';
import { FETCH_PRODUCT_BY_CATEGORY } from '../../queries/queries';
import {
  CLOTHES_REQUEST,
  CLOTHES_SUCCESS,
  CLOTHES_FAILURE,
} from '../constants';

export const getClothes = (clothes) => (dispatch) => {
  dispatch({ type: CLOTHES_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: FETCH_PRODUCT_BY_CATEGORY,
      variables: {
        input: {
          title: clothes,
        },
      },
    })
    .then((res) => {
      dispatch({ type: CLOTHES_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: CLOTHES_FAILURE, payload: err.message });
    });
};
