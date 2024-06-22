import React from 'react'
import HeaderButton from '../../Components/Buttons/HeaderButton';
import NokTrigger from '../Nok/NokTrigger';
import persona from '../../assets/D-persona.png'
import chart from '../../assets/chart.png'
import chart1 from '../../assets/chart1.png'
import progress from '../../assets/progress.png'
import addwhite from '../../assets/add-white.png'
import Transaction from '../../Components/Transaction/Transaction';


function InvestorCenter() {

   const Chart = [
    { id:1, h: 'Total Invested', backgroundColor: '#EEA837', img: chart1},
    { id:2, h: 'Expected ROI', backgroundColor: 'black', img: chart}
   ]

   const Funds = [
    { id:1, h: 'Naira wallet', p: 'N0.00'},
    { id:2, h: 'Dollar wallet', p: '$0.00'}
   ]

   const timeline = "Last 30 days";
  const T = "Transaction";
  const R = "ROI";
  const B = "Become a Marketer"
  
  return (
    <main className='ic-container'>
      
      <section className='ic-header'>
        <p>Dashboard</p>
        <HeaderButton B={B} />
      </section>

      <section className='ic-align'>
        <div><h3>Assets</h3></div>

        <div className='ic-align1'>
          <div className='ic-align2'>
            <img src={persona} alt='a profile' />
            <p>Kingsley Orji</p>
          </div>
          <NokTrigger />
        </div>
      </section>
         
         <section className='ic-adjust'>
      {Chart.map(({id, h, backgroundColor, img})=>(
          <div className='ic-align3' key={id}>
          <p className='ic-headerp'>{h}</p>
          <div className='ic-align4' style={{backgroundColor}}>
            <div className='ic-align5'>
              <h4>$0.00</h4>
              <img src={img} alt='a chart' />
            </div>
  
            <div className='ic-align6'>
            <div className='ic-align7'><p>Profit</p></div>
            <div className='ic-align7'><p>Shares</p></div>
            <div className='ic-align7'><p>Duration</p></div>
            <div className='ic-align7'><p style={{color: 'green'}}>+0%</p></div>
            <div className='ic-align7'><p>0 unit</p></div>
            <div className='ic-align7'><p>None</p></div>
            </div>
          
          </div>
        </div>
      ))}
      </section>
      
     <section className='ic-adjust1'>
     <div className='ic-align3'>
      <p className='ic-headerp'>Funding Target</p>
      <div className='ic-align4 ic-align4color'>
        <p style={{paddingBottom: '2px'}}>Total raised so far</p>
        <p>$200,000,000</p>
        <img src={progress} alt='progress bar' />

        <div style={{display:'flex', justifyContent: 'space-between'}}>
        <p>Raise goal</p>
        <p>$700,000,000</p>
     </div>
      </div>
     </div>
      
      <div className='ic-align8'>
      <p className='ic-headerp'>Your Wallet</p>
      <div className='ic-align9'>
      {Funds.map(({id, h, p})=>(
         <div className='ic-align10' key={id}>
         <p>{h}</p>
         <h4>{p}</h4>
         <button>Fund wallet<span><img src={addwhite} alt='an icon'/></span></button>
         </div>
      ))}
        </div>
        </div>
     </section>

     <Transaction timeline={timeline} T={T} R={R} />
    </main>
  )
}

export default InvestorCenter;