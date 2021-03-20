import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,

  USER_ADD_FAIL,
  USER_ADD_REQUEST,
  USER_ADD_SUCCESS,
  USER_ADD_RESET,
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_RESET,
} from '../constants/userConstants'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { loading: true }
    case USER_SIGNUP_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}


export const addUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ADD_REQUEST:
      return { loading: true }
    case USER_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_ADD_FAIL:
      return { loading: false, error: action.payload }
    case USER_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { loading: true }
    case USER_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case USER_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case USER_FETCH_RESET:
      return {}
    default:
      return state
  }
}