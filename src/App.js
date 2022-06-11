
import './App.css';
import Home from './Pages/Home/Home';
import Protfolio from './Pages/Protfolio/Protfolio';
import Resume from './Pages/Resume/Resume';
import Hearder from './Sheared/Header/Hearder';


function App() {
  return (
    <>
    <Hearder>
          <Home></Home>
          <Protfolio></Protfolio>
          <Resume></Resume>
    </Hearder>

    </>
  );
}

export default App;
