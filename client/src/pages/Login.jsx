import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({email:'', password:''});
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Logged in successfully!');
      nav('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Error logging in.');
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={submit} className="card">
        <h2>Login to Your Account</h2>
        <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required/>
        <button type="submit">Login</button>
        <p style={{textAlign: 'center', marginTop: '1rem'}}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}