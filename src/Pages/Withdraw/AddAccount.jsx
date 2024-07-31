import { Link } from 'react-router-dom';
import arrow from '../../assets/chevron-down.svg';
import back from "../../assets/back-icon.svg"
function AddAccount() {
  return (
    <main className='withdraw-container'>
     <Link to='/withdraw' style={{textDecoration: 'none'}}>
     <section className='withdraw-aside'>
        <img src={back} alt='arrow icon' />
        <p>Back</p>
    </section>
    </Link>

<section className='home-host withdraw-align'>
    <div className='withdraw-align1'>
        <div className='WA-sub'>
            <p>Amount</p>
            <p className='WA-subp'>$2000</p>
        </div>

        <div className='WA-sub'>
            <p>Shares</p>
            <p className='WA-subp'>100 $TCA</p>
        </div>
    </div>

    <div className='withdraw-align2'>
    <p style={{fontSize: '14px'}}>Select Bank</p>
            <img src={arrow} alt='bank logo' />
    </div>

    <div className='withdraw-align2'>
        <p>Account Number</p>
    </div>

    <div className='withdraw-align2'>
        <p>Account Holder</p>
    </div>

        <div>
        <button className='leftside-align3' style={{marginTop: '15rem'}}>Add Bank Account</button>
        </div>
    </section>


    </main>
  )
}

export default AddAccount