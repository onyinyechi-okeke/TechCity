import React from 'react'
import InvestorRightSide from './InvestorRightSide';
import InvestorCenter from './InvestorCenter';
import MarketerRightSide from './MarketerRightSide';

function MainInvestorDashBoard({MS, handleClick}) {
  return (
    <div className='mid-container'>
        <InvestorCenter MS={MS} handleClick={handleClick}/>
        <InvestorRightSide />
    </div>
  )
}

export default MainInvestorDashBoard;