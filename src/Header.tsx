import React from 'react'
import Navbar from './Navbar';

const Header = ({ isLocationClicked, setIsLocationClicked, isSigninClicked, setIsSigninClicked}: 
                  {isLocationClicked :any,setIsLocationClicked:any, isSigninClicked:any, setIsSigninClicked:any}) => {
  return (
    <div>
      <Navbar isLocationClicked={isLocationClicked} 
              setIsLocationClicked={setIsLocationClicked}
              isSigninClicked={isSigninClicked} 
              setIsSigninClicked={setIsSigninClicked}
              />
    </div>
  )
}

export default Header;

export {};
