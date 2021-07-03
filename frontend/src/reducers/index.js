import { createStore, combineReducers } from "redux";
import main from "./main";

const reducers = combineReducers({ main });
const store = createStore(reducers);

export default store;