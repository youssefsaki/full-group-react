import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Posts = () => {

    const [state, setState] = useState({
        posts: [],
        loading: true,
        error: null
    });

    let { loading, posts, error } = state;

    useEffect(() => {

        let controller = new AbortController();
        let { signal } = controller;

        const fetchPosts = async () => {

            try {
                let res = await axios.get('https://jsonplaceholder.typicode.com/posts', {signal});
                let data = await res.data;
                setState(prev => ({
                    ...prev,
                    posts: data
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
        {Array.isArray(posts) && posts.map(({id, title}) => (
            <div key={id}>
                <h1>{title}</h1>
                <Link to={`${id}`}>Product {id}</Link>
            </div>
        ))}
        <Outlet />
    </div>
  )
}

export default Posts