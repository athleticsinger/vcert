import React, { useState } from 'react';
import AdminNavBar from '../components/AdminNavBar';
import AdminSideBar from '../components/AdminSideBar';
import uploadImg from '../props/uploadImg.svg';


function Admin() {
    const [certificate, setCertificate] = useState([])
    return (
        <div className='Admin d-flex'>
             <AdminSideBar />
            <div className='Admin__main '>
              
                <AdminNavBar />
                <div className='Admin__inner container mt-5'>
                    <div className='Login__inner__form Admin__inner__input row card mx-auto'>
                        <div className='col-12 col-lg-7 '>
                            <div className='row py-4 px-4'>
                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Name</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>
                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Faculty</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>
                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Department</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>
                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Class of Honour</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>

                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Year of Graduation</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>

                                <div className='form-group mb-3 col-12 col-lg-6'>
                                    <label class="form-control-label">Certificate ID</label>
                                    <div class="input-group ">
                                        <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                        <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder="" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-12 col-lg-5 py-5 px-5 mx-auto'>
                            <div className='Admin__inner__input__img py-2 px-2'>
                                <label htmlFor="">
                                    <img src={uploadImg} alt="" />
                                    <input type="file" id="image_pro" accept=".pdf" onChange={(e) => {
                                        setCertificate(e.target.files[0])
                                        console.log(e.target.files[0].name);
                                    }} />
                                </label>
                                <p className='mx-auto instruction'>{
                                    certificate.length === 0 ?
                                        'Click or drop to upload'
                                        :
                                        `Uploaded: ${certificate.name}`
                                }</p>
                            </div>
                        </div>

                        <button className='mt-4 mb-4 mx-auto btn btn-success'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;