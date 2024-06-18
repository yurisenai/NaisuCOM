import React from 'react';

const UserProfile = () => {
    const username = localStorage.getItem('username'); // Assuming you stored it after login

    return (
        <div>
            <h1>Welcome, {username}</h1>
            {/* Additional user-specific components */}
        </div>
    );
};

export default UserProfile;
