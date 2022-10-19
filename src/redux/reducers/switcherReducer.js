import {
  CHANGE_CAPACITY,
  CHANGE_COLOR,
  CHANGE_SIZE,
  CHANGE_TOUCH,
  CHANGE_USB,
} from '../constants';

const initialState = {
  colorIndex: 0,
  sizeIndex: 0,
  capacityIndex: 0,
  usbIndex: 0,
  touchIndex: 0,
};

export const SwitcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { ...state, colorIndex: action.payload };
    case CHANGE_SIZE:
      return { ...state, sizeIndex: action.payload };
    case CHANGE_CAPACITY:
      return { ...state, capacityIndex: action.payload };
    case CHANGE_USB:
      return { ...state, usbIndex: action.payload };
    case CHANGE_TOUCH:
      return { ...state, touchIndex: action.payload };
    default:
      return state;
  }
};
