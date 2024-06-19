import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch('/api/users/1/'); // Replace '1' with the appropriate user ID
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <img src={userData.profile_picture} alt="Profile" />
            <p><strong>ID:</strong> {userData.id}</p>
            <p><strong>Date of Birth:</strong> {userData.date_of_birth}</p>
            <p><strong>Bio:</strong> {userData.bio}</p>
            <p><strong>Followers:</strong> {userData.followers_count}</p>
            <p><strong>Following:</strong> {userData.following_count}</p>
            <p><strong>Posts:</strong> {userData.posts_count}</p>
            <p><strong>User Type:</strong> {userData.user_type}</p>
        </div>
    );
};

export default Profile;
