import { useEffect, useState } from "react"
import axios from "axios";
import Posts from "./Posts";



const UseEffectFetch = () => {

    let [state, setState] = useState({
        posts: [],
        loading: true,
        error: null
    });

    let { loading, posts, error } = state;

    useEffect(() => {

        let controller = new AbortController();
        let signal = controller.signal;
        

        let url = 'https://jsonplaceholder.typicode.com/posts';
        const fetchPosts = async() => {
            try {
                let res = await axios.get(url, { signal });
                let data = res.data;

                setState(prev => ({
                    ...prev,
                    posts: data
                }));
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

       return () => {
        controller.abort('Code Aborted Due To Unmounting Component');
       }
    }, []);

    if(loading) return <h1>Loading...</h1>
    if(error) return <p style={{ color: 'red', fontSize: '2rem'}}>Error: {error}</p>

  return (
    <div>
        <Posts posts={posts}/>
    </div>
  )
}

export default UseEffectFetch