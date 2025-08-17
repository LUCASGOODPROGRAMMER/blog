import blogFetch from "../axios/config"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

const Admin = () => {
  const [posts, setPosts] = useState([]) // inicializa como array vazio

  const getPost = async () => {
    try {
      const response = await blogFetch.get("/posts")
      setPosts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      console.log("A busca foi executada")
    }
  }

  const deletePost = async(id)=> {
    await blogFetch.delete(`/posts/${id}`)

    const filteredPosts = posts.filter((post) => post.id !== id)

    setPosts(filteredPosts)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div className="admin">
      <h1 className="admin-title">Gerenciamento de Posts</h1>
      {posts.length === 0 ? (
        <p className="loading">Carregando...</p>
      ) : (
        <div className="admin-posts">
          {posts.map((post) => (
            <div className="admin-post-card" key={post.id}>
              <div className="container-ad">
                <h2 className="admin-post-title">{post.title}</h2>
                <p className="post-p">{post.body}</p>
              </div>
              <div className="actions">
                <Link to={`/posts/edit/${post.id}`} className="admin-btn edit-btn">Editar</Link>
                <button className="admin-btn delete-btn" onClick={() => deletePost(post.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Admin
