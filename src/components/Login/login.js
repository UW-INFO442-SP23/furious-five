import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [display, setDisplay] = useState("login");

  const handleLogin = () => {
    try {
      if (email === "test@example.com" && password === "password") {
        setLoggedIn(true);
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  const handleCreateAccount = () => {
    setDisplay("createAccount");
  };

  const handleCreateAccountSubmit = () => {
    try {
      console.log("Account created successfully");
      setDisplay("login");
    } catch (error) {
      console.log("Error creating account:", error);
    }
  };

  return (
    <div>
      {display === "login" && (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            <div>
              Don't have an account?{" "}
              <span role="button" onClick={handleCreateAccount}>
                Create Account
              </span>
            </div>
          </form>
        </div>
      )}

      {display === "createAccount" && (
        <div>
          <h2>Create Account</h2>
          <form onSubmit={handleCreateAccountSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">Create Account</button>
            </div>
            <div>
              <span role="button" onClick={() => setDisplay("login")}>
                Back to Login
              </span>
            </div>
          </form>
        </div>
      )}

      {loggedIn && <div>Welcome, {email}!</div>}
    </div>
  );
};

export default Login;