import Home from './Components/Home';
import Collections from '../src/Components/Collection'
import AboutUs from './Components/AboutUS';
import Contact from './Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home></Home>}></Route>
          <Route path='AboutUs' element ={<AboutUs></AboutUs>}></Route>
          <Route path='Contact' element={<Contact></Contact>}></Route>
          <Route path='Collections' element ={<Collections></Collections>}></Route>
        </Routes>
     </BrowserRouter>
  );
}

export default App;
