
import arrow from '../assets/chevron-down.svg';
import trending from "../assets/trending-green.svg"
function SellShares () {
  return (
    <main className='withdraw-container'>


<section className='home-host withdraw-align'>
    <div className='withdraw-align1'>
        <div className='WA-sub'>
            <p>Amount</p>
            <p className='WA-subp'>$0.00</p>
        </div>

        <div className='WA-sub'>
            <p>Shares</p>
            <p className='WA-subp'>0 $TCA</p>
        </div>
    </div>

    <div className='withdraw-align2'>
        <p>How many shares do you want to sell</p>
    </div>

    <div className='withdraw-align2'>
    <p style={{fontSize: '14px'}}>Choose wallet</p>
            <img src={arrow} alt='bank logo' />
    </div>

    <div style={{display: 'flex', justifyContent: 'space-between', color: '#eea837'}}>
        <p>This will be credited to your wallet in seconds</p>
        <div style={{display: 'flex',alignItems: 'center'}}>Rate: 1$TCA = 250 <img src={trending} alt='trending icon' /></div>
    </div>

        <div>
        <button className='leftside-align3' style={{marginTop: '15rem'}}>Sell 200 Shares</button>
        </div>
    </section>


    </main>
  )
}

export default SellShares;