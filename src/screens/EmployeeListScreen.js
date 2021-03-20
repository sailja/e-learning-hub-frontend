import Header from '../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../actions/adminActions'

const EmployeeListScreen = (props) => {

    const dispatch = useDispatch()
  const employee = useSelector((store) => store.employee)
  const { error, response, loading } = employee

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const onAddEmployee = () => {
    props.history.push('/add-employee')
  }

  return (


    <div>


      <Header title="Employees" />

      <table className="table table-striped" >
        <thead>
          <tr class="table-info">
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.result &&
            response.result.length > 0 &&
            response.result.map((employee) => {
              return (
                  
                <tr >
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td></td>
                </tr>
              )
                
            })}
        </tbody>
      </table>

      <button onClick={onAddEmployee} type="button" class="btn btn-outline-info mx-2" >Add Employee</button>
      <a href='/admin' class="btn btn-outline-info" >Back</a>
    </div>
  )
}

export default EmployeeListScreen
