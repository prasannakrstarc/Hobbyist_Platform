import React from "react";

function Login() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.formBox}>
          <h2 style={{ color: "#fff" }}>Login to Hobbyist</h2>
          <form>
            <input type="email" placeholder="Email" required style={styles.input} />
            <input type="password" placeholder="Password" required style={styles.input} />
            <button type="submit" style={styles.button}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage: `url('/login-bg.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "3rem",
    borderRadius: "10px",
  },
  formBox: {
    padding: "2rem",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "8px",
    minWidth: "300px",
    backdropFilter: "blur(6px)",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "1rem",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    width: "100%",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "4px",
  },
};

export default Login;
