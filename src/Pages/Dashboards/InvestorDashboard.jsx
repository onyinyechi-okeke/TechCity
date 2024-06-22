import React from 'react'
import SideBar from './SideBar'
import './Dashboard.css'
import MainInvestorDashBoard from './MainInvestorDashBoard'
import activity from '../../assets/Activity.svg'
import piechart from '../../assets/pie-chart.svg'

function InvestorDashboard() {

  const navItemsInvestor = [
    { id: 1, icon: activity, p: 'Edit Account' },
    { id: 2, icon: piechart, p: "Switch to Investor's Account" }
  ];
  return (
    <div style={{width: '100%'}}>
      <SideBar navItems={navItemsInvestor}/>
      <MainInvestorDashBoard />
    </div>
  )
}

export default InvestorDashboard;