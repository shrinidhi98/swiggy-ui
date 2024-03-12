import React from 'react';
import HomePage from './HomePage';
import Footer from './Footer';

const LandingPage = ({restaurants}:{restaurants:any}) => {
  return (
    <div>
      <HomePage restaurants={restaurants}/>
      <Footer/>
    </div>
  )
}

export default LandingPage
