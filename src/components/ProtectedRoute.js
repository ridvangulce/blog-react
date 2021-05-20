import React from 'react';
import {Route, Redirect,withRouter} from "react-router-dom"


const ProtectedRoute = ({auth: auth, component: Component, ...rest},) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (auth) {
                    return <Component/>
                } else {
                    return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
                }
            }
            }
        />
    );

}

export default withRouter(ProtectedRoute);