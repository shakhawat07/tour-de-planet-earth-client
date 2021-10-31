import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleRegistration, isLogin, setUser, handleNameChange, handleEmailChange, handlePasswordChange, setError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
                setError('');
            })
    }
    return (
        <div className="container-fluid">
            <div className="login-container my-5">
                <form onSubmit={handleRegistration}>
                    <h2 className="text-primary fw-bold mb-4 text-center">Please {!isLogin ? 'Login' : 'Register'}</h2>
                    {/* user name  */}
                    {isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Username: </label>
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Enter Username" name="username" required />
                    </div>}
                    {/* email  */}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Email: </label>
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Enter email" name="email" required />
                    </div>
                    {/* password  */}
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Password:</label>
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Enter Password" name="password" autoComplete="on" required />
                    </div>
                    {/* phone  */}
                    {isLogin && <div className="row mb-3">
                        <label htmlFor="inputPhone" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Phone: </label>
                        <input type="text" className="form-control" id="inputPhone" placeholder="Enter Phone" name="phone" />
                    </div>}
                    {/* address  */}
                    {isLogin && <div className="row mb-3">
                        <label htmlFor="inputAddress" className="text-black fw-bold mx-3 col-sm-2 col-form-label mt-3">Address: </label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" name="address" />
                    </div>}
                    {/* toggle checkbox  */}
                    {/* <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="ms-2 form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="ms-2 text-black fw-bolder ms-3 form-check-label" htmlFor="gridCheck1">{!isLogin ? 'New user?' : 'Already Registered?'}</label>
                            </div>
                        </div>
                    </div> */}
                    {/* submit button  */}
                    {/* <div className="row mb-2 text-danger">{error}</div>
                    <br />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-danger rounded">
                            {!isLogin ? 'Login' : 'Register'}
                        </button>
                    </div> */}
                    <br />
                    {/* google sign in button  */}
                    <div className="d-flex justify-content-center mt-2">
                        <button className="btn btn-primary" onClick={handleGoogleLogin}>Google Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;