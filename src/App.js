import logo from './logo.svg';
import './App.css';
import Navbar from './Shered/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Protfolio from './Pages/Protfolio/Protfolio';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Home></Home>
       <Protfolio></Protfolio>
    </div>
  );
}

export default App;
