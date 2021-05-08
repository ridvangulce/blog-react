import React from 'react';

const Login = ({
                   checkHandleFormChange,
                   checkPasswordHandleFormChange,
                   checkUser,
                   checkPassword, handleFormLogin, handleFormLogout
               },) => {

    const checkHandleChange = (event) => {
        checkHandleFormChange(event.target.value)
    }
    const checkPasswordHandleChange = (event) => {
        checkPasswordHandleFormChange(event.target.value)
    }
    const handleLogin = (event) => {
        event.preventDefault()
        handleFormLogin()
    }
    const passwordHandleLogin = (event) => {
        event.preventDefault()
        handleFormLogin()
    }
    const handleLogout = (event) => {
        event.preventDefault()
        handleFormLogout()
    }
    return (

        <div className="container">
            <form onSubmit={handleLogin}>
                <label>
                    USERNAME:<input type="text" className="name" placeholder="Username"
                                    onChange={checkHandleChange}
                                    value={checkUser}
                />
                </label>
            </form>

            <form onSubmit={passwordHandleLogin}>

                <label>
                    PASSWORD:<input type="password" className="password" placeholder="Password"
                                    onChange={checkPasswordHandleChange}
                                    value={checkPassword}
                />
                </label>
                <br/>
                <button type="submit">Login</button>

            </form>
            <div>
                <form onSubmit={handleLogout} method="post">
                    <button type="submit">Logout</button>
                </form>
            </div>

        </div>
    );


}

export default Login;
