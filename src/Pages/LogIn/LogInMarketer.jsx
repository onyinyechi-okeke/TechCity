import React from 'react'
import './LogIn.css'

function LogInMarketer({isPasswordVisible, togglePassword, handleClick, MD, CE, MS}) {
  return (
    <main className='home-host login-container'>
        <div className='login-header'>
            <h2>Welcome Back</h2>
            <p className='investor-p'>Be part of the fastest growing real estate company in Africa</p>
        </div>
       
    <form className='signup-form'>
    
        <div style={{marginBottom: '2%'}}>
            <input type='text'
            placeholder='Email'
            className='signup-rest signup-input signup-input1'/>
        </div>

        <div className='password-align' style={{marginBottom: '5%'}}>
            <input type= {isPasswordVisible ? "text" : "password"}
            placeholder='Password'
            className='signup-rest1 signup-input'/>
            <span onClick={togglePassword}>{isPasswordVisible ? "Hide" : "Show"}</span>
            </div>
         
         <div className='checkbox-div'>
            <div className="checkbox-container" style={{marginBottom: '3%'}}>
                <input type="checkbox" id="acceptTerms" className="custom-checkbox" />
                <label for="acceptTerms" className="custom-label">Remember me</label>
            </div>
            <p onClick={() => handleClick(CE)}>Forgot Password?</p>
            </div>

           <button className='signup-rest signup-btn' onClick={() => handleClick(MD)}>Log In</button>
           <div className='signup-last'><p>Already have an account? <span onClick={() => handleClick(MS)}>Register</span></p></div>
    </form>

        
    </main>
  )
}

export default LogInMarketer;