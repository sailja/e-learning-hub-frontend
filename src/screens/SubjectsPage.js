import Header from '../components/Header'
import CardItem from '../components/CardItem'

import { Link } from 'react-router-dom';
const SubjectsPage = (props) => {
  return (
     
    <div >
     
    

  
  
  <div >
  <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
          <CardItem
              src='images/img-9.jpg'
              text='Notes'
              
              path='/home'
            />
            
            <CardItem
              src='images/img-2.jpg'
              text='Tests'
              
              path='/userTest'
            />

              <CardItem
              src='images/img-2.jpg'
              text='Videos'
              
              path='/videos'
            />
          
          
           
            
          </ul>
        </div>
      </div>
      
     



    </div> 

      
  </div>
  )
}

export default SubjectsPage
