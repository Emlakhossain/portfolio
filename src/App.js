import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Navbar from './Page/Navbar/Navbar';
import Banner from './Page/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
