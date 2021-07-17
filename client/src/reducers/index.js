import { createStore, combineReducers } from "redux";
import homePage from "./homePage";
import login from "./login";
import searchResult from "./SearchResult";
const reducers = combineReducers({ homePage, login,  searchResult });
const store = createStore(reducers);

export default store;
