import React, {useState} from 'react';
import NavBar from '../components/NavBar';
import uploadImg from '../props/uploadImg.svg';
import SuccessModal from '../components/Modals/SuccessModal';
import DeclineModal from '../components/Modals/Declined';
function Home() {
    const [ID, setID] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [declineModalShow, setDeclineModalShow] = useState(false);
    function Validate() {
        if(ID.length > 3 ){
            setModalShow(!modalShow)
        } 
        if(ID.length < 3 ){
            setDeclineModalShow(!modalShow)
        } 
    } 

    return (
        <div className='Home'>
            <NavBar/>
            <div className='Home__inner container'>
                <div className='row container align-items-center'>
                    <div className='Home__inner__textField col-12 col-lg-9 mt-3 mx-auto'>
                        <h1 className='display-3 text-white font-weight-bolder mb-4'>
                            Welcome to the Decentralized Certificate Verification System
                        </h1>
                        <p className='text-white'>
                           Our system allows employers and organizations to easily verify university degrees in seconds
                        </p>
                       <div className='input-group input-group-lg mb-3 mt-5'>
                        <input type="text" className='form-control' placeholder='Enter certificate ID'
                            onChange={(e)=>{
                                setID(e.target.value)
                            }}
                        />
                            <button className='btn btn-lg btn-success'
                            onClick={Validate}
                            >Verify</button>
                       </div>
                    </div>
                    {/* <div className='Home__inner__imgDrop col-12 col-lg-4 pr-lg-5"'>
                        <label htmlFor="">
                        {/* <img src={uploadImg} alt="" />
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
                    </div> */}
                </div>
            </div>
            <SuccessModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            />
            <DeclineModal
            show={declineModalShow}
            onHide={() => setDeclineModalShow(false)}
            />
        </div>
    );
}

export default Home;