import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { addCourse } from '../actions/employeeActions'

const AddCourseScreen = (props) => {
  const [name, setName] = useState('')
  
  const dispatch = useDispatch()

  const addCourseStore = useSelector((store) => store.addCourse)
  const { loading, response, error } = addCourseStore

  useEffect(() => {
    if (response && response.status === 'OK') {
      props.history.push('/emp-courses')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addCourse(name))
  }

  const onCancel = () => {
    props.history.push('/emp-courses')
  }

  return (
    <div>
      <Header title="Add New Course" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        
        <div className="mb-3">
          <button onClick={onAdd} className="btn btn-success">
            Add
          </button>
          <button onClick={onCancel} className="btn btn-danger float-end">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddCourseScreen
