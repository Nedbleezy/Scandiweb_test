import axios from 'axios';
import { GET_PRODUCTDETAILS_BY_ID } from '../../queries/queries';
import {
  PRODUCTDETAILS_REQUEST,
  PRODUCTDETAILS_SUCCESS,
  PRODUCTDETAILS_FAILURE,
} from '../constants';

export const getALLproducts = (id) => (dispatch) => {
  dispatch({ type: PRODUCTDETAILS_REQUEST });

  return axios
    .post('http://localhost:4000/graphgl', {
      query: GET_PRODUCTDETAILS_BY_ID,
      variables: {
        id: id,
      },
    })
    .then((res) => {
      dispatch({ type: PRODUCTDETAILS_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCTDETAILS_FAILURE, payload: err.message });
    });
};
