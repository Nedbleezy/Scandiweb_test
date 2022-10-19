import {
  CHANGE_COLOR,
  CHANGE_SIZE,
  CHANGE_CAPACITY,
  CHANGE_USB,
  CHANGE_TOUCH,
} from '../constants';

export const changeColor = (index) => (dispatch) => {
  dispatch({ type: CHANGE_COLOR, payload: index });
};
export const changeSize = (index) => (dispatch) => {
  dispatch({ type: CHANGE_SIZE, payload: index });
};
export const changeCapacity = (index) => (dispatch) => {
  dispatch({ type: CHANGE_CAPACITY, payload: index });
};
export const changeUsb = (index) => (dispatch) => {
  dispatch({ type: CHANGE_USB, payload: index });
};
export const changeTouch = (index) => (dispatch) => {
  dispatch({ type: CHANGE_TOUCH, payload: index });
};
