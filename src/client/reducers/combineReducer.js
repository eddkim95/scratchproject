import { combineReducers } from 'redux';
import { createUser, verifyUser, currentPage } from './submitReducer.js';
import { addUsername, addPassword }from './inputReducer.js';

export default combineReducers({
    addUsername,
    addPassword,
    createUser,
    verifyUser,
    currentPage,
});
