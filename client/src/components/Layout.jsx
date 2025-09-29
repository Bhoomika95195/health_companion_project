import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Link to="/" className="logo">HealthCompanion</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/chart">Weight Chart</Link>
        </nav>
      </header>
      <main className="main-content">
        <Outlet /> {/* This will render the current page component */}
      </main>
    </div>
  );
}