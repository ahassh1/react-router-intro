import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise)
    // const user = use(userPromise)
    // console.log('userDetails2',user);
    return (
        <div>
            
            <p><small>user Name:{username}</small></p>
            <p>{name}</p>

        </div>
    );
};

export default UserDetails2;