import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

// 正常情况下store.dispatch(object)
// 想要派发函数 store.dispatch(function)

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
