import React from 'react';

function AdminNavBar() {
    return (
        <div className='AdminNav navbar  navbar-light bg-white'>
           {/* <div className='AdminNav__inner d-flex justify-content-space-between'> */}
                <p>toggle</p>
                <div className='d-flex justify-content-space-between'>
                    <p>School Name</p>
                    <p>Avatar</p>
                </div>
           {/* </div> */}
        </div>
    );
}

export default AdminNavBar;