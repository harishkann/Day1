// Login.js

import  { useState } from 'react';
import './Log.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here (e.g., API call)
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return ( <div><center>
    <div className="login-container">
      <h1>LOGIN </h1>
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <center><button type="submit">Login</button>
       </center> </div>
        <center><h4> Dont have an account? </h4></center>
      </form>
    </div></center></div>
  );
};

export default Login;
