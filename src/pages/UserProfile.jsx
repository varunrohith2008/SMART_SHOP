import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUserCircle, FaBirthdayCake } from 'react-icons/fa';

const UserProfile = () => {
    const location = useLocation();

    // parsing query parameters using useLocation as requested
    // location.search looks like "?name=John&age=30"
    const queryParams = useMemo(() => {
        return new URLSearchParams(location.search);
    }, [location.search]);

    const name = queryParams.get('name') || 'Guest';
    const age = queryParams.get('age') || 'Unknown';

    return (
        <div className="page-container centered">
            <h1 className="page-title">User Profile</h1>

            <div className="profile-card">
                <div className="profile-icon">
                    <FaUserCircle />
                </div>
                <h2>{name}</h2>
                <p className="age-info">
                    <FaBirthdayCake /> {age} years old
                </p>
                <div className="profile-meta">
                    <p>Different: <code>{location.pathname}</code></p>
                    <p>Code: <code>{location.search || '(none)'}</code></p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
