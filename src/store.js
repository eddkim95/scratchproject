import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer.js';


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  rootReducer,
  composeWithDevTools(),
);


export default store;