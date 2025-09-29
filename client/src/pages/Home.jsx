import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Health Companion</h1>
      <p>Your personalized partner in achieving wellness goals. Log your data, get smart recommendations, and track your progress over time.</p>
      <div className="card">
        <h3>Get Started</h3>
        <p>New here? Create an account to begin your journey. Already have an account? Log in to continue.</p>
        <Link to="/register">Register Now</Link> | <Link to="/login">Login</Link>
      </div>
    </div>
  );
}