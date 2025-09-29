import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = import.meta.env.VITE_API_URL;

export default function Profile(){
  const [profile, setProfile] = useState({name:'', email:''});
  const [biometric, setBiometric] = useState({type:'weight', value:'', unit:'kg'});

  useEffect(()=> {
    // fetch profile if token present (optional)
  }, []);

  const saveBiometric = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return alert('Login first');
      const res = await axios.post(api + '/biometrics', biometric, { headers: { Authorization: 'Bearer ' + token }});
      alert('Saved: ' + JSON.stringify(res.data));
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  const getWorkout = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(api + '/recommendations/workout', { headers: { Authorization: 'Bearer ' + token }});
      alert('Workout plan:\n' + JSON.stringify(res.data.plan, null, 2));
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div>
      <h2>Profile & Data</h2>
      <div className="card">
        <h3>Log Biometric</h3>
        <select value={biometric.type} onChange={e=>setBiometric({...biometric, type:e.target.value})}>
          <option value="weight">Weight</option>
          <option value="heart_rate">Heart Rate</option>
          <option value="sleep_duration">Sleep (hrs)</option>
          <option value="steps">Steps</option>
        </select>
        <input placeholder="Value" value={biometric.value} onChange={e=>setBiometric({...biometric, value:e.target.value})}/>
        <input placeholder="Unit (kg/bpm/hr)" value={biometric.unit} onChange={e=>setBiometric({...biometric, unit:e.target.value})}/>
        <button onClick={saveBiometric}>Save Data</button>
      </div>

      <div className="card">
        <h3>Recommendations</h3>
        <button onClick={getWorkout}>Get Workout Plan</button>
        <button onClick={async ()=> {
          const token = localStorage.getItem('token');
          const res = await axios.get(api + '/recommendations/meal', { headers: { Authorization: 'Bearer ' + token }});
          alert('Meals:\n' + JSON.stringify(res.data.meals, null, 2));
        }}>Get Meal Plan</button>
      </div>
    </div>
  );
}
