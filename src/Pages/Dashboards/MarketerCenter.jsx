import React from 'react'
import HeaderButton from '../../Components/Buttons/HeaderButton';
import NokTrigger from '../Nok/NokTrigger';
import persona from '../../assets/D-persona.png'
import progress from '../../assets/progress.png'
import Transaction from '../../Components/Transaction/Transaction';
import polygon from '../../assets/polygon.png'
import alertcircle from '../../assets/alertcircle.png'
import Graph from '../../Components/Graph/Graph';
import referral from '../../assets/referral.png'


function MarketerCenter() {

   const timeline = "All TIme";
  const T = "All your sales";
  const R = "Commission";
  const B = "Become an Investor"
  
  return (
    <main className='ic-container'>
      
      <section className='ic-header'>
        <p>Dashboard</p>

        <div className='mc-align'>
        <div className='ic-align2'>
            <img src={persona} alt='a profile' />
            <p>Kingsley Orji</p>
          </div>
          <NokTrigger />
        <HeaderButton B={B} />
        </div>
      </section>
      
     <section className='ic-adjust1'>
     <div className='ic-align3'>
      <p className='ic-headerp'>Funding Target</p>
      <div className='ic-align4 ic-align4color'>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
        <p style={{paddingBottom: '2px'}}>Total raised so far</p>
        <p>$200,000,000</p>
        </div>
        <div className='mc-align1'>
         <p>$TCA shares</p>
         <img src={polygon} alt='an icon' />
        </div>
        </div>
        <img src={progress} alt='progress bar' />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
        <p>Raise goal</p>
        <p>$700,000,000</p>
     </div>
      </div>
     </div>

      <div className='ic-align3'>
        <div className='ic-headerp' style={{display: 'flex', justifyContent: 'space-between', marginRight: '4%'}}>
          <p>Available Balance</p>
          <select>
             <option>Naira</option>
             <option>Dollar</option>
          </select>
           </div>

           <div style={{textAlign: 'center'}}>
            <div className='mc-align3'>
            <div className='mc-image'>
            <img src={alertcircle} alt='an icon' />
            </div>
            <h3 style={{color: 'whitesmoke', margin: '1% 0 2% 0'}}>NGN0<span style={{fontSize: '12px'}}>.00</span></h3>
            </div>
            <div className='mc-align2'>
              <p>This is a fixed monthly salary + bonus and commission</p>
            </div>
            </div>
      </div>
     </section>

     <section>
      <div className='mc-align4'>
        <div><p>Trends</p></div>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <p style={{fontSize: '12px'}}>Your referral link:</p>
          <p className='mc-span'>t.co/7689743</p>
          <img src={referral} alt='an icon' />
        </div>
      </div>
      <Graph />
     </section>

     

     <Transaction timeline={timeline} T={T} R={R} />
    </main>
  )
}

export default MarketerCenter;