import React from 'react';
import {Link, withRouter} from "react-router-dom"

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

    return (
        <div className="container-login">

            <form onSubmit={handleLogin}>
                <label>
                    USERNAME:<input type="text" name="name" placeholder="Username"
                                    onChange={handleChange}
                                    value={name}/>
                </label>
            </form>
            <form onSubmit={passwordHandleLogin}>
                <label>
                    PASSWORD:<input type="password" name="password" placeholder="Password"
                                    onChange={passwordHandleChange}
                                    value={password}
                />
                </label>
                <br/>
                <button type="submit" id="button-login">Login</button>
            </form>
            <div className="menu-bar">
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>


        </div>
    );
}


export default withRouter(Login);
