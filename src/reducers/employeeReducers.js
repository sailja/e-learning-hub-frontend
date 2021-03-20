import {
    EMPLOYEE_ADD_REQUEST,
    EMPLOYEE_ADD_SUCCESS,
    EMPLOYEE_ADD_FAIL,
    EMPLOYEE_ADD_RESET,
    EMPLOYEE_FETCH_REQUEST,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_FETCH_FAIL,
    EMPLOYEE_FETCH_RESET,
  } from '../constants/employeeConstants'
  
  export const addEmployeesReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_ADD_REQUEST:
        return { loading: true }
      case EMPLOYEE_ADD_SUCCESS:
        return { loading: false, response: action.payload }
      case EMPLOYEE_ADD_FAIL:
        return { loading: false, error: action.payload }
      case EMPLOYEE_ADD_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const fetchEmployeesReducer = (state = {}, action) => {
    switch (action.type) {
      case EMPLOYEE_FETCH_REQUEST:
        return { loading: true }
      case EMPLOYEE_FETCH_SUCCESS:
        return { loading: false, response: action.payload }
      case EMPLOYEE_FETCH_FAIL:
        return { loading: false, error: action.payload }
      case EMPLOYEE_FETCH_RESET:
        return {}
      default:
        return state
    }
  }
  