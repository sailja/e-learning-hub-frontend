import Header from '../components/Header'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubjects } from '../actions/employeeActions'

const SubjectsListScreen = (props) => {
  const dispatch = useDispatch()
  const subjects = useSelector((store) => store.subjectList)
  const { error, response, loading } = subjects

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getSubjects())
    
  }, [])

  useEffect(() => {}, [error, response, loading])



  return (
    <div>
      
    <div>
      <Header title="EMPLOYEE" />
      <h2>Subject List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
           <th>Courses</th>
          </tr>
        </thead>
        <tbody>
          
          {response &&
            response.result &&
            response.result.length > 0 &&
            response.result.map((subjects) => {
              return (
                <tr>
                  <td>{subjects.id}</td>
                  <td>{subjects.name}</td>
                  
                <div>
                  {/* <a href="/courseList" class="btn btn-outline-info">Subject</a>
                  <a href="/courseList" class="btn btn-outline-warning">Update</a>
                  <a href="/courseList" class="btn btn-outline-danger">Delete</a> */}
                </div>

                </tr>
              )
            })}
        </tbody>
      </table>
      <a href="/addSubjects" class="btn btn-outline-info">Add Subject</a>
      <a href="/employee" class="btn btn-outline-info">Back</a>
    </div>
  

    </div>
  )
}

export default SubjectsListScreen
