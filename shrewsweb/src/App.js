import './App.css';

// import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Location from './pages/Location';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section id='homepage'>
        <Homepage/>
      </section>
      <Rooms/>
      <Services/>
      <Location/>
    </div>
  );
}

export default App;
