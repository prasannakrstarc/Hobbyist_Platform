import React from 'react';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Music', 'Art', 'Coding', 'Sports', 'Books'];

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          style={{
            ...styles.button,
            backgroundColor: selectedCategory === category ? '#007bff' : '#f0f0f0',
            color: selectedCategory === category ? '#fff' : '#000',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

const styles = {
  container: {
    margin: '1rem 0',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default CategoryFilter;
