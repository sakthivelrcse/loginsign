import React from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginComponent from '../LoginComponent/LoginComponent';
import SignComponent from '../SignComponent/SignComponent';
import './NavComponent.css';
import profile from '../assets/img.jpg';

const NavComponent = () => {
  return (
    <React.Fragment>
      <Router>
        <nav>
          <ul className="navbar">
            <li className="navbar-logo">
              <img src={profile} alt="Profile" className="profile-img" />
              <a href="" className='sak'>Sakthivel</a>
            </li>
            <li className="navbar-links">
              <Link to="/">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path='/' element={<LoginComponent />} />
            <Route path='/signup' element={<SignComponent />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default NavComponent;
