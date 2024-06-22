import React from 'react'
import './Home.css'
import moneybag from '../../assets/moneybag.svg'
import handshake from '../../assets/handshake.svg'
import construction from '../../assets/construction.svg'
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
const HomeLinks = [
    {id:1, icon:moneybag, h:"Become an Investor", p:"Invest in Tech City Africa and earn good ROI" },
    {id:2, icon:handshake, h:"Become a Marketer", p:"Join our team of marketers to earn commision and bonuses" },
    {id:3, icon:construction, h:"Become a Volunteer", p:"Have a skill that could be beneficial to us? We will like to welcome you" }
]
  return (
    <div className='home-container home-container1'>
        <div className='home-header'>
            <h2>Welcome to Tech City Africa</h2>
            <p>Be part of the fastest growing real estate in Africa</p>
        </div>

        <div className='home-stabilize'>
            {HomeLinks.map(({id, icon, h, p})=>(
                <div className='home-align' key={id}>
                    
                    <div className='home-align1'>
                    <div><img src={icon} alt='an icon' /></div>
                    <div className='home-align2'><h4>{h}</h4><p>{p}</p></div> 
                    </div>

                    <div className='home-icon'><MdKeyboardArrowRight /></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home