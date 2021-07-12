import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
import comments from "./comments";
import searchResult from "./SearchResult";
const reducers = combineReducers({ homePage, login, comments, searchResult });
const store = createStore(reducers);

export default store;
