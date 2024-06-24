import React from 'react'
import './LogIn.css'

function ConfirmPassword({isPasswordVisible, togglePassword}) {
  return (
    <main className='home-host cp-container'>
        <div className='cp-header'>
            <h2>Change Password</h2>
        </div>
       
    <form className='signup-form'>

        <div className='password-align' style={{marginBottom: '4%'}}>
            <input type= {isPasswordVisible ? "text" : "password"}
            placeholder='New Password'
            className='signup-rest1 signup-input'/>
            <span onClick={togglePassword}>{isPasswordVisible ? "Hide" : "Show"}</span>
            </div>

            <div className='password-align' style={{marginBottom: '4%'}}>
            <input type= {isPasswordVisible ? "text" : "password"}
            placeholder='Re-type Password'
            className='signup-rest1 signup-input'/>
            <span onClick={togglePassword}>{isPasswordVisible ? "Hide" : "Show"}</span>
            </div>
         
           <button className='signup-rest signup-btn'>Log In</button>
           
    </form>

        
    </main>
  )
}

export default ConfirmPassword;