import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/components/navbar.css';
function NavBar() {
    return (
        <div className='navBar'>
            <div className='navbar navbar-main navbar-expand-lg navbar-dark'>
                <div className='container'>
                <p className='navbar-brand'><span>verify</span>am</p>
                <div className='navBarLinks d-flex'>
                    <Link  className='mr-3'>login</Link>
                    <Link to='/login' className='btn btn-success'>instituion</Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;