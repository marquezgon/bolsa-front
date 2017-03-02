import { SET_USER, AUTH_USER } from '../actions/index';

const INITIAL_STATE = {
  user: null,
  authenticated: false
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case AUTH_USER:
      return { ...state, authenticated: true };
    default:
      return state;
  }
}
