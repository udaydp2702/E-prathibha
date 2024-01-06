// store.js
import { createStore, applyMiddleware } from "redux";
import { thunk} from "redux-thunk";
import registrationReducer from "./reducers";

const store = createStore(registrationReducer, applyMiddleware(thunk));

export default store;
