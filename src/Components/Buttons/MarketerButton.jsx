import React from 'react'
import addblack from '../../assets/add-black.png'

function MarketerButton() {
  return (
    <div className='sidebar-buttondiv'>
        <button style={{backgroundColor: 'white', color: 'black', fontSize: '12px', fontWeight: '600'}}>
        <img src={addblack} alt='an icon' />Become an Investor</button>
    </div>
  )
}

export default MarketerButton