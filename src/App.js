import React, {useEffect, useState} from 'react';
import Login from "./components/Login"
import "./style.css"
import {Users} from "./components/Users"
import axios from "axios";

function App() {
    const [addUserEmail, setAddUserEmail] = useState('')
    const [addUser, setAddUser] = useState('')
    const [users, setUsers] = useState([]);

    const instance = axios.create({

        baseURL: 'http://localhost:5000'
    })

    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
                console.log(res)
            });
    }, []);
    const handleFormChange = (addUser) => {
        setAddUser(addUser)
    }
    const emailHandleFormChange = (addUserEmail) => {
        setAddUserEmail(addUserEmail)
    }


    const handleFormSubmit = () => {
        axios.post('/api/create', {
            name: addUser,
            email: addUserEmail
        })
            .then(res => {
                setAddUser(res.data)
                setAddUserEmail(res.data)
            })

            .then(message => console.log(message))
    }


    return (
        <div>
            <Login addUser={addUser} addUserEmail={addUserEmail} handleFormSubmit={handleFormSubmit}
                   handleFormChange={handleFormChange}
                   emailHandleFormChange={emailHandleFormChange}/>
            <Users users={users}/>
        </div>
    )


}

export default App;
