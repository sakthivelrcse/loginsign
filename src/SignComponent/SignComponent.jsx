import React from 'react';
import './SignComponent.css';

const SignComponent = () => {
  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  return (
    <React.Fragment>
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className='form-title'>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" placeholder='Enter Your First Name'/>
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" placeholder='Enter Your Last Name'/>
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="phone-number" placeholder='Enter Your Phone Number'/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input type="text" id="email" placeholder='Enter your Email ID'/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder='Enter your Password'/>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Signup</button>
        </div>
        <div className='account'>
          <a href="/">Already Have Account?</a>
        </div>
      </form>
    </React.Fragment>
  );
}

export default SignComponent;
