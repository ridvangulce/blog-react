import React, {useEffect, useState} from 'react';
import Login from "./components/Login"
import "./style.css"
import {Users} from "./components/Users"
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState([]);
    const instance = axios.create({
        baseURL: 'http://localhost:5000'
    })
    useEffect(() => {
        axios.post("/api", {
            name: users,
            email: email,
        }).then(res => {
            setUsers(res.data)
            setEmail(res.data)
        });
    }, []);
    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
                console.log(res)
            });
    }, []);


    return (
        <div>
            <Login/>
            <Users users={users}/>
        </div>
    );


}

export default App;
