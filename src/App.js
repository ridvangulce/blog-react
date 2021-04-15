import React, {useEffect, useState} from 'react';
import Register from "./components/Register"
import "./style.css"
import {Users} from "./components/Users"
import Login from "./components/Login"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios";

function App() {

    const [addUserPassword, setAddUserPassword] = useState('')
    const [addUserEmail, setAddUserEmail] = useState('')
    const [addUser, setAddUser] = useState('')
    const [users, setUsers] = useState([]);

    const handleFormChange = (addUser) => {
        setAddUser(addUser)
    }
    const emailHandleFormChange = (addUserEmail) => {
        setAddUserEmail(addUserEmail)
    }
    const passwordHandleFormChange = (addUserPassword) => {
        setAddUserPassword(addUserPassword)
    }


    const base = axios.create({
        baseURL: 'http://localhost:5000'
    })
    const handleFormSubmit = () => {
        axios.post('/register', {
            name: addUser,
            email: addUserEmail,
            password: addUserPassword
        })
            .then(res => {
                setAddUser(res.data)
                setAddUserEmail(res.data)
                setAddUserPassword(res.data)
                latestUser()
            })
    }
    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
                console.log(res)
            });
    }, []);
    const latestUser = () => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
                console.log(res)
            });

    }


    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/register">
                        <Register addUser={addUser}
                                  addUserEmail={addUserEmail}
                                  addUserPassword={addUserPassword}
                                  handleFormChange={handleFormChange}
                                  emailHandleFormChange={emailHandleFormChange}
                                  passwordHandleFormChange={passwordHandleFormChange}
                                  handleFormSubmit={handleFormSubmit}
                        />
                        <Users users={users}/>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/login">
                        <Login
                            handleFormSubmit={handleFormSubmit}

                        />
                    </Route>
                </Switch>

            </div>
        </Router>

    )


}

export default App;
