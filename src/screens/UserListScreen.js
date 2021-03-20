import Header from '../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../actions/userActions'

const UserListScreen = (props) => {

    const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const { error, response, loading } = user

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  return (
    <div>
      <Header title="Users" />
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.result &&
            response.result.length > 0 &&
            response.result.map((user) => {
              return (
                  
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td></td>
                </tr>
              )
                
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UserListScreen
