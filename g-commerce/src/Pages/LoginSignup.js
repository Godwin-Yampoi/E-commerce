import React from 'react'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className='signup-container'>
        <h1>Create Your Account</h1>
        <div className='Signup-fields'>
          <h2>Name</h2>
          <input type='text' placeholder='Name'></input>
          <h2>Email</h2>
          <input type='email' placeholder='Email'></input>
          <h2>Password</h2>
          <input type='Password' placeholder='atleast 6 characters'></input>

        </div>
        <p className='login'>Already have an account?<span>Login</span></p>
        <div className='loginsignup-agree'>
        <input type='checkbox' name='' id='' />
        <p>By creating an account, I agree to G-Commerce's Terms & conditions</p>
      </div>
         <button>Continue</button>
      </div>
      </div>
  )
}

export default LoginSignup
