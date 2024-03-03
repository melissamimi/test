import React, { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
     
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8 rounded shadow-md" style={{ backgroundColor: '#F0DBAF' }}>
        <h1 style={{ color: '#B06161' }} className="text-2xl font-bold mb-4">
          Welcome to React Firebase Auth
        </h1>

        {user && (
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">{user.email}</h2>
            <p className="mb-2">
              <strong>User ID:</strong> {user.uid}
            </p>
       
           
            
           

            <button
           onClick={handleLogout}
            style={{ backgroundColor: '#DC8686' }}
            className="bg-7ED7C1 text-white p-2 rounded hover:bg-5DAE92 w-full"
          >
            Logout
          </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
