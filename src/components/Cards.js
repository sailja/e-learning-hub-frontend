import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Most popular courses!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Data Structure'
              label='Free'
              path='/courses'
            />
            <CardItem
              src='images/img-2.jpg'
              text='C++'
              label='Paid'
              path='/courses'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='CoreJava'
              label='Paid'
              path='/courses'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Advanced Web Programming'
              label='paid'
              path='/courses'
            />
            <CardItem
              src='images/img-8.jpg'
              text='HTML / CSS'
              label='Paid'
              path='/courses'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
