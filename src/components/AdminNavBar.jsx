import React from 'react';

function AdminNavBar() {
    return (
        <div className='AdminNav navbar  navbar-light bg-white'>
           {/* <div className='AdminNav__inner d-flex justify-content-space-between'> */}
           <p>University of Benin</p>
                <div className='d-flex justify-content-space-between'>
                    
                   <button className='btn btn-success'>Connect Wallet</button>
                </div>
           {/* </div> */}
        </div>
    );
}

export default AdminNavBar;