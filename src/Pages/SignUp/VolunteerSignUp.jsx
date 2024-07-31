import React from 'react'
import './SignUp.css'

function VolunteerSignUp({isPasswordVisible, togglePassword}) {
  return (
    <main className='home-host investor-container'>
        <div className='home-header'>
            <h2 className='investor-h'>Join Tech City Africa</h2>
            <p className='investor-p'>Be part of the fastest growing real estate company in Africa</p>
        </div>
       
    <form className='signup-form'>
        <div className='signup-align signup-input1'>
            <input type='text'
            placeholder='First Name'
            className='signup-first signup-input'/>

            <input type='text'
            placeholder='Last Name'
            className='signup-first signup-input'/>
        </div>

        <div>
            <input type='text'
            placeholder='Email'
            className='signup-rest signup-input signup-input1'/>
            </div>

            <div>
            <input type='text'
            placeholder='Phone Number'
            className='signup-rest signup-input signup-input1'/>
            </div>

            <div>
            <input type='text'
            placeholder='Referral Link: tco.44765494644'
            className='signup-rest signup-input signup-input1 specific-input'/>
            </div>

            <div>
            <select className='signup-select'>
                <option>Become a Volunteer</option>
            </select>
            </div>

            <div>
            <select className='signup-select'>
                <option>Select a Job you are interested in</option>
            </select>
            </div>

            <div className='password-align'>
            <input type= {isPasswordVisible ? "text" : "password"}
            placeholder='Password'
            className='signup-rest1 signup-input'/>
            <span onClick={togglePassword}>{isPasswordVisible ? "Hide" : "Show"}</span>
            </div>
         
            <div className="checkbox-container">
                <input type="checkbox" id="acceptTerms" className="custom-checkbox" />
                <label for="acceptTerms" class="custom-label">Remember me</label>
            </div>

           <button className='signup-rest signup-btn'>Register as a Volunteer</button>
           <div className='signup-last1'><p>Already have an account? <span>Login</span></p></div>
    </form>

        
    </main>
  )
}

export default VolunteerSignUp;