import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Database from './pages/Database';
import Register from './pages/Register';
import AuthProvider from './contexts/AuthContext';
function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='admin' element={<Admin/>} />
            <Route path='database' element={<Database/>} />
            <Route path='register' element={<Register/>} />
          </Routes>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
