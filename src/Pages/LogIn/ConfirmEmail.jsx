import React from 'react'
import './LogIn.css'

function ConfirmEmail({handleClick, CP}) {
  return (
    <main className= 'cp-container' style={{width: '47%', marginTop: '7%', backgroundColor: '#0b0b0b', marginLeft:'auto', marginRight: 'auto', color: 'white', borderRadius: '4px'}}>
        <div className='cp-header'>
            <h2>Change Password</h2>
        </div>
       
    <form className='signup-form'>

    <div style={{marginBottom: '2%'}}>
            <input type='text'
            placeholder='Enter email address'
            className='signup-rest signup-input signup-input1'/>
        </div> 

           <button className='signup-rest signup-btn' onClick={() => handleClick(CP)}>Confirm Email</button>
           
    </form>

        
    </main>
  )
}

export default ConfirmEmail;