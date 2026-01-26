import React from "react";
import { Link } from 'react-router-dom'

function PostsPage() {
    const dummyPosts = [
        {id: '1', title: 'First blog post', content: 'Content of the first post...'},
        {id: '2', title: 'Second blog post', content: 'Content of the second post...'},
        {id: '3', title: 'Third blog post', content: 'Content of the third post...'},
    ]
    
    return (
        <>
        <h2>Welcome to the Posts Page</h2>

        <ul>
            {dummyPosts.map(post => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default PostsPage