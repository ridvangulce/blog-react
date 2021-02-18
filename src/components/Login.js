import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1>

                <h2>ENTER YOUR DETAILS</h2>
                USERNAME: <input type="text"/> <br/>
                PASSWORD: <input type="password"/> <br/>
                <button type="submit">SIGN UP</button>
                </h1>

            </div>
        );
    }
}

export default Login;