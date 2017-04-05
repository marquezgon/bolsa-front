export const SET_USER = 'SET_USER';
export const AUTH_USER = 'AUTH_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOAD_USER = 'LOAD_USER';

export function setUser(user) {
  return function(dispatch){
		dispatch({ type: AUTH_USER });
		dispatch({ type: SET_USER, payload: user });
	}
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function loadUser() {
  return {
    type: LOAD_USER
  };
}
