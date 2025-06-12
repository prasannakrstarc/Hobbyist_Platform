import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card} onClick={() => navigate(`/event/${event.id}`)}>
      <h3>{event.title}</h3>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

const styles = {
  card: {
    padding: '1rem',
    margin: '1rem 0',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    cursor: 'pointer',
  },
};

export default EventCard;
