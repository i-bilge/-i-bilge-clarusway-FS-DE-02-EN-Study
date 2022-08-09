// BOOKSTORE - BOOKS AND MAGAZINES

// 1.The global state of the app is stored as an obj in a single store.
// 2. The only way to change the state is to dispatch an action (an obj describes what happened)
// 3. To specify how state is updated can be done via reducers.

// We cover
// 1. How to create a simple redux store
// 2. Multiple reducers
// 3. bind Actions
// 4. immer library
// 5. middleware
// 6. async functions (in other file)


const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const bindActionCreators = redux.bindActionCreators;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

const produce = require("immer").produce;

// ACTIONS - ACTION CREATORS (FUNCTIONS)
const BUY_BOOK = "BUY_BOOK";
const SUPPLY_BOOK = "SUPPLY_BOOK";
const BUY_MAGAZINE = "BUY_MAGAZINE";
const SUPPLY_MAGAZINE = "SUPPLY_MAGAZINE";
const UPDATE_MS_STREET = "UPDATE_MS_STREET";

const buyBook = (qty) => {
  return {
    type: BUY_BOOK,
    payload: qty,
  };
};

const supplyBook = (qty) => {
  return {
    type: SUPPLY_BOOK,
    payload: qty,
  };
};
const buyMagazine = (qty) => {
  return {
    type: BUY_MAGAZINE,
    payload: qty,
  };
};

const supplyMagazine = (qty) => {
  return {
    type: SUPPLY_MAGAZINE,
    payload: qty,
  };
};
const updateMSStreet = (street) => {
  return {
    type: UPDATE_MS_STREET,
    payload: street,
  };
};

// REDUCER
const initialBookState = {
  numOfBooks: 100,
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numOfBooks: state.numOfBooks - action.payload,
      };
    case SUPPLY_BOOK:
      return {
        ...state,
        numOfBooks: state.numOfBooks + action.payload,
      };

    default:
      return state;
  }
};

const initialMagazineState = {
  numOfMagazine: 300,
  storeAddress: {
    city: "Amsterdam",
    country: "NL",
    street: {
      firstLine: "First Road 9",
      secondLine: "Main Road",
      postCode: "73730",
    },
  },
};

const magazineReducer = (state = initialMagazineState, action) => {
  switch (action.type) {
    case BUY_MAGAZINE:
      return {
        ...state,
        numOfMagazine: state.numOfMagazine - action.payload,
      };
    case SUPPLY_MAGAZINE:
      return {
        ...state,
        numOfMagazine: state.numOfMagazine + action.payload,
      };
    case UPDATE_MS_STREET:
      //   return {
      //     ...state,
      //     storeAddress: {
      //       ...state.storeAddress,
      //       country: action.payload,
      //       street: {
      //         ...state.storeAddress.street,
      //         firstLine: action.payload,
      //       },
      //     },
      //   };
      return produce(state, (draft) => {
        draft.storeAddress.country = action.payload;
      });

    default:
      return state;
  }
};

// 3. STORE

const rootReducer = combineReducers({
  book: bookReducer,
  magazine: magazineReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());

store.subscribe(() => console.log("Updated state => ", store.getState()));

const actions = bindActionCreators(
  {
    buyBook,
    supplyBook,
    buyMagazine,
    supplyMagazine,
    updateMSStreet,
  },
  store.dispatch
);

//Update the state in the store via actions and reducers
// store.dispatch(buyBook(5));
// store.dispatch(buyBook(2));
// store.dispatch(buyBook(12));
// store.dispatch(buyBook(19));
// store.dispatch(supplyBook(15));
// store.dispatch(supplyBook(4));
// store.dispatch(supplyBook(151));
// store.dispatch(supplyBook(1));
// store.dispatch(supplyMagazine(19));
// store.dispatch(buyMagazine(57));

// store.dispatch(buyMagazine(12));
// store.dispatch(buyMagazine(1));
// actions.buyBook(12);
actions.updateMSStreet("clarusway");
