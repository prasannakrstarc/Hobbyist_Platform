import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Add this import

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🎯 Hobbyist</div>
      <ul style={styles.navLinks}>
        <li><a href="/">Home</a></li>
        <li><a href="/">Events</a></li>
        <li><a href="/">Communities</a></li>
        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li> {/* ✅ FIXED */}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#20232a',
    color: 'white',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '1.5rem',
  }
};

export default Navbar;
