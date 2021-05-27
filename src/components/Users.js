import React from "react"
import "../style.css"

export const Users = ({posts}) => {

    return (
        <div className="container-users">
            {posts.map(post => (
                <ul key={post.id}>
                    <li >
                        {post.post}
                    </li>
                </ul>
            ))}
        </div>
    )

}