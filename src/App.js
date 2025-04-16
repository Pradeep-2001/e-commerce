
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/' element={<Shop/>}/>
      <Route path='/' element={<Shop/>}/>
      <Route path='/' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
