import React from 'react'

function HeaderButton({B, MS, handleClick}) {
  return (
    <div className='HB' onClick={()=> handleClick(MS)}>
        <button>{B}</button>
    </div>
  )
}

export default HeaderButton