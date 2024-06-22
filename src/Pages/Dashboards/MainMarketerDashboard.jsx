import React from 'react'
import MarketerCenter from './MarketerCenter'
import MarketerRightSide from './MarketerRightSide'

function MainMarketerDashboard() {
  return (
    <div className='mid-container'>
        <MarketerCenter />
        <MarketerRightSide />
    </div>
  )
}

export default MainMarketerDashboard