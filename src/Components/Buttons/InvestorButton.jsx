import { Link } from 'react-router-dom'
import addblack from '../../assets/add-black.png'
import sell from '../../assets/sell-inactive.svg'
import './Button.css'

function InvestorButton() {
  return (
    <div className='sidebar-buttondiv'>
      <Link to='/sellshares' style={{textDecoration: 'none'}}>
        <button style={{marginTop: '2.5%', color: 'rgb(205, 199, 199)'}}><img src={sell} alt='an icon' />Sell Shares</button>
        </Link>
        <Link to='/buyTCAshares' style={{textDecoration: 'none'}}>
            <button style={{backgroundColor: 'white', color: 'black', marginTop: '2%', fontWeight: '600'}}>
              <img src={addblack} alt='an icon' />Buy Shares</button>
              </Link>
    </div>
  )
}

export default InvestorButton