import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostsDetails = () => {

    const { id } = useParams();

    const [state, setState] = useState({
        post: {},
        loading: true,
        error: null
    });

    let { loading, post, error } = state;

    useEffect(() => {

        let controller = new AbortController();
        let { signal } = controller;

        const fetchPosts = async () => {

            try {
                let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {signal});
                let data = await res.data;
                setState(prev => ({
                    ...prev,
                    post: data
                }))
            } catch (error) {
                setState(prev => ({
                    ...prev,
                    error: error.message
                }))
            }finally{
                setState(prev => ({
                    ...prev,
                    loading: false
                }))
            }
        }

        fetchPosts();

        //* Cleanup Function : 
        return () => {
            controller.abort();
        }

    }, []);

    if(loading) return <h1 className='text-xl'>Loading...</h1>
    if(error) return <p className='text-red-500 text-xl'>Error: {error}</p>

  return (
    <div>
        <h1>{post.title}</h1>
    </div>
  )
}

export default PostsDetails