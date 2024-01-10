import { Outlet, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navigation = () => {
  // State to track user authentication status
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Dummy user data (replace with actual user authentication logic)
  const userData = {
    name: "John", // Replace with the actual user's name
  };

  const handleSignUp = () => {
    // Handle sign up logic and update state
    setIsSignedUp(true);
  };

  const handleSignIn = () => {
    // Handle sign in logic and update state
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    // Handle sign out logic and update state
    setIsSignedUp(false);
    setIsSignedIn(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Gardening</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/plants">Plants</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pots">Pots/Decoration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/soil">Soil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/util">Utilities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              
              {isSignedUp && !isSignedIn && (
                <>
                  <Link to="/signin">
                    <Button className="my-2 my-lg-0" variant="contained" color="success" onClick={handleSignIn}>
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
              {!isSignedUp && (
                <>
                  <Link to="/signup">
                    <Button className="my-2 my-lg-0" variant="outlined" color="success" onClick={handleSignUp}>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
              {isSignedIn && (
                <>
                  {/* Display user profile information */}
                  <div className="nav-item">
                    <span className="nav-link my-2 my-lg-0">
                      <AccountCircleIcon fontSize="large"/>
                      {userData.name}
                    </span>
                  </div>
                  <div className="nav-item my-2 my-lg-0">
                    <Button variant="outlined" color="error" onClick={handleSignOut}>
                      Sign Out
                    </Button>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Navigation;
