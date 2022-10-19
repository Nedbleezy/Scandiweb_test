import axios from 'axios';
import { ALL_PRODUCT_CATEGORIES } from '../../queries/queries';
import {
  GETCATEGORIES_FAILURE,
  GETCATEGORIES_REQUEST,
  GETCATEGORIES_SUCCESS,
} from '../constants';

export const getAllCategories = () => (dispatch) => {
  dispatch({ type: GETCATEGORIES_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: ALL_PRODUCT_CATEGORIES,
    })
    .then((res) => {
      dispatch({
        type: GETCATEGORIES_SUCCESS,
        payload: res.data.data.categories,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETCATEGORIES_FAILURE,
        payload: err.message,
      });
    });
};
