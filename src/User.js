import React from 'react'

//stateless functional component
const User = (props) => {
    return (
        <div className="user">
            <h1>{props.user.name}</h1>
            <h3>{props.user.email}</h3>
            <h4>{props.user.phone}</h4>
        </div>
    )
}

export default User;