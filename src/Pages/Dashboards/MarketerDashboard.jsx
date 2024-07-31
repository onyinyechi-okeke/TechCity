import React from 'react'
import SideBarMarketer from './SideBarMarketer';
import MainMarketerDashboard from './MainMarketerDashboard';

function MarketerDashboard({IS, handleClick}) {
    

  return (
    <div>
        <SideBarMarketer />
        <MainMarketerDashboard IS={IS} handleClick={handleClick}/>
    </div>
  )
}

export default MarketerDashboard;