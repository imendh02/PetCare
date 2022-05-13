import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import LoginSignup from "./Components/Connexion/LoginSignup";
import ForgotPassword from "./Components/Connexion/ForgotPassword";
import ForgotPasswordReset from "./Components/Connexion/ForgotPasswordReset";
import PetSitter from "./Components/PetSitter/PetSitter";
import Boarding from "./Components/Boarding/Boarding";
import HeroBoarding from "./Components/Boarding/HeroBoarding";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/ForgotPasswordReset' element={<ForgotPasswordReset/>}/>
        <Route path='/PetSitter' element={<PetSitter/>}/>
        <Route path='/Boarding' element={<Boarding/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
