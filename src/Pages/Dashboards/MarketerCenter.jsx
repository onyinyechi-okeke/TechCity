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
import withdraw from '../../assets/withdraw.png'


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
          <div className='mc-responsive'>
            <div className='mc-responsive1'><p>Assets</p></div>
            <div className='mc-responsive2'>
        <div className='ic-align2'>
            <img src={persona} alt='a profile' />
            <p className='mc-responsive3'>Kingsley Orji</p>
          </div>
          <NokTrigger />
          </div>
          </div>
        <HeaderButton B={B} />
        </div>
      </section>

      <section className='mc-responsive4'>
     <section className='ic-adjust1'>
     <div className='ic-align3'>
      <p className='ic-headerp'>Funding Target</p>
      <div className='ic-align4 ic-align4color'>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div>
        <p style={{paddingBottom: '5px', fontSize: '1rem'}}>Total shares sold so far</p>
        <p className='mobile-responsive'>$70,000,000</p>
        </div>
        <div className='mc-align1'>
         <p>$TCA shares</p>
         <img src={polygon} alt='an icon' />
        </div>
        </div>
        <img src={progress} alt='progress bar' />
        <div style={{display:'flex', justifyContent: 'space-between'}}>
        <p style={{fontSize: '1rem'}}>Available Shares</p>
        <p className='mobile-responsive'>$30,000,000</p>
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

           <div style={{textAlign: 'center'}} className='mc-responsive5'>
            <div className='mc-align3'>
            <div className='mc-image'>
            <img src={alertcircle} alt='an icon' />
            </div>
            <h3 style={{color: 'whitesmoke', margin: '1% 0 2% 0'}}>NGN0<span style={{fontSize: '1rem'}}>.00</span></h3>
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
          <p>Your referral link:</p>
          <p className='mc-span'>t.co/7689743</p>
          <img src={referral} alt='an icon' />
        </div>
      </div>
      <Graph />
     </section>
     </section>

     <div className='mc-buttondiv'>
            <button>
              <img src={withdraw} alt='an icon' />Withdraw</button>
            </div>

     <Transaction timeline={timeline} T={T} R={R} />
    </main>
  )
}

export default MarketerCenter;