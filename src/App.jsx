import  { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import InvestorSignUp from './Pages/SignUp/InvestorSignUp';
import MarketerSignUp from './Pages/SignUp/MarketerSignUp';
import VolunteerSignUp from './Pages/SignUp/VolunteerSignUp';
import LogIn from './Pages/LogIn/LogIn';
import LogInMarketer from './Pages/LogIn/LogInMarketer';
import ConfirmPassword from './Pages/LogIn/ConfirmPassword';
import ConfirmEmail from './Pages/LogIn/ConfirmEmail';
import InvestorDashboard from './Pages/Dashboards/InvestorDashboard';
import MarketerDashboard from './Pages/Dashboards/MarketerDashboard';
import AddNok from './Pages/Nok/AddNok';
import EditProfile from './Pages/EditProfile';
import BuyShares from './Pages/BuyShares/BuyTCAShares';
import BuyFixedShares from './Pages/BuyShares/BuyFixedShares';
import BuyApartment from './Pages/BuyShares/BuyApartment';
import Withdraw from './Pages/Withdraw/Withdraw';
import AddAccount from './Pages/Withdraw/AddAccount';
import SellShares from './Pages/SellShares';

function App() {

  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow (!show);
  }

  const [selectedPayment, setSelectedPayment] = useState(null);


    const ID = '/InvestorDashboard'
    const MD = '/MarketerDashboard'
    const LI = '/login'
    const LM = '/marketerlogin'
    const CE = '/ConfirmEmail'
    const CP = '/changepassword'
    const IS = '/Investorsignup'
    const MS = '/Marketersignup'

    const handleClick = (p) => {
      navigate(p)
    }


  return (
    <div>
      <NavBar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen}/>
      <Routes>
       <Route path='/' element={ <Home /> } />
       <Route path = '/Investorsignup' element={<InvestorSignUp isPasswordVisible={isPasswordVisible} togglePassword={togglePassword} ID={ID} handleClick={handleClick} LI={LI}  /> } />
       <Route path = '/marketersignup' element={<MarketerSignUp isPasswordVisible={isPasswordVisible} togglePassword={togglePassword} MD={MD} handleClick={handleClick} LM={LM} /> } />
       <Route path = '/volunteersignup' element={<VolunteerSignUp isPasswordVisible={isPasswordVisible} togglePassword={togglePassword} /> } />
       <Route path = '/login' element={<LogIn isPasswordVisible={isPasswordVisible} togglePassword={togglePassword}  ID={ID} handleClick={handleClick} IS={IS} CE={CE} /> } />
       <Route path = '/marketerlogin' element={<LogInMarketer isPasswordVisible={isPasswordVisible} togglePassword={togglePassword} MD={MD} handleClick={handleClick} CE={CE} MS={MS} /> } />
       <Route path='/confirmemail' element={ <ConfirmEmail handleClick={handleClick} CP={CP}/>} />
       <Route path = '/changepassword' element={<ConfirmPassword isPasswordVisible={isPasswordVisible} togglePassword={togglePassword} /> } />
      <Route path='/InvestorDashboard' element={ <InvestorDashboard MS={MS} handleClick={handleClick} /> } />
      <Route path='/MarketerDashboard' element={ <MarketerDashboard IS={IS} handleClick={handleClick} /> } />
      <Route path='/AddNok' element={ <AddNok  /> } />
      <Route path = '/editprofile' element={<EditProfile  handleClick={handleClick} CE={CE} /> } />
      <Route path='/buyTCAshares' element={ <BuyShares show={show} handleShow={handleShow} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} /> } />
      <Route path='/buyfixedshares' element={ <BuyFixedShares /> } />
      <Route path='/buyappartment' element={ <BuyApartment show={show} handleShow={handleShow} /> } />
      <Route path='/withdraw' element={ <Withdraw ID={ID} handleClick={handleClick} selectedPayment={selectedPayment} setSelectedPayment={setSelectedPayment} /> } />
      <Route path='/addaccount' element={ <AddAccount /> } />
      <Route path='/sellshares' element={ <SellShares /> } />
      </Routes>
    </div>
  )
}

export default App;