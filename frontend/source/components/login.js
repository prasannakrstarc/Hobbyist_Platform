import React from "react";

function Login() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login to Hobbyist</h2>
      <form>
        <input type="email" placeholder="Email" required /><br /><br />
        <input type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
