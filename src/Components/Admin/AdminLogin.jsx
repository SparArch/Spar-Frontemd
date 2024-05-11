import React, { useState } from 'react'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    if (username === 'admin' && password === 'root') {
      // Credentials are correct, redirect to admin dashboard
      window.location.href = '/Admin';
    } else {
      // Credentials are incorrect, display error message
      setError('Invalid username or password');
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
