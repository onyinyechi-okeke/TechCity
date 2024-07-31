import { FaTimes } from "react-icons/fa";

function Account({isOpen, onClose}) {
    if (!isOpen) return null;

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
    <main className='account-container'> 
    <FaTimes size={25} onClick={onClose}/>
    <h5 style={{margin: '5% 0 3% 0', fontSize: '1.1rem'}}>Account</h5>
      <div className='irs-stabilize'>
      {IRS1.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p>{p}</p>
        </div>
      ))}
      </div>

      <h5 style={{margin: '4% 0', fontSize: '1.1rem'}}>Priority Access</h5>
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

      <h5 style={{margin: '3% 0', fontSize: '1.1rem'}}>Assets</h5>
      <div className='irs-stabilize'>
      {IRS4.map(({id, h, p})=>(
        <div key={id} className='irs-align1'>
            <p>{h}</p>
            <p>{p}</p>
        </div>
      ))}
      </div>
    </main>
  )
}

export default Account