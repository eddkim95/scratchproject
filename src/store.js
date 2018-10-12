import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './client/reducers/combineReducer';


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  combineReducer,
  composeWithDevTools(),
);


export default store;