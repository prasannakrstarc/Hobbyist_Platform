import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    margin: '1rem 0',
  },
  input: {
    padding: '0.5rem 1rem',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
};

export default SearchBar;
