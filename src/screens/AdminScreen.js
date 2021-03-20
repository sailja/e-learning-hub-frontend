import Header from '../components/Header'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../actions/adminActions'
import Navigation from '../components/Navigation'
import CardItem from '../components/CardItem'

import { Link } from 'react-router-dom';
const AdminScreen = (props) => {

    const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const { error, response, loading } = user

  // call this only once (when the page has loaded successfully)
  useEffect(() => {
    dispatch(getUsers())
  }, [])

  useEffect(() => {}, [error, response, loading])

  

  return (
    
    
    <div class="container"  >

  <div>
  <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Revenue'
              
              path='/home'
            />
            
            <CardItem
              src='images/img-2.jpg'
              text='Employees'
              
              path='/emp-list'
            />

              <CardItem
              src='images/img-2.jpg'
              text='Courses'
              
              path='/courses'
            />
          
          
            <CardItem
              src='images/img-3.jpg'
              text='Users'
             
              path='/user-list'
            />
            
          </ul>
        </div>
      </div>
      
    



        </div> 

      
    </div>
    
  )
}

export default AdminScreen



