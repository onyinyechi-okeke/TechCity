import React from 'react'
import Toggle from '../../Components/Toggle/Toggle'
import arrow from "../../assets/chevron-down.svg"
import yellowprogress from "../../assets/yellowprogress.svg"
import GraphTCA from '../../Components/Graph/GraphTCA'

function LeftSide() {
  return (
    <main className='leftside-container'>
       <Toggle /> 

       <section className='leftside-responsive'>
            <div className='LSR-sub'>
                <p>Shares Available: <br className='hidden' />30,000 $TCA</p>
                <p>Total Shares: <br className='hidden' />100,000 $TCA</p>
            </div>
            <img src={yellowprogress} alt='a progress bar' width={740} />
            <div className='LSR-sub1'>
                <p>28%</p>
                <p>100%</p>
            </div>
      </section>

       <section className='leftside-align'>
        <div className='LSA-sub'>
          <p>How your money could grow in</p>
          <p>Projection</p>
        </div>

        <div className='LSA-sub'> 
          <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem'}}>
            <p style={{fontSize: '24px', letterSpacing: '0.18px'}}>Select Option</p> 
            <img src={arrow} alt='arrow icon'/></div>
          <p style={{fontSize: '32px'}}>$0.<span style={{fontSize: '13px'}}>00</span></p>
        </div>

        <p className='LSA-sub1'>Total you will deposit: $0</p>
      </section>

      <GraphTCA />

      <section className='leftside-align1'>
        <div className='LSA1-sub'>Available Balance : $0</div>
        <div className='LSA1-sub1'>Fund Wallet</div>
      </section>

      <section className='leftside-align2'>
        <div className='LSA2-sub'>How much are you buying</div>
        <div className='LSA2-sub1'>
          <input placeholder='$0 |' />
        </div>
      </section>

      <section className='leftside-responsive1'>
        <button className='leftside-align3'>Buy ($10 TCA Shares)</button>
      </section>
    </main>
  )
}

export default LeftSide