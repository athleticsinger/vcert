import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import uploadImg from '../props/uploadImg.svg';
function Home() {
    const [certificate, setCertificate] = useState([])
    return (
        <div className='Home'>
            <NavBar/>
            <div className='Home__inner container'>
                <div className='row container align-items-center'>
                    <div className='Home__inner__textField col-12 col-lg-5 mt-3'>
                        <h1 className='display-2 text-white font-weight-bolder mb-4'>
                            Certificate Verification
                        </h1>
                        <p className='text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis s
                        </p>
                       <div className='input-group input-group-lg mb-3 mt-5'>
                        <input type="text" className='form-control' placeholder='Enter your certificate id' />
                            <button className='btn btn-lg btn-success'>Verify</button>
                       </div>
                    </div>
                    <div className='Home__inner__imgDrop col-12 col-lg-4 pr-lg-5"'>
                        <label htmlFor="">
                        <img src={uploadImg} alt="" />
                        <input type="file" id="image_pro" accept=".pdf" onChange={(e)=>{
                            setCertificate(e.target.files[0])
                            console.log(e.target.files[0].name);
                        }} />
                        </label>
                        <p className='text-white mx-auto instruction'>{
                            certificate.length === 0 ? 
                            'Click or drop to upload'
                            :
                            `Uploaded: ${certificate.name}`
                        }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;