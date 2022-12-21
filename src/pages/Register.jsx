import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebaseConfig';
import { doc, setDoc, } from "firebase/firestore";

function Register() {
    const navigate = useNavigate();
    const [universityName, setUniversityName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {signUp, Uid} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    function Validate() {
        if(password.length < 8){
            setError("Password must be atleast 8 characters long")
        }
        else if ( password.length  === 0  || email.length  === 0  ) {
            setError("It appears some fields are empty")
        }
        else{
            setError('');
            setLoading(true);
        }
    }

    const handleRegister = async ()=>{
        Validate();
       try {
         await signUp(email, password);
            // temporary working solution (not best practice),
           await setDoc(doc(db, "universities", Uid[0]), {
                universityName : universityName,
                email  : email,
                // password: password
            }).then(
                navigate('/admin')
            )
         
       //  console.log(currentUser)

        // const loguser = await signInWithEmailAndPassword(auth, email, password);
        // sessionStorage.setItem('userID', auth.currentUser.uid)
        
       } catch (error) {
        console.log(error);
       setError('Failed to create account (Check your network) ');
       setLoading(false)
       }
    }

    return (
        <div className='Login'>
            <div className='row Login__inner '>
                <div className='col-12 col-lg-6 left container'>
                    <div className='container Login__inner__form centered-form'>
                    <div className='form-group mb-4'>
                            <label class="form-control-label">University Name</label>
                            <div class="input-group ">
                                <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                <input type="text" class="form-control form-control-prepend"
                                    onChange={(e)=>{
                                        setUniversityName(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className='form-group mb-4'>
                            <label class="form-control-label">Email</label>
                            <div class="input-group ">
                                <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                <input type="text" class="form-control form-control-prepend"
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label class="form-control-label">Password</label>
                            <div class="input-group ">
                                <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></span>
                                <input type="password" class="form-control form-control-prepend" 
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                />
                            </div>
                        </div>
                        {/* <div className='forgot-password'>
                        <Link>Forgot Password</Link>
                        </div> */}

                        {/* <div class="my-4">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="rememberme" name="rememberme"/> 
                                        <label class="custom-control-label" for="rememberme"><strong>Remember me</strong></label>
                                    </div>
                                </div> */}
                        
                        <button onClick={()=> {handleRegister()}} className='mt-5 btn btn-primary btn-block btn-lg'>{loading ? 'loading...': "Register"}</button>
                        {error && <p className='error text-red mt-3'>{error}</p>}
                    </div>

                </div>
                <div className='col-lg-6 right'>
                    <div className='container'>
                        <h5 className='text-white mb-4'>Already have an account?</h5>
                        {/* <p className='text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor</p> */}
                        <button className='btn btn-success'
                        onClick={()=>{
                            navigate('/login')
                        }}
                        >Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;