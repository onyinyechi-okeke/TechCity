import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './Transaction.css'

function Transaction(p) {
  return (
    <div style={{width: '100%'}}>
        <section className='transaction-align'>
            <h4>ACTIVITY</h4>
            <div className='transaction-align1'>
            <p>{p.timeline}</p>
            <IoIosArrowDown />
            </div>
            </section>

            <section className='transaction-align2'>
             <div className='transaction-align3'>
                <div>{p.T}</div>
                <div>Amount</div>
                <div>{p.R}</div>
                <div>Status</div>
                <div>Date</div>
             </div>
             <div className='transaction-line'></div>
             <p className='transaction-align4'>No recent transaction</p>
            </section>

    </div>
  )
}

export default Transaction