import Home from './Components/Home';
import Collections from '../src/Components/Collection'
import AboutUs from './Components/AboutUS';
import Contact from './Components/Contact';
import Faq from './Components/Faq';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ReturnRefund from './Components/ReturnRefund';
import LogIn from './Components/Login';
import CreateAcc from './Components/CreateAccount';
import Forgot from './Components/ForgotPass';
import MyAccount from './Components/MyAccount';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home></Home>}></Route>
          <Route path='AboutUs' element ={<AboutUs></AboutUs>}></Route>
          <Route path='Contact' element={<Contact></Contact>}></Route>
          <Route path='Collections' element ={<Collections></Collections>}></Route>
          <Route path='PrivacyPolicy' element ={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='PrivacyPolicy' element ={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='faq' element={<Faq></Faq>}></Route>
          <Route path='Return&Refund' element={<ReturnRefund></ReturnRefund>}></Route>
          <Route path='Login' element={<LogIn></LogIn>}></Route>
          <Route path='CreateAccount' element={<CreateAcc></CreateAcc>}></Route>
          <Route path='ForgotPassword' element={<Forgot></Forgot>}></Route>
          <Route path='MyAccount' element={<MyAccount></MyAccount>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
