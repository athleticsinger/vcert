import React from 'react';
import { Link } from 'react-router-dom';

function AdminSideBar() {
    return (
        <div className="sidebar text-white" id="nav-bar">
            <nav className="header-box">
                <p className='navbar-brand'><span>verify</span>am</p>
                <div className='links mt-5'>
                    <li class="sidebar-item mb-4">
                        <Link class="sidebar-link" to="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart align-middle"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                             <span class="align-middle"> Dashboard</span>
                        </Link>
                    </li>
                    <li class="sidebar-item mb-4">
                        <Link class="sidebar-link" to="/database">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers align-middle"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                             <span class="align-middle"> Database</span>
                        </Link>
                    </li>
                </div>
                <a href="/" className="nav_link sign-out"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>

            </nav>
        </div>
    );
}

export default AdminSideBar;