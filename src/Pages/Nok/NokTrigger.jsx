import React from 'react'
import add from '../../assets/add-yellow.png'
import './Nok.css'

function NokTrigger() {
  return (
    <div className='Nok-container'>
     <p>Add Next of Kin</p>
     <img src={add} alt='an icon' />
    </div>
  )
}

export default NokTrigger;