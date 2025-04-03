
import {BrowserRouter as  Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>
    </Router>
  );
}

export default App;
