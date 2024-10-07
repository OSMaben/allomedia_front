import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/signUp';
import Hero  from './components/Hero';
import ConfirmYourEmail from "./pages/confirmYourEmail";
import EmailHasBeenVerified from "./pages/EmailHasBeenVerified";
import SignIn from "./pages/signIn";
import '../src/assets/js/scripti';
import VerifyMyOtp from "./components/VerifyMyOtp"
import Dashboard from "./pages/Dashboard";
import ForgetPassword from "./components/ForgetPassword"
import PasswordChangePage from "./components/ChangeYourPassword";
import SnakeGame from "./components/pageNotFound";

function App() {
  return (
   <Router>
       <div >
        <Header />
           <Routes>
               <Route path="*" element={<SnakeGame />} />
               <Route path="/" element={<Hero/>} />
               <Route path="/footer" element={<Footer />} />
               <Route path="/auth/signup" element={<SignUp />} />
               <Route path="/auth/login" element={<SignIn />} />
               <Route path="/auth/verify-my-otp" element={<VerifyMyOtp />} />
               <Route path="/auth/confirmEmail" element={<ConfirmYourEmail />} />
               <Route path="/auth/ForgetPassword" element={<ForgetPassword />} />
               <Route path="/auth/passwordChangePage/:token" element={<PasswordChangePage />} />
v               <Route path="/Dashboard" element={<Dashboard />} />
               <Route path="/auth/email-confirmation-success" element={<EmailHasBeenVerified />} />
           </Routes>
       </div>
   </Router>
  );
}

export default App;
