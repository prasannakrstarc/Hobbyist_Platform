import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import EventCard from '../components/Eventcard';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: 'Jazz Night at the Club',
      category: 'Music',
      date: '2025-06-15',
      description: 'An evening of smooth jazz performances.',
    },
    {
      id: 2,
      title: 'React Beginners Workshop',
      category: 'Coding',
      date: '2025-06-18',
      description: 'Learn the basics of React in one day.',
    },
    {
      id: 3,
      title: 'Book Lovers Meetup',
      category: 'Books',
      date: '2025-06-20',
      description: 'Discuss your favorite books with fellow readers.',
    },
    {
      id: 4,
      title: 'Acrylic Painting for All',
      category: 'Art',
      date: '2025-06-22',
      description: 'A step-by-step painting session for beginners.',
    },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>🎯 Welcome to Hobbyist!</h1>
        <p style={styles.subheading}>Explore events, connect with hobby communities, and more.</p>

        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {filteredEvents.length === 0 ? (
          <p style={{ color: 'white' }}>No events found.</p>
        ) : (
          filteredEvents.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url('/bg.jpg')`, // public folder image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '2rem',
    borderRadius: '10px',
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  subheading: {
    textAlign: 'center',
    color: '#ccc',
    marginBottom: '1rem',
  },
};

export default Home;
