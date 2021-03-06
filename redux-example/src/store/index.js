import { createStore } from "redux";
// 导入homeReducer
import homeReducer from "./reducers/homeReducer";

export default createStore(homeReducer);
