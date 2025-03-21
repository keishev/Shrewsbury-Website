import './App.css';
import Homepage from './pages/Homepage';
import Rooms from './pages/Rooms';
import Services from './pages/Services';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Homepage/>
      <Rooms/>
      <Services/>
    </div>
  );
}

export default App;
