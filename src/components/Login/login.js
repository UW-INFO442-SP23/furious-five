import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [display, setDisplay] = useState("login");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [restaurantContact, setRestaurantContact] = useState("");

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
    <div className="login-container">
      <div className="login-form">
        {display === "login" && (
          <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="form-group">
                Don't have an account?{" "}
                <span
                  role="button"
                  className="create-account-link"
                  onClick={handleCreateAccount}
                >
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
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Restaurant:</label>
                <input
                  type="text"
                  className="form-control"
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Restaurant contact:</label>
                <input
                  type="text"
                  className="form-control"
                  value={restaurantContact}
                  onChange={(e) => setRestaurantContact(e.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Create Account
                </button>
              </div>
              <div className="form-group">
                <span
                  role="button"
                  className="back-to-login-link"
                  onClick={() => setDisplay("login")}
                >
                  Back to Login
                </span>
              </div>
            </form>
          </div>
        )}

        {loggedIn && <div className="welcome-message">Welcome, {email}!</div>}
      </div>
    </div>
  );
};

export default Login;