import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
import comments from "./comments";
const reducers = combineReducers({ homePage, login, comments });
const store = createStore(reducers);

export default store;
