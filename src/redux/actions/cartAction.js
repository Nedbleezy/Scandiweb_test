import { ADD_TO_CART_SUCCESS } from '../constants';

export const AddToCart = (data) => (dispatch, getState) => {
  dispatch({ type: ADD_TO_CART_SUCCESS, payload: data });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const IncreaseQty = (id) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_SUCCESS, payload: id });
};
