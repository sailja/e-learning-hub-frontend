import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSignupReducer, userSigninReducer ,addUsersReducer,fetchUsersReducer} from './reducers/userReducers'

import { addAdminsReducer, fetchAdminsReducer } from './reducers/adminReducers'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { addEmployeesReducer, fetchEmployeesReducer } from './reducers/employeeReducers'


// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,
  addEmployee: addAdminsReducer,
  employee: fetchAdminsReducer,
  addUser: addUsersReducer,
  user: fetchUsersReducer,
  course: fetchAdminsReducer,
  addCourse: addEmployeesReducer,
  courseList: fetchEmployeesReducer,
  subjectList: fetchEmployeesReducer
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
