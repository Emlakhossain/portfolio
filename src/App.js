import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './Page/Navbar/Navbar';
import Banner from './Page/Banner/Banner';
import Features from './Page/Features/Features';
import Footer from './Page/Footer/Footer';
import AboutMe from './Page/AboutMe/AboutMe';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import ContactUs from './Page/ContactUs/ContactUs';
import MyPortfolio from './Page/Portfolio/MyPortfolio';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Routes>
        <Route path='/resume' element={<Banner></Banner>}> Resume</Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/feature' element={<Features></Features>}></Route>
        <Route path='/MyPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
