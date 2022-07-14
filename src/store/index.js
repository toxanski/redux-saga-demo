import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { countWatcher } from "../saga/countSaga";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
  count: countReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(countWatcher);
