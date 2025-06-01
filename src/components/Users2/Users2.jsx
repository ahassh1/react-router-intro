import React from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log('users 2 suspense data load', users);
    return (
        <div>
            <h3>this is users2</h3>
            <h2>hello there this is me ahasan habib polash</h2>
        </div>
    );
};

export default Users2;