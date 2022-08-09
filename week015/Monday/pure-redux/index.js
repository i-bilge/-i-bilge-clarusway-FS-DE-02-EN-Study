//HERE WE ARE SEEING THE FUNDAMENTALS OF REDUX VIA PURE JS:
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//1. ACTIONS(OBJ) - ACTION CREATOR (FUNC)
const BUY_DRINK = "BUY_DRINK";
const BUY_CAKE = "BUY_CAKE";

const buyDrink = () => {
  return {
    type: BUY_DRINK,
    info: "First redux action",
    quantity: 1,
  };
};

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

// const initialState = {
//   numberOfCoffee: 10,
//   numberOfCake: 20
// };

const initialCoffeeState = {
  numberOfCoffee: 10,
};
const initialCakeState = {
  numberOfCake: 20,
};

// 2.Reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_DRINK:
//       return {
//         ...state,
//         numberOfCoffee: state.numberOfCoffee - 1,
//       };
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };

//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    default:
      return state;
  }
};

const coffeeReducer = (state = initialCoffeeState, action) => {
  switch (action.type) {
    case BUY_DRINK:
      return {
        ...state,
        numberOfCoffee: state.numberOfCoffee - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  coffee: coffeeReducer,
});

// 3. Create the store
const store = createStore(rootReducer);
console.log("Initial state of the app", store.getState());
store.dispatch(buyDrink()); //-> Reducer
store.dispatch(buyDrink());
store.dispatch(buyDrink());
store.dispatch(buyCake());
store.dispatch(buyCake());
console.log("After buying drinks", store.getState());
