import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import InvestorSignUp from './Pages/SignUp/InvestorSignUp';
import MarketerSignUp from './Pages/SignUp/MarketerSignUp';
import VolunteerSignUp from './Pages/SignUp/VolunteerSignUp';
import LogIn from './Pages/LogIn/LogIn';
import ConfirmPassword from './Pages/LogIn/ConfirmPassword';
import ConfirmEmail from './Pages/LogIn/ConfirmEmail';
import InvestorDashboard from './Pages/Dashboards/InvestorDashboard';
import MarketerDashboard from './Pages/Dashboards/MarketerDashboard';

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div>
      <NavBar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu}/>
      <InvestorDashboard />
    </div>
  )
}

export default App;