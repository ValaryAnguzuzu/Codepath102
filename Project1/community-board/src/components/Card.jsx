import React from "react";
import "./Card.css";

const Card = ({ subject, tutor, time, location, link }) => {
  console.log("✅ Card received props:", subject, tutor, time, location, link);

  // Ensure all props are properly accessed
  return (
    <div className="card">
      <h3>{subject ?? "No Subject"}</h3>
      <p>
        <strong>Tutor:</strong> {tutor ?? "Unknown"}
      </p>
      <p>
        <strong>Time:</strong> {time ?? "TBA"}
      </p>
      <p>
        <strong>Location:</strong> {location ?? "Location not available"}
      </p>
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <button className="join-button">Join Study Group</button>
      </a>
    </div>
  );
};

export default Card;
