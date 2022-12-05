import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './Page/Navbar/Navbar';
import Banner from './Page/Banner/Banner';
import Features from './Page/Features/Features';
import Portfolio from './Page/Portfolio/MyPortfolio';
import Footer from './Page/Footer/Footer';
import ContactUs from './Page/ContactUs/ContactUs';
import MySkils from './Page/MySkils/MySkils';
import AboutMe from './Page/AboutMe/AboutMe';

function App() {
  return (
    <div className="App ">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Portfolio></Portfolio>
      <AboutMe></AboutMe>
      <MySkils></MySkils>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
