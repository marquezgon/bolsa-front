export const SET_USER = 'SET_USER';
export const AUTH_USER = 'AUTH_USER';

export function setUser(user) {
  return function(dispatch){
		dispatch({ type: AUTH_USER });
		dispatch({ type: SET_USER, payload: user });
	}
}
