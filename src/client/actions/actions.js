import * as types from '../actiontypes/actionTypes';

export const createUser = (user, pass) => ({
  type: types.CREATE_USER,
  payload: {user, pass},
});

export const verifyUser = (user, pass) => ({
  type: types.VERIFY_USER,
  payload: {user, pass},
});

export const addUsername = (username) => ({
  type: types.ADD_USERNAME,
  payload:username,
});

export const addPassword = (password) => ({
  type: types.ADD_PASSWORD,
  payload: password,
});
