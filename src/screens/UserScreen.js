import Header from '../components/Header'
import Navigation from '../components/Navigation'
import CardItem from '../components/CardItem'

import { Link } from 'react-router-dom';
const HomeScreen = (props) => {

  
    
  return (
    
     
    <div >
  <div class='hero-container'>
      <image src='/images/img-home.jpg' />
      <h1>e-Learning</h1>
      <p>What are you waiting for? Join Now !</p>
      
    </div>
  <div >
  <div class='cards__container'>
        <div class='cards__wrapper'>
          <ul class='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Courses'
              path='/courses'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Jobs'
              path='/jobs'
            />
           <CardItem
              src='images/img-4.jpg'
              text='Purchased Courses'
              path='/purchased'
            />
          </ul>
        </div>
      </div>

    </div> 

      
  </div>
    
  )
}

export default HomeScreen