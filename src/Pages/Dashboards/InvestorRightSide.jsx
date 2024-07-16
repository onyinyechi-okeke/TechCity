import React from 'react'
import weekhero from '../../assets/week-hero.png'
import InvestorButton from '../../Components/Buttons/InvestorButton';

function InvestorRightSide() {
    const IRS1 = [
        {id: '1', h:'Joined', p:'June 22, 2020'},
        {id: '2', h:'Assets Value', p:'$0.00'}
    ];

    const IRS2 = [
        {id: '1', h:'Amenities', p:'None'},
        {id: '2', h:'Discounts(20%)', p:'N/A'}
    ]

    const IRS3 = [
        {id: '1',h:'Funds', p:'N/A'},
        {id: '2',h:'Referral Link', p:'t.co/789654'}
    ]

    const IRS4 = [
        {id: '1', h:'Shares', p:'0 $TCA'},
        {id: '2', h:'Total Shares', p:'0 units'},
        {id: '3', h:'Equity', p:'0.0%'},
        {id: '4', h:'ShareHolders', p:'98'},
        {id: '5', h:'Share Price', p:'$14.00'}
    ]
  return (
    <div className='irs-container'>
      
      <div className='irs-align'>
        <h5>Investor of the week</h5>
        <img src={weekhero} alt='an image' style={{marginTop: '3%'}}/>
        <h5 style={{marginTop: '4%'}}>Kingsley Whyte</h5>
        <p style={{marginTop: '4%'}}>Joined June 22nd 2024</p>
        <p className='irs-color' style={{marginTop: '4%'}}>View Statistics</p>
      </div>

      <h5 style={{margin: '3% 0'}}>Account</h5>
      <div className='irs-stabilize'>
      {IRS1.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p>{p}</p>
        </div>
      ))}
      </div>

      <h5 style={{margin: '4% 0'}}>Priority Access</h5>
      <div className='irs-stabilize'>
      {IRS2.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p>{p}</p>
        </div>
      ))}

{IRS3.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p style={{color: '#EEA837'}}>{p}</p>
        </div>
      ))}
      </div>

      <h5 style={{margin: '3% 0'}}>Assets</h5>
      <div className='irs-stabilize'>
      {IRS4.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p>{p}</p>
        </div>
      ))}
      </div>

      <InvestorButton />
        </div>
  )
}

export default InvestorRightSide;