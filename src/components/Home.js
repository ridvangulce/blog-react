import React, {useEffect, useState} from 'react';
import "../style.css"
import axios from "axios";
import {withRouter, useHistory} from "react-router-dom"
import {Posts} from "./Posts";
import {Pagination} from "./Pagination";
import Picker from 'emoji-picker-react';
import {
    AiOutlineEnter,
    AiOutlineMessage,
} from "react-icons/ai"
import {FaHashtag, FaHome, FaUserAlt} from "react-icons/fa"
import {IoIosNotifications} from "react-icons/io"
import {FiSmile} from "react-icons/fi"
import {GiMountainCave} from "react-icons/gi"
import {RiFileGifLine, RiSurveyLine} from "react-icons/ri"


const Home = ({},) => {
    const [post, setPost] = useState('')
    const [name, setName] = useState('')
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(1)
    const [postsPerPage] = useState(10)
    const [chosenEmoji, setChosenEmoji] = useState(null);


    const indexOfLastPost = currentPost * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPost(pageNumber)

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
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
        axios.post('/home', {
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
                setName(res.data)
            })

    }, [])


    return (
        <div id="container-home">
            <div id="container-sidebar">
                <ul>
                    <li id="container-sidebar-icon">
                        <a href=""><FaHome className="icon-home"/></a>Home Page
                        <a href=""><IoIosNotifications className="icon-notifications"/></a>Notifications
                        <a href=""><AiOutlineMessage className="icon-message"/></a>Messsages
                        <a href=""><FaHashtag className="icon-hashtag"/></a>Explore
                        <a href=""><FaUserAlt className="icon-profile"/></a>Profile
                    </li>
                </ul>
            </div>
            <div id="container-home-post">
                <span className="container-home-home">Home Page</span>
                <form onSubmit={handlePost} id="handle-post">
                    <label>
                        <input className="post" placeholder="What's Going On?" value={post}
                               onChange={postHandleChange}/>

                        <div className="container-home-post-icon">
                            <FiSmile className="icon-smile" onClick={<Picker onEmojiClick={onEmojiClick}/>}/>
                            <GiMountainCave className="icon-mountain"/>
                            <RiFileGifLine className="icon-gif"/>
                            <RiSurveyLine className="icon-survey"/>
                        </div>

                    </label>
                    <div>
                    </div>
                    <button type="submit" id="button-post" onClick={handlePost}>Post</button>
                </form>
            </div>
            <div id="container-home-logout">
                <form onSubmit={handleLogout}>
                    <button type="submit" id="button-logout" onClick={handleLogout}>Logout</button>
                </form>
            </div>
            <Posts posts={currentPosts}/>

            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>


    )


}

export default withRouter(Home);
