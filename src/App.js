import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='admin' element={<Admin/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;