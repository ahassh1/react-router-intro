import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h3>this is my dynamic post</h3>
            <h3>hello : {posts.length}</h3>
            {
                posts.map(post => <Post post={post} key={post}></Post>)
            }
        </div>
    );
};

export default Posts;