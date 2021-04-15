import React from 'react';

const Login = () => {

    return (
        <div>

                <form>
                    <label>
                        USERNAME:<input type="text" className="name" placeholder="Username"/>
                    </label>
                </form>

                <form>
                    <label>
                        PASSWORD:<input type="password" className="password" placeholder="Password"/>
                    </label>
                    <br/>
                    <input type="submit"/>
                </form>

        </div>
    );


}
export default Login;
