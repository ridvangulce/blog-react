import React, {useEffect} from 'react';
import {useHistory, withRouter} from "react-router-dom"
const Login = ({
                   handleFormChange, passwordHandleFormChange, name, password, checkUser,
                   checkPassword, handleFormLogin, setAuth, setCheckUser, setCheckPassword,history
               },) => {

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



    return (
        <div className="container-login">

            <form onSubmit={handleLogin}>
                <label>
                    USERNAME:<input type="text" className="name" placeholder="Username"
                                    onChange={handleChange}
                                    value={name}
                />
                </label>
            </form>
            <form onSubmit={passwordHandleLogin}>
                <label>
                    PASSWORD:<input type="password" className="password" placeholder="Password"
                                    onChange={passwordHandleChange}
                                    value={password}
                />
                </label>
                <br/>
            <button type="submit">Login</button>
            </form>


        </div>
    );
}


export default withRouter(Login);
