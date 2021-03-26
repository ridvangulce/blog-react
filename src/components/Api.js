import React, {useEffect, useState} from 'react';
import axios from "axios";

function Api() {
    const [userList, setUserList] = useState([]);

    const instance = axios.create({
        baseURL: 'http://localhost:5000/api'
    })
    useEffect(() => {
        axios.post("/api")
            .then(response => {
                console.log(response)
                setUserList((response.data))

            });
    }, []);
    useEffect(() => {
        axios.get("/api")
            .then(response => {
                setUserList((response.data))

            });
    }, []);


    return (
        <div>

        </div>
    );

}

export default Api;
