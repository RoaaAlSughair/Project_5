import { createStore, combineReducers } from "redux";
import homePage from "./homePage";

const reducers = combineReducers({ homePage });
const store = createStore(reducers);

export default store;