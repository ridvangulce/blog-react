import React, {useEffect, useState} from 'react';
import Register from "./components/Register"
import "./style.css"
import Login from "./components/Login"
import Home from "./components/Home"
import {Switch, Route, useHistory, withRouter} from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute"
import axios from "axios";
import GoogleLogin from "react-google-login";

function App() {
    const [checkUser, setCheckUser] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [post, setPost] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleFormChange = (name) => {
        setName(name)
    }
    const passwordHandleFormChange = (password) => {
        setPassword(password)
    }
    const history = useHistory();

    function handleHistory() {
        setIsLoggedIn(true)
        history.push("/home")
    }

    const postHandleChange = (event) => {
        postHandleFormChange(event.target.value)
    }

    const postHandleFormChange = (post) => {
        setPost(post)
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
                sessionStorage.setItem("key", "user",)
                console.log(sessionStorage.setItem)

            })

            .catch(error => {
                console.log("There is some error !!!!", error)
            })
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
                }
            )
            .then(data => {
                    sessionStorage.getItem('user')
                }
            )
            .catch(error => {
                console.log("there is some error", error)
            })
    }
    useEffect(() => {
        axios.get('/home')
            .then(res => {
                if (res.data === "same_session") {
                    handleHistory()
                }
            })
    }, [])

    return (
        <div id="container">
            <Switch>
                <Route path="/register" component={Register}>
                    <Register handleFormSubmit={handleFormSubmit}/>
                </Route>
                <Route path="/login" component={Login}>
                    <Login setIsLoggedIn={setIsLoggedIn} handleFormChange={handleFormChange}
                           passwordHandleFormChange={passwordHandleFormChange} handleFormLogin={handleFormLogin}
                           name={name} password={password} handleHistory={handleHistory}
                    />
                </Route>
                <PrivateRoute exact path="/home" component={Home} isAuthenticated={isLoggedIn}/>
            </Switch>
        </div>
    )
}


export default withRouter(App);


