import React from 'react'
import activity from '../../assets/Activity.svg'
import piechart from '../../assets/pie-chart.svg'
import SideBar from './SideBar';
import MainMarketerDashboard from './MainMarketerDashboard';

function MarketerDashboard() {
    
    const navItemsMarketer = [
        { id: 1, icon: activity, p: 'Edit Account' },
        { id: 2, icon: piechart, p: "Switch to Marketer's Account" }
      ];

  return (
    <div>
        <SideBar navItems={navItemsMarketer}/>
        <MainMarketerDashboard />
    </div>
  )
}

export default MarketerDashboard;