import React from 'react'
import addblack from '../../assets/add-black.png'

function MarketerButton({IS, handleClick}) {
  return (
    <div className='sidebar-buttondiv' onClick={()=> handleClick(IS)}>
        <button style={{backgroundColor: 'white', color: 'black', fontWeight: '600'}}>
        <img src={addblack} alt='an icon' />Become an Investor</button>
    </div>
  )
}

export default MarketerButton