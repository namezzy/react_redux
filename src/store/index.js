import { createStore, applyMiddleware,compose } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./reducer";

// 正常情况下store.dispatch(object)
// 想要派发函数 store.dispatch(function)

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true, // 启用跟踪
        traceLimit: 25 // 可选，限制跟踪到最近的25个action调用，默认是10
    })) ||
  compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
