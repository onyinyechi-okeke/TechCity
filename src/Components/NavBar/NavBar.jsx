import React from 'react';
import './NavBar.css'
import logo from '../../assets/Logo.svg'
import phone from '../../assets/phone.svg'
import mobilelogo from '../../assets/logomobile.svg'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import NavContent from './NavContent';


function NavBar({isMobileMenuOpen, toggleMobileMenu}) {
    const Lists = ['Home', 'About', 'Project Milestone', 'Blog', 'Partnership', 'Become a Marketer'];

    

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-align'>
            <img src={logo} alt='company logo' className='img1'/>
        </div>

        <div className='navbar-align1'>
            <ul style={{display: 'flex', gap: '2.5rem'}}>
                {Lists.map((list)=>(
                    <li key={list}className='navbar-list'>{list}</li>
                ))}
                <li className='navbar-list navbar-list2'>More <IoIosArrowDown size={20}/></li>
            </ul>
        </div>
        
        <div className='navbar-align2'>
        <div className='navbar-list2'>
            <img src={phone} alt='a telephone' />
            <p>+(929)899-2876</p>
        </div>
        <div className='navbar-list2'>
            <p>Contact Us</p>
            <FaArrowRight  />
        </div>
        </div>

        </nav>
          {isMobileMenuOpen ? (
            <NavContent toggleMobileMenu= {toggleMobileMenu}/>
        ) : (
            <div className='navbarmobile'>
            <img src={mobilelogo} alt='company logo' className='img2'/>
            <div className='navbar-mobile'>
            <IoPersonOutline size={25}/>
            <FaBars size={24} onClick={toggleMobileMenu} />
          </div>
          </div>
        )}
        </>
  ) 
}


export default NavBar