import React from "react"
import { useParams, useNavigate } from "react-router-dom"

const Users = [
    {id: '1', title: 'CEO', content: 'Leroy'},
    {id: '2', title: 'CFO', content: 'Tsvelelina'},
    {id: '3', title: 'CTO', content: 'Charlotte'},
    {id: '4', title: 'CIO', content: 'Ashton'},
]

function UserProfilePage() {
    const { userId } = useParams()
    const navigate = useNavigate()
    
    const user = Users.find(u => u.id === userId)

    if (!user) {
        return (
            <>
                <h2>This is not the user you are looking for... </h2>
                <button onClick={() => navigate('/users')}>Go back to Users</button>
            </>
        )
    }

    return (
        <>
            <h2>{user.title}</h2>
            <p>user ID: {userId}</p>
            <p>{user.content}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>

        </>
    )
}

export default UserProfilePage