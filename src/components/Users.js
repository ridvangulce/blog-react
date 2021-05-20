import React from "react"
import "../style.css"

export const Users = ({users}) => {
    return (
        <div className="container-users">
            {users.map(user => (
                <ul key={user.id}>
                    <li >
                        {user.name} / {user.age}
                    </li>
                </ul>
            ))}
        </div>
    )

}