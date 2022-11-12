import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './Page/Navbar/Navbar';
import Banner from './Page/Banner/Banner';
import Features from './Page/Features/Features';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Features></Features>
    </div>
  );
}

export default App;
