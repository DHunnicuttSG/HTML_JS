import React from "react";
import { Link } from 'react-router-dom'

const Users = [
    {id: '1', title: 'CEO', content: 'Leroy'},
    {id: '2', title: 'CFO', content: 'Tsvelelina'},
    {id: '3', title: 'CTO', content: 'Charlotte'},
    {id: '4', title: 'CIO', content: 'Ashton'},
]


function UsersPage() {
    return (
        <>
            <h1>All Users</h1>
            <ul>
                {Users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.title}</Link>
                        
                    </li>
                ))}
            </ul>        
        </>
    )
}

export default UsersPage