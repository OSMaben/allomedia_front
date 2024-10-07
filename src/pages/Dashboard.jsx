import React, { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');

        const isTokenExpired = (token) => {
            if (!token) return false;
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp * 1000 < Date.now();
        };

        if (!token || isTokenExpired(token)) {
            window.location.href = '/auth/login';
        }
    }, []);

    return (
        <div>
            <h1 className="text-3xl text-blue-50 flex items-center justify-center h-[100vh]">Dashboard</h1>
        </div>
    );
};

export default Dashboard;
