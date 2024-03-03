import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login...');
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
     
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
  
      console.log('Login successful. User:', user);
  
      
      navigate('/home', { replace: true });
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid email or password. Please try again.');
    }
  };
  

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8 rounded shadow-md" style={{ backgroundColor: '#F0DBAF' }}>
        <h1 style={{ color: '#B06161' }} className="text-2xl font-bold mb-4">
          Login Page
        </h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={handleEmailChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            style={{ backgroundColor: '#DC8686' }}
            className="bg-7ED7C1 text-white p-2 rounded hover:btnhoverStyle w-full"
          >
            Login
          </button>
        </form>

        <p className="mt-4">
          Need to Signup?{' '}
          <Link to="/signup" className="text-black hover:text-hoverStyle">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
