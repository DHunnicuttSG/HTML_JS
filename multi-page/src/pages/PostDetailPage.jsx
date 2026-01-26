import { useParams, useNavigate } from 'react-router-dom'

const dummyPosts = [
  { id: '1', title: 'First Blog Post', content: 'Content of the first post...' },
  { id: '2', title: 'Second Blog Post', content: 'Content of the second post...' },
  { id: '3', title: 'Third Blog Post', content: 'Content of the third post...' },
];


function PostDetailPage() {
    const { postId } = useParams()
    const navigate = useNavigate()

    const post = dummyPosts.find(p => p.id === postId)

    if(!post) {
        return (
            <div>
                <h2>Post Not Found!</h2>
                <button onClick={() => navigate('/posts')} >Back to Posts</button>
            </div>
        )
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>Post ID: {postId}</p>
            <p>{post.content}</p>
            <button onClick={() => navigate(-1)} >Go Back</button>
            {/* <button onClick={() => navigate('/posts/:postId')} >Back to Posts</button> */}
        </div>
    )
 
}

export default PostDetailPage