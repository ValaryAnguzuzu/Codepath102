import React from "react";
import "./Card.css";

const Card = (subject, tutor, time, location, link) => {
  return (
    <div className="card">
      <h3>{subject}</h3>
      <p>
        <strong>Tutor:</strong> {tutor}
      </p>
      <p>
        <strong>Time:</strong> {time}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="join-button">Join Study Group</button>
      </a>
    </div>
  );
};

export default Card;