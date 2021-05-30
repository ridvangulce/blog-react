import React from 'react';
import {Link, withRouter} from "react-router-dom"
import GoogleLogin from 'react-google-login';
import {RiLockPasswordFill} from "react-icons/ri"
import {FaUserAlt} from "react-icons/fa"
import {AiOutlineEnter} from "react-icons/ai"

const Login = ({handleFormChange, passwordHandleFormChange, handleFormLogin, name, password}) => {


    const handleChange = (event) => {
        handleFormChange(event.target.value)
    }
    const passwordHandleChange = (event) => {
        passwordHandleFormChange(event.target.value)
    }
    const handleLogin = (event) => {
        event.preventDefault()
        handleFormLogin()
    }
    const passwordHandleLogin = (event) => {
        event.preventDefault()
        handleFormLogin()
    }
    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div id="container-login">

            <div id="container-login-form">

                <div id="container-login-form-name">
                    <form onSubmit={handleLogin}>
                        <label>
                            <input type="text" name="name" placeholder="Username"
                                   onChange={handleChange}
                                   value={name}/>
                        </label>
                        <FaUserAlt className="icon-user"/>
                    </form>
                </div>
                <div id="container-form-login-password">
                    <form onSubmit={passwordHandleLogin}>
                        <label>
                            <input type="password" name="password"
                                   placeholder="Password"
                                   onChange={passwordHandleChange}
                                   value={password}
                            />
                            <RiLockPasswordFill className="icon-password"/>
                        </label>
                        <br/>
                        <button type="submit" id="button-login"> Login</button>

                        <GoogleLogin clientId="217098860735-k3onvcs6enc0hu6jgigcl4tn9njt5hkr.apps.googleusercontent.com"
                                     buttonText="Login"
                                     onSuccess={responseGoogle}
                                     onFailure={responseGoogle}
                                     cookiePolicy="single_host"
                                     isSignedIn={true}
                        >Login</GoogleLogin>
                    </form>

                    <div className="link">
                        <Link to="/register">Register</Link>
                    </div>
                </div>

            </div>

        </div>
    );
}


export default withRouter(Login);
