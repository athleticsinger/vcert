import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Database from './pages/Database';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='admin' element={<Admin/>} />
            <Route path='database' element={<Database/>} />
            <Route path='register' element={<Register/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
