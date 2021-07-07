import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
import comments from "./comments";

const reducers = combineReducers({ homePage,comments, login });
const store = createStore(reducers);

export default store;