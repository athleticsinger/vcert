import React, { useState } from 'react';
import AdminNavBar from '../components/AdminNavBar';
import AdminSideBar from '../components/AdminSideBar';
import uploadImg from '../props/uploadImg.svg';


function Database() {
    const [certificate, setCertificate] = useState([])
    return (
        <div className='Admin d-flex'>
            <AdminSideBar />
            <div className='Admin__main '>

                <AdminNavBar />
                <div className='Admin__inner container mt-5'>
                    <div className='Login__inner__form Admin__inner__input row card mx-auto px-5 py-5'>
                        <h4 className='mb-3'>Database</h4>
                        <table class="table caption-top table-bordered ">
                        
                        <thead class="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Year of Graduation</th>
                                    <th scope="col">ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Uba Noel</td>
                                    <td>2022</td>
                                    <td>CSC1245XV</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Inaku Joel</td>
                                    <td>2022</td>
                                    <td>CSC1020CC</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Itepu Scott-Peters</td>
                                    <td>2019</td>
                                    <td>AGC5014CZ</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Imoloame Rhema</td>
                                    <td>2023</td>
                                    <td>CSC1214CXZ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Database;