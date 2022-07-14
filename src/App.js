import { useDispatch, useSelector } from "react-redux";
import {
  asyncIncrementCreator,
  asyncDecrementCreator
} from "./store/countReducer";

import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.count);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="actions">
        <div className="buttons">
          <button
            className="action-button"
            onClick={() => dispatch(asyncIncrementCreator())}
          >
            Increment++
          </button>
          <button
            className="action-button"
            onClick={() => dispatch(asyncDecrementCreator())}
          >
            Decrement--
          </button>
        </div>
        <div className="cash-counter">Count: {counter}</div>
      </div>
      <div className="customers">
        <button onClick={() => 3} className="customers__add">
          Add new customer&nbsp;+
        </button>

        <button
          onClick={() => 4}
          className="customers__add"
          style={{ backgroundColor: "darkorange" }}
        >
          Get all customers
        </button>
      </div>
    </div>
  );
}
