const initialState = { count: 0 };

export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 26 };
    case DECREMENT:
      return { ...state, count: state.count - 17 };
    default:
      return state;
  }
};

export function incrementCreator() {
  return { type: INCREMENT };
}

// async action-creator'ы нужны чтобы вызвать их с view и как бы имитировать асинхронность,
// а на эти action уже триггерятся redux-saga watcher'ы
export function asyncIncrementCreator() {
  return { type: ASYNC_INCREMENT };
}

export function decrementCreator() {
  return { type: DECREMENT };
}

export function asyncDecrementCreator() {
  return { type: ASYNC_DECREMENT };
}
