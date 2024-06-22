import React from 'react'
import home from '../../assets/Home.svg'
import user from '../../assets/User.svg'
import help from '../../assets/help-circle.svg'
import hero from '../../assets/hero2.svg'
import withdraw from '../../assets/withdraw.png'
import { CiHome } from "react-icons/ci";

function SideBar({navItems}) {

  return (
    <div className='sidebar-container'>
          
              <div className='sidebar-align1'>
              <div  className='sidebar-align2'>
                 <CiHome size={20}/>
                 <p>Dashboard</p>
                </div>
        
                <div  className='sidebar-align2'>
                 <img src={user} alt='an icon' />
                 <p>Support</p>
                </div>
              </div>

              <div>
                <div className='sidebar-align2'>
                <img src={hero} alt='an icon' />
                <p className='adjust-colour'>Kingsley Orji</p>
                </div>
                  
                 <div style={{marginBottom: '7%'}}> 
                {navItems.map(({id, icon, p})=>(
                  <div key={id} className='sidebar-align3'>
                  <img src={icon} alt='an icon' />
                  <p>{p}</p>
                  </div>
                ))}
                </div>
              </div>

          <div className='sidebar-buttondiv'>
            <button><img src={help} alt='an icon' />Guide</button>
            <button style={{backgroundColor: ' #EEA837', color: 'black', fontWeight: '600', marginTop: '4%'}}>
              <img src={withdraw} alt='an icon' />Withdraw</button>
            </div>
          </div>
  )
}

export default SideBar;