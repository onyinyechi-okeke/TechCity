import React from 'react'
import MarketerCenter from './MarketerCenter'
import MarketerRightSide from './MarketerRightSide'

function MainMarketerDashboard({IS, handleClick}) {
  return (
    <div className='mid-container'>
        <MarketerCenter />
        <MarketerRightSide IS={IS} handleClick={handleClick}/>
    </div>
  )
}

export default MainMarketerDashboard