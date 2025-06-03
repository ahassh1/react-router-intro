import React, { Suspense, useState } from 'react';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {
    const {name,email,phone,id}= user;

    const usersPromise = fetch( `https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const [showInfo, setShowInfo]= useState(false)
    const userStyle={
        border: '2px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        margin:'10px'
    }
    return (
        <div style={userStyle}>
            <h1>hi there</h1>
            <h3>{name}</h3>
            <h5>Email:{email}</h5>
            <p><small>Phone:{phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}> {showInfo ? 'Hide' : 'Show'} info</button>
            {
                showInfo && <Suspense fallback={<span>Loading.....</span>}>
                    <UserDetails2 usersPromise={usersPromise}></UserDetails2>
                </Suspense>
            }
        </div>
    );
};
     
export default User;