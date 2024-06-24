import React from 'react'
import addblack from '../../assets/add-black.png'
import sell from '../../assets/sell-inactive.svg'
import './Button.css'

function InvestorButton() {
  return (
    <div className='sidebar-buttondiv'>
        <button style={{marginTop: '2%', color: 'rgb(205, 199, 199)'}}><img src={sell} alt='an icon' />Sell Shares</button>
            <button style={{backgroundColor: 'white', color: 'black', marginTop: '2%', fontWeight: '600'}}>
              <img src={addblack} alt='an icon' />Buy Shares</button>
    </div>
  )
}

export default InvestorButton