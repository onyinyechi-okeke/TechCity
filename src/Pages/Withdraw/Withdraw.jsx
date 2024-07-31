import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Withdraw.css'
import add from "../../assets/add-yellow.png"
import arrow from "../../assets/back-icon.svg"
import card from "../../assets/atmcard.svg"
import checked from "../../assets/checked.svg"
import unchecked from "../../assets/unchecked.svg"
import sterling from "../../assets/sterling.svg"
import zenith from "../../assets/zenith.svg"
import WithdrawSuccess from './WithdrawSuccess'

function Withdraw({ID, handleClick, selectedPayment, setSelectedPayment}) {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    } 

    const withdraw = [
      {id: 1, img: sterling, P: 'Sterling Bank'},
      {id: 2, img: zenith, P: 'Zenith Bank'}
    ];

    const handlePaymentClick = (id) => {
        setSelectedPayment((prevSelected) => (prevSelected === id ? null : id));
      };

  return (
    <main className='withdraw-container'>
        <section className='withdraw-aside' onClick={() => handleClick(ID)}>
            <img src={arrow} alt='arrow icon' />
            <p>Back</p>
        </section>
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
            <p>Amount</p>
            <img src={card} alt='atm-card' />
        </div>

            {withdraw.map(({id, img, P})=> (
                            <div className='withdraw-align2' key={id}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                                <img src={img} alt='bank logo' />
                                <p style={{fontSize: '14px'}}><span>{P}</span> <br />007864927, Kingsley Ezechukwu</p>
                            </div>
                            <img src={selectedPayment === id ? checked : unchecked} alt='atm-card' onClick={()=> handlePaymentClick(id)} style={{cursor: 'pointer'}} />
                        </div>
            ))}

            <Link to='/addaccount' style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', color: '#eea837', alignItems: 'center', justifyContent: 'end', gap: '5px', margin: '1.8rem 0 10rem 0'}}>
                <img src={add} alt='add icon' />
                <p>Add Bank Account</p>
            </div>
            </Link>

            <div>
            <button className='leftside-align3' onClick={toggleVisible}>Continue</button>
            </div>
        </section>

        <WithdrawSuccess isVisible={isVisible} onClose={toggleVisible} />
        </main>
  )
}

export default Withdraw;