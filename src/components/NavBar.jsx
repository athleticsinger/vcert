import React from 'react';
import { Link } from 'react-router-dom';
// import '../styles/components/navbar.css';
function NavBar() {
    return (
        <div className='navBar'>
            <div className='navbar navbar-main navbar-expand-lg navbar-dark'>
                <div className='container'>
                <p className='navbar-brand'>logo</p>
                <div className='navBarLinks d-flex'>
                    <Link  className=''>link1</Link>
                    <Link to='/login'>instituion</Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;