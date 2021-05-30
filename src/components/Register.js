import React, {useState} from 'react';
import "../style.css"
import {Link} from "react-router-dom";
import {RiLockPasswordFill} from "react-icons/ri";
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import {MdDateRange} from "react-icons/md"
import GoogleLogin from "react-google-login";


const Register = ({
                      handleFormSubmit,
                      name,
                      email,
                      password,
                      age,
                      handleFormChange,
                      emailHandleFormChange,
                      passwordHandleFormChange,
                      ageHandleFormChange

                  }) => {


    const handleChange = (event) => {
        handleFormChange(event.target.value)

    }
    const emailHandleChange = (event) => {
        emailHandleFormChange(event.target.value)
    }
    const passwordHandleChange = (event) => {
        passwordHandleFormChange(event.target.value)
    }
    const ageHandleChange = (event) => {
        ageHandleFormChange(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }
    const emailHandleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }
    const passwordHandleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }
    const ageHandleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }

    const responseGoogle = (response) => {
        console.log(response);
    }
    {
        return (
            <div id="container-register">
                <form action="">

                    <form onSubmit={handleSubmit}>
                        <h3>ENTER YOUR DETAILS</h3>
                        <label>
                            <FaUserAlt className="icon-user"/>
                            <input type="text" name="name" value={name}
                                   onChange={handleChange} placeholder="Username"/> <br/>
                        </label>
                    </form>
                    <form onSubmit={emailHandleSubmit}>
                        <label>
                            <AiOutlineMail/>
                            <input type="email" name="email" value={email}
                                   onChange={emailHandleChange} placeholder="Email"/>
                            <br/>

                        </label>
                    </form>
                    <form onSubmit={ageHandleSubmit}>
                        <label>
                            <MdDateRange/>
                            <input name="age" id="age" value={age}
                                   onChange={ageHandleChange} placeholder="Age" type="date"/>
                            <br/>
                        </label>
                    </form>
                    <form onSubmit={passwordHandleSubmit}>
                        <label>
                            <RiLockPasswordFill className="icon-password"/>
                            <input type="password" name="password" value={password}
                                   onChange={passwordHandleChange} placeholder="Password"/>
                            <br/>
                        </label>
                    </form>

                    <button type="submit" id="button-register">Register</button>
                    <div className="link">
                        <ul>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    <GoogleLogin clientId="217098860735-k3onvcs6enc0hu6jgigcl4tn9njt5hkr.apps.googleusercontent.com"
                                 buttonText="Login"
                                 onSuccess={responseGoogle}
                                 onFailure={responseGoogle}
                                 cookiePolicy="single_host"
                    />
                </form>


            </div>


        )
            ;
    }
}


export default Register;