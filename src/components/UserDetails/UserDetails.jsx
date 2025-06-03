import React from 'react';
import { useLoaderData, useParams } from 'react-router';

  const UserDetails = () => {
    const user = useLoaderData();

    const params =useParams();
    console.log(params.userId);

    const {userId} = useParams();
    console.log(userId)

    const {website,name} = user;
    return (
        <div>
            <h2>hello</h2>
            <h3>Name:{name}</h3>
            <p>Website:{website}</p>
  
        </div>
    );
};

export default UserDetails;