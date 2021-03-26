import React, {useState, useEffect} from 'react';
import Users from "./components/Users"
import Login from "./components/Login"
import "./style.css"
import Api from "./components/Api"

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Login/>
                <Api/>
                <Users/>
            </div>
        );

    }
}

export default App;