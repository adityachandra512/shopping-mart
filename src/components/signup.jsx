import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Load saved email from local storage on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('signupEmail');
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send signup data to Flask backend
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });

      if (response.ok) {
        // Store user information in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('username', username);
        
        // Optional: Store signup timestamp
        localStorage.setItem('signupTimestamp', new Date().toISOString());

        alert('Signup Successful!');
        navigate('/'); // Redirect to homepage after successful signup
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  // Function to clear local storage (can be used for logout)
  const clearLocalStorage = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');
    localStorage.removeItem('signupTimestamp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Optionally save email to local storage as user types
                localStorage.setItem('signupEmail', e.target.value);
              }}
              placeholder="Enter your email"
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a strong password"
              required
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-center">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;