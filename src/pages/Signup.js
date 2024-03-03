import React, { useState } from "react";
import { auth } from "../Firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedPic, setSelectedPic] = useState(null);
  const [dob, setDob] = useState(""); 
  const navigate = useNavigate();

 

  const handlePicSelect = (pic) => {
    setSelectedPic(pic);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      
      
      console.log("Username:", username);
      console.log("Date of Birth:", dob);

      
      navigate("/");

     
      const database = getDatabase();
      const newUserData = {
        username: username,
        email: user.email,
        dob: dob,
       
       
      };
     
      set(ref(database, 'users/' + user.uid), newUserData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="p-8 rounded shadow-md" style={{ backgroundColor: "#F0DBAF" }}>
        <h1 style={{ color: "#B06161" }} className="text-2xl font-bold mb-4">
          Signup Page
        </h1>

        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="User name"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />

         

          <input
            type="date"
            placeholder="Date of birth"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />

          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded w-full"
          />

          <button
            type="submit"
            style={{ backgroundColor: "#DC8686" }}
            className="bg-7ED7C1 text-white p-2 rounded hover:bg-5DAE92 w-full"
          >
            Signup
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-black hover:text-hoverStyle">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
