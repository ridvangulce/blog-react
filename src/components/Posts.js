import React from "react"
import "../style.css"
import {AiOutlineHeart, AiOutlineComment, AiOutlineRetweet, AiOutlineShareAlt,AiFillHeart} from "react-icons/ai"

export const Posts = ({posts}) => {
    const changeIcon = ()=>{
        return(
            <AiFillHeart/>
        )
    }

    return (
        <div id="container-posts">
            {posts.map(post => (
                <ul key={post.id}>
                    <li>
                        {post.post}
                        <div id="container-posts-icon">
                            <AiOutlineHeart className="icon-heart" onclick={changeIcon}/>
                            <AiOutlineComment className="icon-comment"/>
                            <AiOutlineRetweet className="icon-retweet"/>
                            <AiOutlineShareAlt className="icon-share"/>
                        </div>

                    </li>
                </ul>
            ))}
        </div>
    )

}