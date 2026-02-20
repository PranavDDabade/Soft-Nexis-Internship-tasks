import { useState } from "react";
import { registerUser } from "../services/api";
import '../style/Signup.css';

import { useNavigate } from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await registerUser({ email, password });

    alert('Regester Successfully ')
    // After successful registration → go to login
    navigate("/login");

  } catch (error) {
    alert(error.response?.data?.error || "Registration failed");
  }
};
  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Create Account</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength={8}
          required
        />

        <button type="submit">Sign Up</button>

        <div className="signup-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
}

export default Signup;