
import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = (currentUser) => (
  {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
)

const logoutCurrentUser = ()=>(
  {
    type: LOGOUT_CURRENT_USER,
  }
)

//ERRORS TOO



export const login = (user)=>dispatch=>(
  APIUtil.login(user)
    .then( payload => dispatch(receiveCurrentUser(payload)))
)


export const logout = () => dispatch => (
  APIUtil.logout()
    .then( () => dispatch(logoutCurrentUser()))
)


export const signup = (user) => dispatch => (
  APIUtil.signup(user)
    .then(payload => dispatch(receiveCurrentUser(payload)))
)