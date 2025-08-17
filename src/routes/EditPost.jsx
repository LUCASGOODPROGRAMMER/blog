import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import blogFetch from '../axios/config'

const EditPost = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState("")
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {id} = useParams()

    const getPosts = async() => {

        try {
            const response = await blogFetch.get(`/posts/${id}`)

            const data = response.data

            setTitle(data.title)
            setBody(data.body)
            setPosts(data)
        } catch (error) {
            console.log(error)
        } finally {
            console.log("executou")
        }
    }

    // .put() método de update
    const editPost = async(e) => {
        e.preventDefault()
        const post = {title, body, userId:1}
        await blogFetch.put(`/posts/${id}`,{
            body: post
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className='new-post'>
            <h2 className="form-title">modificando: {posts.title}</h2>
            <form onSubmit={(e) => editPost(e)} className="post-form">
                <div className="form-control">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo</label>
                    <textarea name="body" id="body" placeholder='Digite a descrição' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                </div>
                <input type="submit" value="Enviar Modificações" className='add-btn' />
            </form>
        </div>
    )
}

export default EditPost