import Header from '../components/Header'
import CardItem from '../components/CardItem'

import { Link } from 'react-router-dom';
const AboutScreen = (props) => {
  return (
     
    <div >
    
  
  <div >
  <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
          <CardItem
              src='images/img-9.jpg'
              text='Sailja Sharma'
              
              path='/home'
            />
            
            <CardItem
              src='images/img-2.jpg'
              text='Mahesh Sandanshive
              '
              
              path='/emp-list'
            />

              <CardItem
              src='images/img-2.jpg'
              text='Ruturaj Patil
              '
              
              path='/courseslist'
            />
          
          
            <CardItem
              src='images/img-3.jpg'
              text='Piyush Patil
              '
             
              path='/'
            />
            
          </ul>
        </div>
      </div>
      
     

    </div> 

      
  </div>
  )
}

export default AboutScreen
