import React from 'react';
import {useHistory} from "react-router-dom";

import "../style.css"


const Register = ({
                      handleFormSubmit,
                      name,
                      email,
                      password,
                      handleFormChange,
                      emailHandleFormChange,
                      passwordHandleFormChange,

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


    {
        return (
            <div className="login">

                <form onSubmit={handleSubmit}>
                    <h3>ENTER YOUR DETAILS</h3>
                    <label>
                        USERNAME: <input type="text" className="name" value={name}
                                         onChange={handleChange} placeholder="Username"/> <br/>
                    </label>
                </form>

                <form onSubmit={emailHandleSubmit}>
                    <label>
                        EMAIL: <input type="email" className="email" value={email}
                                      onChange={emailHandleChange} placeholder="Email"/>
                        <br/>

                    </label>
                </form>

                <form onSubmit={passwordHandleSubmit}>
                    <label>
                        PASSWORD: <input type="password" className="password" value={password}
                                         onChange={passwordHandleChange} placeholder="Password"/>
                        <br/>
                    </label>
                    <button type="submit">Register</button>
                </form>

            </div>


        );
    }
}


export default Register;