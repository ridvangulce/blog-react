import React, {useEffect, useState} from 'react';
import "../style.css"
import axios from "axios";
import {withRouter, useHistory} from "react-router-dom"
import {Users} from "./Users";
import {Pagination} from "./Pagination";


const Profile = ({},) => {
    const [post, setPost] = useState('')
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1)
    const [postsPerPage] = useState(10)


    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentUsers = posts.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPost(pageNumber)


    const postHandleChange = (event) => {
        postHandleFormChange(event.target.value)
    }

    const postHandleFormChange = (post) => {
        setPost(post)

    }
    const handlePost = (event) => {
        event.preventDefault()
        handleFormPost()
    }
    const handleLogout = (event) => {
        event.preventDefault()
        handleFormLogout()
    }
    const history = useHistory()

    function handleHistory() {
        history.push("/login")
    }

    const handleFormPost = () => {
        axios.post('/profile', {
            post: post
        })
            .then(res => {
                    setPost(res.data)
                    console.log(res.data)
                }
            )
            .then(data => {

                console.log(data)
            })
            .catch(error => {
                console.log("there is some error!!!", error)
            })
    }
    const handleFormLogout = () => {
        axios.post('/logout')
            .then(res => {
                if (res.data === "Logout") {
                    console.log(res.data)
                    handleHistory()
                }
            })
            .then(data => {
                    sessionStorage.removeItem('user')
                    console.log(data)
                }
            )

            .catch(error => {
                console.log("there is some error", error)

            })
    }

    useEffect(() => {
        axios.get("/api")
            .then(res => {
                setPosts(res.data)
            })

    }, [])

    return (
        <div className="container-profile">
            <h3>Welcome</h3>
            <form onSubmit={handleLogout}>
                <button type="submit" id="button-logout" onClick={handleLogout}>Logout</button>
            </form>
            <div className="container-post">

                <form onSubmit={handlePost} id="handle-post">
                    <label>
                        POST:<input className="post" value={post} onChange={postHandleChange}/>
                    </label>
                    <button type="submit" id="button-post" onClick={handlePost}>Post</button>
                </form>
            </div>


            <Users posts={currentUsers}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>


    )


}

export default withRouter(Profile);
