import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'


const Navigations = (props) => {
    const dispatch = useDispatch()
  const userSignin = useSelector((store) => store.userSignin)

  const onLogout = () => {
    dispatch(logout())
  }


    return (
      <div>
        <div class="topnav" id="myTopnav">
          <a href="/home" class="active"><b>e-Learning Hub</b></a>
          <a href="/courses">Courses</a>
          <a href="/jobs">Jobs</a>
          <a href="/about">About Us</a>

          <a className ='float-end' href="/signup">Signup</a>
          <a className ='float-end' href="/signin">Login</a>
          
          
          
           <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
</div>

     
      </div>  
    )
  }
  
 
  
  export default Navigations
  