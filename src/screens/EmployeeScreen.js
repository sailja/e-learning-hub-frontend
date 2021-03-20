import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CardItem from '../components/CardItem'

import { Link } from 'react-router-dom';
const EmployeeScreen = (props) => {
  return (
    
     
    <div >
    
  
  <div >
  <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Courses'
              
              path='/emp-courses'
            />
            
            <CardItem
              src='images/img-3.jpg'
              text='Subjects'
             
              path='/subjectList'
            />
          
          <CardItem
              src='images/img-8.jpg'
              text='Premium'
              
              path='/userlist'
            />
          </ul>
        </div>
      </div>
      
     

    </div> 

      
  </div>
  )
}

export default EmployeeScreen
