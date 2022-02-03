import allReducers from "../Reducer/index";
import { createStore } from "redux";
const store= createStore(allReducers);
export default store;