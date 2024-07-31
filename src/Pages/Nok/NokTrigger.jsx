import React from 'react'
import { Link } from 'react-router-dom'
import add from '../../assets/add-yellow.png'
import './Nok.css'

function NokTrigger() {
  return (
    <>
    <Link to="/AddNok" style={{ textDecoration: 'none'}}>
    <div className='Nok-container'>
     <p>Add Next of Kin</p>
     <img src={add} alt='an icon' />
     </div>
     </Link>
     </>
  )
}

export default NokTrigger;