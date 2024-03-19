import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Location from './Location';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import Search from './Search';
import Restaurant from './Restaurant';
import SignIn from './SignIn';
import { useAuth } from './context/AuthProvider';
import loadingImg from './img/loading_gif.gif';


function App() {
  const [isLocationClicked, setIsLocationClicked] = useState(false);
  const [isSigninClicked, setIsSigninClicked] = useState(false);
  const [location, setLocation] = useState("Tiruppur");
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    console.log("location cliked")
  }, [isLocationClicked]);

  useEffect(() => {
    console.log("sign in cliked")
  }, [isSigninClicked]);

  useEffect(() => {
    axios.get("http://localhost:3500/restaurants")
      .then((response) => {
        setTimeout(() => {
          setRestaurants(response.data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error fetching restaurants:', error);
        setLoading(false);
      });
  }, [location]);

  return (
    <BrowserRouter>
      <div>
        <Header isLocationClicked={isLocationClicked}
          setIsLocationClicked={setIsLocationClicked}
          isSigninClicked={isSigninClicked}
          setIsSigninClicked={setIsSigninClicked}
        />
        {loading ?
          ( // Show loading symbol if loading is true
            <div className="flex justify-center items-center mt-4 h-2/3 bg-black">
              <img src={loadingImg} alt="Loading..." />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<LandingPage restaurants={restaurants} />} />
              <Route path="/search" element={<Search restaurants={restaurants} />} />
              <Route path='/restaurants/:id' element={<Restaurant restaurants={restaurants} />} />
            </Routes>
          )
        }

        {((isSigninClicked && !isLoggedIn) || isLocationClicked) && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"></div>
        )}
        {(isSigninClicked && !isLoggedIn) && <SignIn isSigninClicked={isSigninClicked} setIsSigninClicked={setIsSigninClicked} />}
        {isLocationClicked && <Location isLocationClicked={isLocationClicked} setIsLocationClicked={setIsLocationClicked} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
