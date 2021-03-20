import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { addEmployee } from '../actions/adminActions'

const AddEmployeeScreen = (props) => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const addEmployeeStore = useSelector((store) => store.addEmployee)
  const { loading, response, error } = addEmployeeStore

  useEffect(() => {
    if (response && response.status === 'OK') {
      props.history.push('/emp-list')
    } else if (error) {
      alert('error')
    }
  }, [loading, response, error])

  const onAdd = () => {
    dispatch(addEmployee(name,dob,email,password))
  }

  const onCancel = () => {
    props.history.push('/emp-list')
  }

  return (
    <div>
      <Header title="Add New Employee" />
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
          <label className="form-label">Date of Birth</label>
          <input
            onChange={(e) => {
              setDob(e.target.value)
            }}
            type="Date"
            className="form-control"
            placeholder="dob"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="email"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
            placeholder="*******"
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

export default AddEmployeeScreen
