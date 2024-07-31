import { Link, useLocation } from 'react-router-dom';
import './Toggle.css';

function Toggle() {
  const location = useLocation();

  return (
    <main className='toggle-container'>
      <Link 
        to='/buyTCAshares' 
        style={{ textDecoration: 'none', color: 'white' }} 
        className={`toggle-hover ${location.pathname === '/buyTCAshares' ? 'active' : ''}`}
      >
        <div className='toggle-align'>Buy $TCA Shares</div>
      </Link>
      <Link 
        to='/buyfixedshares' 
        style={{ textDecoration: 'none', color: 'white' }} 
        className={`toggle-hover ${location.pathname === '/buyfixedshares' ? 'active' : ''}`}
      >
        <div className='toggle-align'>Fixed Rate</div>
      </Link>
      <Link 
        to='/buyappartment' 
        style={{ textDecoration: 'none', color: 'white' }} 
        className={`toggle-hover ${location.pathname === '/buyappartment' ? 'active' : ''}`}
      >
        <div className='toggle-align'>Buy Apartment Unit</div>
      </Link>
    </main>
  );
}

export default Toggle;
