import axios from 'axios';

export const SET_USER = 'SET_USER';
export const AUTH_USER = 'AUTH_USER';
export const EXT_LOGIN = 'EXT_LOGIN';

export function setUser(user) {
  user.provider = 'aws';
  return function(dispatch){
		dispatch({ type: AUTH_USER });
		dispatch({ type: SET_USER, payload: user });
	}
}

export function externalLogin(userObj) {
  const { email, userType, identity, provider } = userObj;
  const request = axios.post(`http://localhost:7777/login`, { email, userType, identity }).then(({ data }) => {
    localStorage.setItem('bolsa_user_token', data.token);
    localStorage.setItem('bolsa_email', email);
  });
  //localStorage.setItem('bolsa_user_token', result.accessToken.jwtToken);

  return function(dispatch){
    dispatch({ type: AUTH_USER });
		dispatch({ type: SET_USER, payload: userObj });
  }
}
