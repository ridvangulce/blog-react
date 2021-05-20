import React, {useEffect, useState} from 'react';
import "../style.css"
import axios from "axios";
import {Route, useHistory, withRouter} from "react-router-dom"
import {Users} from "./Users";
import {Pagination} from "./Pagination";


const Profile = ({
                     handleFormLogout
                 },) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(5)

    const handleLogout = (event) => {
        event.preventDefault()
        handleFormLogout()
        console.log(handleFormLogout)
    }


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setUsers(res.data)
            });

    }, [])
    const history = useHistory();
    const handleHistory = ()=>{
        history.push("/login")
    }

    return (
        <div className="container-profile">
            <h3>Welcome</h3>
                <Users users={currentUsers}/>
                <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
                <form onSubmit={handleLogout} method="post">
                    <button type="submit" onClick={handleHistory}>Logout</button>
                </form>


        </div>
    )
}
export default withRouter(Profile);
