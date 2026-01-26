import { useState } from 'react'
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/AboutPage'
import { Routes, Route, Link } from 'react-router-dom'
import UsersPage from './pages/Users'
import UserProfilePage from './pages/UsersProfilePage'
import PostsPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'

function App() {

  return (
    <>
      <header>
        <h2>Multi-Page React App</h2>
        <h2>My simple blog...</h2>
        <nav>
          <hr/>
            <button><Link to='/'>Home</Link> </button>
            <button><Link to='/about'>About</Link> </button>
            <button><Link to='/posts'>Posts</Link> </button>
            <button><Link to='/users'>Users</Link> </button>
          <hr/>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/about' element={ <AboutPage/> } />
          
          <Route path='/users' element={ <UsersPage/> } />
          <Route path='/users/:userId' element={ <UserProfilePage/> } />
        
          <Route path='/posts' element={ <PostsPage/>} />
          <Route path='/posts/:postId' element={ <PostDetailPage/>} />
          {/* Here is a link to a 404 error */}
          <Route path='*' element={<div><h2>404 Not Found</h2><p>This is not the page you are looking for...</p></div>} />
        </Routes>
      </main>
    </>
  )
}

export default App
