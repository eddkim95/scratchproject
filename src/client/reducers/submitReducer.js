import * as types from '../actiontypes/actionTypes';

const initialState = {
  username: '',
  password: '',
};

export function createUser(previousState = "", action) {
  switch(action.type) {
      case types.NEW_ADDRESS:
          return action.payload
      case types.CREATE_CONTACT:
          return "";
      default:
          return previousState;
  }
}

export function verifyUser(previousState = "", action) {
  switch(action.type) {
      case types.NEW_ADDRESS:
          return action.payload
      case types.CREATE_CONTACT:
          return "";
      default:
          return previousState;
  }
}

export function currentPage(loadPage = 'login', action) {
  switch(action.type) { //for create user and verify user, upon fetch, store.success t/f
    case types.TOGGLE_PAGE:
      if(loadPage === 'login') loadPage = 'signup';
      else if(loadPage === 'signup') loadPage = 'login';
      return loadPage;
    case types.LOGIN_SUCCESS:
      loadPage = 'home';
      return loadPage;
    case types.LOGIN_FAIL:
      loadPage = 'login';
      return loadPage;
    default:
      return loadPage;
  }
}