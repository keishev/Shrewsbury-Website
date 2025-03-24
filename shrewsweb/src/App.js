import './App.css';

// import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Location from './pages/Location';
import Activities from './pages/Activities';

import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <section id='homepage'>
        <Homepage/>
      </section>
      <section id='activities'>
        <Activities/>
      </section>
      <section id='rooms'>
        <Rooms/>
      </section>
      <section id='services'>
        <Services/>
      </section>
      <section id='location'>
        <Location/>
      </section>
    </div>
  );
}

export default App;
