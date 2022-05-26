import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import LoginSignup from "./Components/Connexion/LoginSignup";
import ForgotPassword from "./Components/Connexion/ForgotPassword";
import ForgotPasswordReset from "./Components/Connexion/ForgotPasswordReset";
import PetSitter from "./Components/PetSitter/PetSitter";
import Boarding from "./Components/Boarding/Boarding";
import DogWalking from "./Components/DogWalking/DogWalking";
import Training from "./Components/Training/Training";
import Veterinary from "./Components/Veterinary/Veterinary";
import PetDayCare from "./Components/PetDayCare/PetDayCare";
import Search from "./Components/Search/Search";
import RequestService from "./Components/RequestService/RequestService";
import StepContext from "./Components/RequestService/StepContext";
import Login from "./Components/Connexion/login";

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
        <Route path='/DogWalking' element={<DogWalking/>}/>
        <Route path='/Training' element={<Training/>}/>
        <Route path='/Veterinary' element={<Veterinary/>}/>
        <Route path='/PetDayCare' element={<PetDayCare/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/RequestService' element={<RequestService/>}/>
        <Route path='/StepContext' element={<StepContext/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
