import React from 'react'
import SideBar from './SideBar'
import './Dashboard.css'
import MainInvestorDashBoard from './MainInvestorDashBoard'

function InvestorDashboard({MS, handleClick}) {

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <SideBar />
      <MainInvestorDashBoard MS={MS} handleClick={handleClick} />
    </div>
  )
}

export default InvestorDashboard;