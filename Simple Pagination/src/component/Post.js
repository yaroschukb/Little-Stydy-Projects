import React, {useState, useEffect} from 'react';


const Post = ({posts, loading}) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return (
        <ul className="list-group mb-4">
            {posts.map(e=>(
                <li key={e.id} className="list-group-item">{e.title}</li>
            ))}
        </ul>
    )

}

export default Post