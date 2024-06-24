import React from 'react'
import './LogIn.css'

function ConfirmPassword({isPasswordVisible, togglePassword}) {
  return (
    <main className=' cp-container' style={{width: '47%', marginTop: '7%', backgroundColor: '#0b0b0b', marginLeft:'auto', marginRight: 'auto', color: 'white', borderRadius: '4px'}}>
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