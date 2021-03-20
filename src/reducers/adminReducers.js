import {
  ADMIN_ADD_REQUEST,
  ADMIN_ADD_SUCCESS,
  ADMIN_ADD_FAIL,
  ADMIN_ADD_RESET,
  ADMIN_FETCH_REQUEST,
  ADMIN_FETCH_SUCCESS,
  ADMIN_FETCH_FAIL,
  ADMIN_FETCH_RESET,
} from '../constants/adminConstants'

export const addAdminsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ADD_REQUEST:
      return { loading: true }
    case ADMIN_ADD_SUCCESS:
      return { loading: false, response: action.payload }
    case ADMIN_ADD_FAIL:
      return { loading: false, error: action.payload }
    case ADMIN_ADD_RESET:
      return {}
    default:
      return state
  }
}

export const fetchAdminsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_FETCH_REQUEST:
      return { loading: true }
    case ADMIN_FETCH_SUCCESS:
      return { loading: false, response: action.payload }
    case ADMIN_FETCH_FAIL:
      return { loading: false, error: action.payload }
    case ADMIN_FETCH_RESET:
      return {}
    default:
      return state
  }
}
