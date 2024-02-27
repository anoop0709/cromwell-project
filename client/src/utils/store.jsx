import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
  } from "redux";
  import { thunk } from "redux-thunk";
  import reducer from "../store/index.js";


export const store = createStore(reducer, compose(applyMiddleware(thunk)));