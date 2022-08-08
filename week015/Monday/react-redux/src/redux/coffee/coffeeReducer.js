import { BUY_COFFEE } from "./coffeeTypes";

const initialState = {
  numberOfCoffee: 10,
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        numberOfCoffee: state.numberOfCoffee - action.payload,
      };

    default:
      return state;
  }
};
