import { ADD_TO_CART_SUCCESS, INCREASE_QTY } from '../constants';
const initialState = {
  cartItems: [],
};

if (localStorage.getItem('cartItems')) {
  initialState.cartItems = JSON.parse(localStorage.getItem('cartItems'));
} else {
  initialState.cartItems = [];
}

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS:
      const Newitem = action.payload;

      const existItem = state.cartItems.find((x) => x.id === Newitem.id);
      if (existItem && existItem.selectedAttr.length === 0) {
        existItem.qty++;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else if (
        existItem &&
        existItem.selectedAttr.length !== 0 &&
        JSON.stringify(existItem.selectedAttr) !==
          JSON.stringify(Newitem.selectedAttr)
      ) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...Newitem, qty: 1 }],
        };
      } else if (
        existItem &&
        existItem.selectedAttr.length !== 0 &&
        JSON.stringify(existItem.selectedAttr) ===
          JSON.stringify(Newitem.selectedAttr)
      ) {
        existItem.qty++;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...Newitem, qty: 1 }],
        };
      }
    case INCREASE_QTY:
      //not fully implemented yet
      const us = state.cartItems.find((item) => item.id === action.payload);
      if (us) {
        us.qty++;
      }

      break;

    default:
      return state;
  }
};
