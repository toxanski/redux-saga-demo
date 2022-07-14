import {
  decrementCreator,
  incrementCreator,
  ASYNC_DECREMENT,
  ASYNC_INCREMENT
} from "../store/countReducer";
import { put, takeEvery } from "redux-saga/effects";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function* incrementWorker() {
  yield delay(1000);
  // put - "аналог" dispatch
  yield put(incrementCreator());
}

function* decrementWorker() {
  yield delay(1000);
  yield put(decrementCreator());
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCREMENT, incrementWorker);
  yield takeEvery(ASYNC_DECREMENT, decrementWorker);
}
