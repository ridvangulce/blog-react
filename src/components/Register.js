import React from 'react';
import "../style.css"


const Register = ({
                      handleFormSubmit,
                      addUser,
                      addUserEmail, handleFormChange, emailHandleFormChange, addUserPassword, passwordHandleFormChange
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
                            USERNAME: <input type="text" className="name" value={addUser}
                                             onChange={handleChange} placeholder="Username"/> <br/>
                        </label>
                    </form>

                    <form onSubmit={emailHandleSubmit}>
                        <label>
                            EMAIL: <input type="email" className="email" value={addUserEmail}
                                          onChange={emailHandleChange} placeholder="Email"/>
                            <br/>

                        </label>
                    </form>

                    <form onSubmit={passwordHandleSubmit}>
                        <label>
                            PASSWORD: <input type="password" className="password" value={addUserPassword}
                                             onChange={passwordHandleChange} placeholder="Password"/>
                            <br/>
                        </label>
                        <input type="submit"/>
                    </form>


            </div>


        );
    }
}


export default Register;