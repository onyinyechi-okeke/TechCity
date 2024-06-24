import React, { useState } from 'react'
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
      </Routes>
    </div>
  )
}

export default App;