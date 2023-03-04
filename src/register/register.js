import React, { useState } from 'react';
import "./register.css";
import axios from 'axios';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/register', { name, email, password, address, phone });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <label>Email:</label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />

      <label>Address:</label>
      <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} />

      <label>Phone:</label>
      <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />

      <button type="submit">Register</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default RegisterForm;