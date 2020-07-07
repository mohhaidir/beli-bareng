import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoListReducer from "./reducer/todoListReducer";

const reducers = combineReducers({
  todoListReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
