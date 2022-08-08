import { createStore } from "redux"
import { coffeeReducer } from "./coffee/coffeeReducer"

export const store = createStore(coffeeReducer)

