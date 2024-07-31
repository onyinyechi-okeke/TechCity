import { Link } from 'react-router-dom'
import user from '../../assets/User.svg'
import help from '../../assets/help-circle.svg'
import hero from '../../assets/hero2.svg'
import withdraw from '../../assets/withdraw-inactive.svg'
import { CiHome } from "react-icons/ci";
import activity from '../../assets/Activity.svg'
import piechart from '../../assets/pie-chart.svg'


function SideBar () {

  return (
    <div className='sidebar-container'>
               
     <div className='sidebar-align1'>
     <div  className='sidebar-align2' style={{color: '#eea837', borderRight: '4px solid #eea837'}}>
         <CiHome size={25}/>
        <p>Dashboard</p>
        </div>
        
        <div  className='sidebar-align2'>
        <img src={user} alt='an icon' />
        <p>Support</p>
        </div>
      </div>

             <div>
              <div>
                <div className='sidebar-align2'>
                <img src={hero} alt='an icon' />
                <p className='adjust-colour'>Kingsley Orji</p>
                </div>
                  
                 <div style={{marginBottom: '7%'}}> 
                  <Link to="/editprofile" style={{color: 'white', textDecoration: 'none'}}>
                  <div className='sidebar-align3'>
                  <img src={activity} alt='an icon' />
                  <p>Edit Account</p>
                  </div>
                  </Link>

                  <div className='sidebar-align3'>
                  <img src={piechart} alt='an icon' />
                  <p>Switch to Marketer's Account</p>
                  </div>
                
                </div>
              </div>

          <div className='sidebar-buttondiv'>
            <button style={{width: '95%'}}><img src={help} alt='an icon' />Guide</button>
            <button style={{  marginTop: '4%', width: '95%'}}>
              <img src={withdraw} alt='an icon' />Withdraw</button>
            </div>
            </div>
          </div>
  )
}

export default SideBar;