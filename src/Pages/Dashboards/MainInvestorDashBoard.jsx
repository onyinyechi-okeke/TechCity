import React from 'react'
import InvestorRightSide from './InvestorRightSide';
import InvestorCenter from './InvestorCenter';
import MarketerRightSide from './MarketerRightSide';

function MainInvestorDashBoard() {
  return (
    <div className='mid-container'>
        <InvestorCenter />
        <InvestorRightSide />
    </div>
  )
}

export default MainInvestorDashBoard;