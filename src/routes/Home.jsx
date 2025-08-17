import { useState, useEffect } from 'react'

import blogFetch from '../axios/config'

//import axios from 'axios'

import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => {

  const [posts, setPost] = useState([])

  const getPosts = async() => {
    try {
      const response = await blogFetch.get("/posts")
      const data = response.data
      setPost(data)
    } catch (error) {
      console.log(error)
    } finally {
      console.log("processo executado")
    }
  }

  useEffect(() => {
    getPosts()
  },[])

  return (
  <div className="posts-container">
    <h1 className="page-title">📚 Cards Info</h1>
    {posts.length === 0 ? (
      <p className="loading">Carregando dados...</p>
    ) : (
      <div className="posts-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais →</Link>
          </div>
        ))}
      </div>
    )}
  </div>
)

}

export default Home