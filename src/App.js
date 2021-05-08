import React, {useContext, useEffect, useState} from 'react';
import Register from "./components/Register"
import "./style.css"
import {Users} from "./components/Users"
import Login from "./components/Login"
import {Pagination} from "./components/Pagination"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import axios from "axios";

function App() {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [checkUser, setCheckUser] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [users, setUsers] = useState([]);
    const [currentPage,setCurrentPage] =useState(1)
    const [usersPerPage]=useState(5)

    //Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers=users.slice(indexOfFirstUser,indexOfLastUser)
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)

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
    //Check User
    const checkHandleFormChange = (checkUser) => {
        setCheckUser(checkUser)
    }
    const checkPasswordHandleFormChange = (checkPassword) => {
        setCheckPassword(checkPassword)
    }


    const base = axios.create({
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
    const handleFormLogin = () => {
        axios.post('/login', {
            name: checkUser,
            password: checkPassword
        })
            .then(res => {
                setCheckUser(res.data)
                setCheckPassword(res.data)
            })
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
        axios.post('/logout')
            .then(data => {
                    sessionStorage.removeItem('2o1£21ıoj2£#31ı12k3130o210*321')
                }
            )
            .catch(error => {
                console.log("there is some error", error)

            })
    }
    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
            });

    },[])


    return (
        <div>
            <Router>
                <div>
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
                            <Users users={currentUsers}/>
                            <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
                        </Route>
                        <Route path="/login" component={Login}>
                            <Login
                                checkPassword={checkPassword}
                                checkUser={checkUser}
                                handleFormSubmit={handleFormSubmit}
                                handleFormLogin={handleFormLogin}
                                checkHandleFormChange={checkHandleFormChange}
                                checkPasswordHandleFormChange={checkPasswordHandleFormChange}
                                handleFormLogout={handleFormLogout}
                            />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
