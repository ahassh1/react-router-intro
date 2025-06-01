import React from 'react';

const User = ({user}) => {
    const {name,email,phone,id}= user;
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
        </div>
    );
};
     
export default User;