import React, {useEffect, useState} from 'react';
import axios from "axios";
import "../style.css"


function Login() {
    return (

        <div className="login">
            <form>
                <h3>ENTER YOUR DETAILS</h3>
                <label>
                    USERNAME: <input type="text" className="postUsers"/> <br/>
                    EMAIL: <input type="email" className="email"/> <br/>
                </label>
                <button type="submit" className="button">SIGN UP</button>
                <div>
                </div>

            </form>
        </div>
    );
}

export default Login;