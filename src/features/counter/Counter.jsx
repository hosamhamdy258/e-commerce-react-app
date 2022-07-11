import React from "react";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { show_hide } from "../../store/authSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container alert alert-secondary">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-info "
              onClick={() => dispatch(show_hide())}
            >
              {auth ? "hide" : "show"}
            </button>
          </div>
          {auth && (
            <>
              <div className="col-1">
                <span>{count}</span>
              </div>
              <div className="col">
                <button
                  className="btn btn-info mx-2"
                  onClick={() => dispatch(increment())}
                >
                  Increment
                </button>

                <button
                  className="btn btn-info mx-2"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
