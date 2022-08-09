const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;

// 1 > ACTIONS

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: users,
  };
};
const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};

// 2 > REDUCER
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

// 3 > STORE
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
console.log("Initial state", store.getState());
store.subscribe(() => console.log("Updated state => ", store.getState()));
store.dispatch(fetchUsers());
