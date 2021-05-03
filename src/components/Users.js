import React from "react"
export const Users = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return(
                    <ul key={user.id}>
                        <li>{user.name}</li>
                    </ul>
                )
            })}
        </div>

    )
}