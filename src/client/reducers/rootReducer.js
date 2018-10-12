import * as types from '../actiontypes/actionTypes';

const initialState = {
  username: '',
  password: '',
};


const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CREATE_USER:
      return;
    case types.VERIFY_USER:
      return;
    case types.ADD_USERNAME:
      return;
    case types.ADD_PASSWORD:
      return;
    default:
      return state;
  }
}

export default rootReducer;