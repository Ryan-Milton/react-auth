import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import recordsReducer from '../components/record/reducers.js';

let reducers = combineReducers({
  records: recordsReducer,
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;
