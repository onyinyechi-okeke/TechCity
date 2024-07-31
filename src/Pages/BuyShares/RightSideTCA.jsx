import {useState} from 'react'
import yellowprogress from "../../assets/yellowprogress.svg"
import unchecked from "../../assets/unchecked.svg"
import checked from "../../assets/goodchecked.svg"
import arrow from "../../assets/chevron-down.svg"
import arrowup from "../../assets/arrow-up.svg"

function RightSide({show, handleShow, selectedPayment, setSelectedPayment}) {

    const Benefits = [
        {id: 1, H: '10-100', P: 'Exclusive Access - Gain priority access to project updates and insider information through', 
         Q: 'a dedicated newsletter or investor portal.', R: 'Shares (Token) appreciation.'},

        {id: 2, H: '100-500', P: 'All in Number 1 and Exclusive Access.* Priority consideration for early access to new features,', 
         Q: 'products, or services developed by the Tech city project. 50% discount on all Tech Related Educational', R: 'Programs held in the Tech city for investors lifetime.'},

        {id: 3, H: '500-1000', P: 'Governance Rights: Shape the future of our community by voting on important matters within the city.', 
         Q: '$TCA Shareholders can vote on important issues in Tech City. All Benefits in Number 3. Name will be sculpted', R: 'and Immortalized into the Wall of Contributors, Wall of Fame'},
        
        {id: 4, H: '1000-3000', P: 'Exclusive Access: invitation to exclusive investor events, such as networking dinners or project', 
         Q: 'milestone celebrations. All Benefits in Number 3. Enjoy 20% Discount when purchasing Apartment in the', R: 'Tech City with your Tokenized Shares'}, 
         
        {id: 5, H: '3000-100,000 (& Above)', P: 'All in number 4- Profit Sharing: Earn a passive income with a 10% APR distributed in USDT annually to all', 
         Q: '$TCA holders through a smart contract. Token Share Appreciation: Watch your $TCA grow alongside', R: 'and Immortalized into the Wall of Contributors, Wall of Fame'}
    ]

    const handlePaymentClick = (id) => {
      setSelectedPayment((prevSelected) => (prevSelected === id ? null : id));
    };
  return (
    <main className='rightside-container'>
      <section className='rightside-align'>
            <div className='RSA-sub'>
                <p>Shares Available: 30,000 $TCA</p>
                <p>Total Shares: 100,000 $TCA</p>
            </div>
            <img src={yellowprogress} alt='a progress bar' width={740} />
            <div className='RSA-sub1'>
                <p>28%</p>
                <p>100%</p>
            </div>
      </section>

      <section className='rightside-responsive2'>
        <div className={`rightside-responsive1 ${show ? 'show' : ''}`} onClick={handleShow}>
          <p className='RS-aside'>{show? 'Your Benefits' : 'See your Benefits'}</p>
          <img src={arrow} alt='arrow icon' />
        </div>

        {Benefits.map(({id, H, P, Q, R})=> (
            <div key={id} className={`rightside-align1 ${selectedPayment === id ? 'selected' : ''} ${show ? 'show' : ''}`}
            style={{ fontSize: id === 1 ? '16px' : '14px' }}>
                <div className={`RSA1-sub ${selectedPayment === id ? 'selected1' : ''}`}  onClick={() => handlePaymentClick(id)}>
                    <p>{H} Shares (tokens)</p>
                    <img src={selectedPayment === id ? checked : unchecked} alt='checklist' height={24} />
                </div>
                <div className='RSA1-sub1'>
                <p> {P} {Q} {R} </p>
                </div>
            </div>
        ))}
      
      </section>

      <section className='rightside-responsive'>
        <button>Buy ($10 TCA Shares)</button>
      </section>

    </main>
  )
}

export default RightSide;