import React, {useEffect, useState} from 'react';
import Register from "./components/Register"
import "./style.css"
import Login from "./components/Login"
import Profile from "./components/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import {BrowserRouter as Router, Switch, Route, useHistory, withRouter} from "react-router-dom"
import axios from "axios";

function App() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [checkUser, setCheckUser] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [auth, setAuth] = useState(false)
    const history = useHistory();

    //Add User
    const handleFormChange = (name) => {
        setName(name)
    }
    const emailHandleFormChange = (email) => {
        setEmail(email)
    }
    const passwordHandleFormChange = (password) => {
        setPassword(password)
    }
    const ageHandleFormChange = (age) => {
        setAge(age)
    }


    axios.create({
        baseURL: 'http://localhost:5000'
    })
    const handleFormSubmit = () => {
        axios.post('/register', {
            name: name,
            email: email,
            password: password,
            age: age
        })
            .then(res => {
                setName(res.data)
                setEmail(res.data)
                setPassword(res.data)
                setAge(res.data)

            })
            .then(data => {
                console.log(data)
                sessionStorage.setItem("token", "2o1£21ıoj2£#31ı12k3130o210*321")

            })

            .catch(error => {
                console.log("There is some error !!!!", error)
            })
    }
    const handleHistory = () => {
        history.push("/profile")
        setAuth(true)
        console.log(setAuth)

    }

    const handleFormLogin = () => {
        axios.post('/login', {
            name: name,
            password: password
        })
            .then(res => {
                    setCheckUser(res.data)
                    setCheckPassword(res.data)
                    if (res.data === "Welcome") {
                        handleHistory()
                    }
                    console.log(res.data)

                }
            )
            .then(data => {
                    console.log(data)
                    sessionStorage.getItem('2o1£21ıoj2£#31ı12k3130o210*321')
                }
            )
            .catch(error => {
                console.log("there is some error", error)
            })
    }

    const handleFormLogout = () => {
        axios.delete('/profile')
            .then(data => {
                    sessionStorage.removeItem('2o1£21ıoj2£#31ı12k3130o210*321')
                }
            )
            .catch(error => {
                console.log("there is some error", error)

            })
    }


        return (
            <div className="container">
                    <Switch>
                        <Route path="/register" component={Register}>
                            <Register
                                name={name}
                                email={email}
                                password={password}
                                age={age}
                                handleFormChange={handleFormChange}
                                emailHandleFormChange={emailHandleFormChange}
                                passwordHandleFormChange={passwordHandleFormChange}
                                ageHandleFormChange={ageHandleFormChange}
                                handleFormSubmit={handleFormSubmit}
                            />
                        </Route>
                        <Route path="/login" component={Login}>
                            <Login
                                handleFormChange={handleFormChange}
                                passwordHandleFormChange={passwordHandleFormChange}
                                checkPassword={checkPassword}
                                checkUser={checkUser}
                                handleFormLogin={handleFormLogin}
                                setAuth={setAuth} name={name} password={password} history={history}
                            />
                        </Route>
                        <ProtectedRoute path="/profile" component={Profile}
                                        auth={auth} setAuth={setAuth} handleFormLogout={handleFormLogout}/>
                    </Switch>
            </div>
        )

}

export default withRouter(App);


