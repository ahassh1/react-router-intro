import React from 'react';
import { Navigate, useLoaderData } from 'react-router';

const PostDetail = () => {
    const post =useLoaderData();
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => Navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetail;