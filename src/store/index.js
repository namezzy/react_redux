import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "./counter";
import homeReducer from "./home";
import userReducer from "./user";

// 正常情况下store.dispatch(object)
// 想要派发函数 store.dispatch(function)

//  将我们两个reducer合并在一起
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
  user: userReducer
});
// redux-devtools
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true, // 启用跟踪
      traceLimit: 25, // 可选，限制跟踪到最近的25个action调用，默认是10
    })) ||
  compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
