import { SET_USER, AUTH_USER, LOGOUT_USER, LOAD_USER } from '../actions/index';

const INITIAL_STATE = {
  user: null,
  authenticated: false,
  pageLoaded: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case AUTH_USER:
      return { ...state, authenticated: true };
    case LOGOUT_USER:
      return { ...state, authenticated: false, user: true };
    case LOAD_USER:
      return { ...state, pageLoaded: true }
    default:
      return state;
  }
}
