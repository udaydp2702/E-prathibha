// store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../login/loginReducer';
import examsReducer from './examReducer';

const store = createStore(examsReducer,loginReducer, applyMiddleware(thunk));

export default store;
