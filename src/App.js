import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './Page/Navbar/Navbar';
import Banner from './Page/Banner/Banner';
import Features from './Page/Features/Features';
import Portfolio from './Page/Portfolio/MyPortfolio';
import Footer from './Page/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
