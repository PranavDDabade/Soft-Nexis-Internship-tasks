import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../services/api";
import "../style/Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect to home or dashboard
      navigate("/add");

    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

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
          required
        />

        <button type="submit">Login</button>

        <div className="login-footer">
          Don’t have an account? <a href="/register">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;