import React from "react";
import { useParams } from "react-router-dom";

function EventDetails() {
  const { id } = useParams();

  // Temporary static data (you can connect this to backend later)
  const eventData = {
    1: {
      title: "Street Music Carnival",
      category: "Music",
      date: "2025-06-25",
      location: "MG Road, Bengaluru",
      description: "An open mic event with indie artists and local bands. Come vibe with the city’s best talent!",
      image: "/music-event.png", // Save this under public as 'music-event.png'
    },
    2: {
      title: "Street Music Carnival",
      category: "Music",
      date: "2025-06-25",
      location: "MG Road, Bengaluru",
      description: "An open mic event with indie artists and local bands. Come vibe with the city’s best talent!",
      image: "/art-event.png", // Save this under public as 'music-event.png'
    }
  };

  const event = eventData[id];

  if (!event) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Event Not Found</h2>
        <p>The event with ID {id} doesn't exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>{event.title}</h2>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <img
        src={event.image}
        alt={event.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", marginTop: "1rem", borderRadius: "10px" }}
      />
    </div>
  );
}

export default EventDetails;
