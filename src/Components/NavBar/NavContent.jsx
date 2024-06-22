import React from 'react'
import home from '../../assets/Home.svg'
import user from '../../assets/User.svg'
import activity from '../../assets/Activity.svg'
import piechart from '../../assets/pie-chart.svg'
import help from '../../assets/help-circle.svg'
import hero from '../../assets/hero2.svg'
import { FaTimes } from "react-icons/fa";
import { CiHome } from "react-icons/ci";

function NavContent({toggleMobileMenu}) {
   const NavMobile1 = [
        {id:1, icon: activity, p:'Edit Account'},
        {id:2, icon: piechart, p:"Switch to Marketer's Account"}
      ]

  return (
    <div className='navbarmobile-align'>
              <div className='navbar-icon'>
                <FaTimes size={24} className='navbar-icon' onClick={toggleMobileMenu} />
              </div>
          
          <div className='navbarmobile-align1'>
              <div>
              <div  className='navbarmobile-align2'>
                 <CiHome size={30}/>
                 <p>Dashboard</p>
                </div>
        
                <div  className='navbarmobile-align2'>
                 <img src={user} alt='an icon' />
                 <p>Support</p>
                </div>
              </div>

              <div>
                <div className='navbarmobile-align2'>
                <img src={hero} alt='an icon' />
                <p className='adjust-colour'>Kingsley Orji</p>
                </div>

                {NavMobile1.map(({id, icon, p})=>(
                  <div key={id} className='navbarmobile-align3'>
                  <img src={icon} alt='an icon' />
                  <p>{p}</p>
                  </div>
                ))}
              </div>
          </div>

          <div className='buttondiv'>
            <button><img src={help} alt='an icon' />Guide</button>
            </div>
          </div>
  )
}

export default NavContent