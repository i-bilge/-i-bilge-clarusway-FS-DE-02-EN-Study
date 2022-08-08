import { BUY_COFFEE } from "./coffeeTypes";

export const buyCoffee = (number) => {
  return {
    type: BUY_COFFEE,
    payload: number,
  };
};
