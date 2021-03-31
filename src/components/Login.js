import React from 'react';
import "../style.css"


export const Login = ({handleFormSubmit, addUser, addUserEmail, handleFormChange, emailHandleFormChange}) => {
    const handleChange = (event) => {
        handleFormChange(event.target.value)
    }
    const emailHandleChange = (event) => {
        emailHandleFormChange(event.target.value)
    }
    const emailHandleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }

    {
        return (

            <div className="login">
                <form onSubmit={handleSubmit}>
                    <h3>ENTER YOUR DETAILS</h3>
                    <label>
                        USERNAME: <input type="text" className="name" value={addUser} onChange={handleChange}/> <br/>
                    </label>
                </form>

                <form onSubmit={emailHandleSubmit}>
                    <label>
                        EMAIL: <input type="email" className="email" value={addUserEmail} onChange={emailHandleChange}/>
                        <br/>
                    </label>
                </form>
                <button type="submit" className="button">SIGN UP</button>
                <div>
                </div>

            </div>
        );
    }
}


export default Login;