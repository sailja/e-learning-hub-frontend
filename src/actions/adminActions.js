import {
  ADMIN_ADD_FAIL,
  ADMIN_ADD_REQUEST,
  ADMIN_ADD_SUCCESS,
  ADMIN_FETCH_FAIL,
  ADMIN_FETCH_REQUEST,
  ADMIN_FETCH_SUCCESS,
} from '../constants/adminConstants'
import axios from 'axios'

export const addEmployee = (name,dob,email,password) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_ADD_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const body = {
      name,
      dob,
      email,
      password
    }
    const url = 'http://localhost:7070/admin/add'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADMIN_ADD_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_ADD_FAIL,
          payload: error,
        })
      })
  }
}

//View employee List
export const getUsers = () => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:7070/admin/user/list/EMPLOYEE'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ADMIN_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

//get courses list
export const getCourses = () => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_FETCH_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        token: sessionStorage['token'],
      },
    }

    const url = 'http://localhost:7070/admin/courseList'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: ADMIN_FETCH_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_FETCH_FAIL,
          payload: error,
        })
      })
  }
}

