// src/Components/Admin/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import sparlogo from '../Images/spar-white-logo.png';
import { Image } from '@chakra-ui/react';
import backimage from "../Images/admin back.png";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'root') {
      login();
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen" style={{ backgroundImage: `url(${backimage})`, opacity: '120', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-[#4A8780] px-10 py-10 rounded-3xl shadow-md w-[30vw]">
        <div className='flex justify-center mb-8'><Image width={'150px'} src={sparlogo} /></div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              placeholder='ID'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-center"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder='PASSWORD'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center w-full">
            <button type="submit" className="w-1/4 bg-white text-[#4A8780] font-bold p-2 rounded-md hover:bg-blue-600 transition duration-300">LOG IN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
