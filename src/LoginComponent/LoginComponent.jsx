import React from 'react';
import './LoginComponent.css';

const LoginComponent = () => {
  return (
    <React.Fragment>
      <form className="login-form" action="">
        <h2 className='form-title'>Log In</h2>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="text" id="email" placeholder='Enter your Email ID'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='Enter your Password'/>
        </div>
        <div className='forget'>
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <a href="">Forget Password</a>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Login</button>
        </div>
        <div className='account'>
          <a href="/signup">Don't Have Account?</a>
        </div>
      </form>
    </React.Fragment>
  );
}

export default LoginComponent;
