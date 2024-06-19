import React from 'react';

const UserProfile = ({isLoggedIn , user}) => {
    const username = localStorage.getItem('username'); // Assuming you stored it after login

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>Email : {user.email}</p>
            {/* Additional user-specific components */}
        </div>
    );
};

export default UserProfile;
