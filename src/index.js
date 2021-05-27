import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom"
import ReactDOM from 'react-dom';
import App from "./App"

const renderApp =
    <Router >
        <Switch>
            <App/>
        </Switch>
    </Router>
ReactDOM.render(renderApp, document.getElementById('root'))









