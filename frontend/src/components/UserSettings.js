import React, { useEffect, useState } from 'react';

const UserSettings = () => {
    const [userData, setUserData] = useState({
        id: '',
        date_of_birth: '',
        profile_picture: '',
        bio: '',
        followers_count: 0,
        following_count: 0,
        posts_count: 0,
        user_type: 'free',
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/users/${userData.id}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (response.ok) {
                alert('Profile updated successfully!');
            } else {
                alert('Error updating profile.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <h1>User Settings</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={userData.id}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={userData.date_of_birth}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Profile Picture URL:</label>
                    <input
                        type="text"
                        name="profile_picture"
                        value={userData.profile_picture}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea
                        name="bio"
                        value={userData.bio}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Followers Count:</label>
                    <input
                        type="number"
                        name="followers_count"
                        value={userData.followers_count}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div>
                    <label>Following Count:</label>
                    <input
                        type="number"
                        name="following_count"
                        value={userData.following_count}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div>
                    <label>Posts Count:</label>
                    <input
                        type="number"
                        name="posts_count"
                        value={userData.posts_count}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div>
                    <label>User Type:</label>
                    <select
                        name="user_type"
                        value={userData.user_type}
                        onChange={handleChange}
                    >
                        <option value="free">Free</option>
                        <option value="pro">Pro</option>
                        <option value="vip">VIP</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserSettings;
