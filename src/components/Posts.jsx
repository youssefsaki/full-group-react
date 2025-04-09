

import React from 'react'

const Posts = ({posts}) => {

  return (
    <div>
        {posts && posts.slice(0, 10).map(post => (
            <h2 key={post.id}>{post.title}</h2>
        ))}
    </div>
  )
}

export default Posts