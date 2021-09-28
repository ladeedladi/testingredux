import { createStore } from "redux";
import { allReducer } from "./reducer/combinedReducer";
import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
export const store =createStore(allReducer,applyMiddleware(reduxThunk))