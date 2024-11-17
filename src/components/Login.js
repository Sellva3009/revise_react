import React from 'react';

const Login = ({
  loggedIn,
  handleLogin,
  handleLogout,
  handleInputChange,
  formData,
}) => {
  //   const formData = {
  //     username: "",
  //     password: "",
  //   };
  return (
    <div>
      {loggedIn ? (
        <div>
          <h4>Welcome, {formData.username}</h4>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      ) : (
        <form>
          <label htmlFor="user">Enter the username:</label>
          <br />
          <input
            type="text"
            name="username"
            id="user"
            value={formData.username}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="password">Enter the password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
