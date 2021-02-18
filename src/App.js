import React, {Component} from 'react';
import Users from "./components/Users"
import Login from "./components/Login"
import "./style.css"
class App extends Component {
    render() {
        return (
            <div className="container">
            <Login/>
            <Users/>
            </div>
        );
    }
}

export default App;