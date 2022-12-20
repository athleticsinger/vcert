import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const { logIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = getAuth();


    const handleSignIn = async (e) => {
        if (password.length < 1 || email.length < 1) {
            setError("It appears some fields are empty");
        //     e.preventDefault()
        }
        else {
            setError('');
            setLoading(true);
        }
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    navigate('/admin')
                    // ...
                })
                .catch((err) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    console.log(err)
                    console.log(err.code)
                    setError(err.message);
                });
         
        }
        catch (err) {
            console.log(err)
            console.log(err.code)
            setError(err.code);
            setLoading(false)

        }
    }
    return (
        <div className='Login'>
            <div className='row Login__inner '>
                <div className='col-12 col-lg-6 left container'>
                    <div className='container Login__inner__form centered-form'>
                        <div className='form-group mb-4'>
                            <label class="form-control-label">Email</label>
                            <div class="input-group ">
                                <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder=""
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className='form-group'>
                            <label class="form-control-label">Password</label>
                            <div class="input-group ">
                                <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-key"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg></span>
                                <input type="text" class="form-control form-control-prepend" id="input-email" name="email" placeholder=""
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className='forgot-password'>
                            <Link>Forgot Password</Link>
                        </div>

                        {/* <div class="my-4">
                                    <div class="custom-control custom-checkbox mb-3">
                                        <input type="checkbox" class="custom-control-input" id="rememberme" name="rememberme"/> 
                                        <label class="custom-control-label" for="rememberme"><strong>Remember me</strong></label>
                                    </div>
                                </div> */}

                        <button onClick={() => { handleSignIn() }} className='mt-5 btn btn-primary btn-block btn-lg'>Login</button>
                        {error && <p className='error text-red mt-3'>{error}</p>}
                    </div>

                </div>
                <div className='col-lg-6 right'>
                    <div className='container'>
                        <h5 className='text-white mb-4'>Don't have an account?</h5>
                        {/* <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor</p> */}
                        <button className='btn btn-success'
                            onClick={() => {
                                navigate('/register')
                            }}
                        >{loading ? 'loading...': "Register"}</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;