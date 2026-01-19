import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaStore, FaBoxOpen, FaUser, FaPalette } from 'react-icons/fa';

const Layout = () => {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="logo">SmartShop</div>
                <nav>
                    <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaStore /> Products
                    </NavLink>
                    <NavLink to="/orders" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaBoxOpen /> Orders
                    </NavLink>
                    <NavLink to="/user?name=Varun&age=25" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaUser /> User Profile
                    </NavLink>
                    <NavLink to="/theme" className={({ isActive }) => isActive ? 'active' : ''}>
                        <FaPalette /> Theme
                    </NavLink>
                </nav>
            </aside>
            <main className="content">
                <header className="topbar">
                    Welcome, Rohith
                </header>
                <div className="page-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
