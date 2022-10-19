import axios from 'axios';
import { FETCH_PRODUCT_BY_CATEGORY } from '../../queries/queries';
import { TECH_REQUEST, TECH_SUCCESS, TECH_FAILURE } from '../constants';

export const getTechproducts = (tech) => (dispatch) => {
  dispatch({ type: TECH_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: FETCH_PRODUCT_BY_CATEGORY,
      variables: {
        input: {
          title: tech,
        },
      },
    })
    .then((res) => {
      dispatch({ type: TECH_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: TECH_FAILURE, payload: err.message });
    });
};
