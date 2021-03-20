import {
    EMPLOYEE_ADD_FAIL,
    EMPLOYEE_ADD_REQUEST,
    EMPLOYEE_ADD_SUCCESS,
    EMPLOYEE_FETCH_FAIL,
    EMPLOYEE_FETCH_REQUEST,
    EMPLOYEE_FETCH_SUCCESS,
  } from '../constants/employeeConstants'
  import axios from 'axios'
  

  //add course
  export const addCourse = (name) => {
    return (dispatch) => {
      dispatch({
        type: EMPLOYEE_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const body = {
        name
      }
      const url = 'http://localhost:7070/employee/add_course'
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: EMPLOYEE_ADD_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: EMPLOYEE_ADD_FAIL,
            payload: error,
          })
        })
    }
  }
  
  //get courses list
export const getCourses = () => {
    return (dispatch) => {
      dispatch({
        type: EMPLOYEE_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:7070/employee/courseList'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: EMPLOYEE_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: EMPLOYEE_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }
  

  //get Subjects list
export const getSubjects = () => {
    return (dispatch) => {
      dispatch({
        type: EMPLOYEE_FETCH_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const url = 'http://localhost:7070/employee/subjectList'
      axios
        .get(url, header)
        .then((response) => {
          dispatch({
            type: EMPLOYEE_FETCH_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: EMPLOYEE_FETCH_FAIL,
            payload: error,
          })
        })
    }
  }
  

  //add subjects
  export const addSubject = (name) => {
    return (dispatch) => {
      dispatch({
        type: EMPLOYEE_ADD_REQUEST,
      })
  
      const header = {
        headers: {
          'Content-Type': 'application/json',
          token: sessionStorage['token'],
        },
      }
  
      const body = {
        name
      }
      const url = 'http://localhost:7070/employee/add_subject'
      axios
        .post(url, body, header)
        .then((response) => {
          dispatch({
            type: EMPLOYEE_ADD_SUCCESS,
            payload: response.data,
          })
        })
        .catch((error) => {
          dispatch({
            type: EMPLOYEE_ADD_FAIL,
            payload: error,
          })
        })
    }
  }