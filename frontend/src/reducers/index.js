import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
const reducers = combineReducers({ homePage,login });
const store = createStore(reducers);

export default store;