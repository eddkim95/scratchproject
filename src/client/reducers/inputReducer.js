import * as types from '../actiontypes/actionTypes';

export function addUsername(previousState = "", action) {
    switch(action.type) {
        case types.ADD_USERNAME:
            return action.payload;
        case types.NAV_HOME:
            return "";
        default:
            return previousState;
    }
}

export function addPassword(previousState = "", action) {
    switch(action.type) {
        case types.ADD_PASSWORD:
            return action.payload;
        case types.NAV_HOME:
            return "";
        default:
            return previousState;
    }
}