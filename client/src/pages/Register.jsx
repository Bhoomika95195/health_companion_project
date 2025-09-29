import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({name:'', email:'', password:''});
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/auth/register', form);
      localStorage.setItem('token', res.data.token);
      alert('Registration successful!');
      nav('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Error during registration.');
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={submit} className="card">
        <h2>Create Your Account</h2>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required/>
        <input placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required/>
        <input placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required/>
        <button type="submit">Register</button>
        <p style={{textAlign: 'center', marginTop: '1rem'}}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}