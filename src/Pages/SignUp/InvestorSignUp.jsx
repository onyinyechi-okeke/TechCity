import React from 'react'

import './SignUp.css'

function InvestorSignUp({isPasswordVisible, togglePassword, ID, handleClick, LI}) {

  return (
    <main className=' home-container investor-container' style={{width: '47%', marginTop: '7%', backgroundColor: '#0b0b0b', marginLeft:'auto', marginRight: 'auto', color: 'white', borderRadius: '4px'}}>
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
                <option>Become an Investor</option>
            </select>
            </div>

            <div className='password-align'>
            <input type= {isPasswordVisible ? "text" : "password"}
            placeholder='Password'
            className='signup-rest1 signup-input'/>
            <span onClick={togglePassword}>{isPasswordVisible ? "Hide" : "Show"}</span>
            </div>
         
            <div class="checkbox-container">
                <input type="checkbox" id="acceptTerms" class="custom-checkbox" />
                <label for="acceptTerms" class="custom-label">Remember me</label>
            </div>

           <button className='signup-rest signup-btn' onClick={() => handleClick(ID)}>Register as an Investor</button>
           <div className='signup-last'><p>Already have an account? <span onClick={() => handleClick(LI)}>Login</span></p></div>
    </form>

        
    </main>
  )
}

export default InvestorSignUp