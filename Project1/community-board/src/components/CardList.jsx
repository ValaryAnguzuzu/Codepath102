import React from "react";
import Card from "./Card";
import "./CardList.css";

const studyGroups = [
  {
    subject: "Data Science Study Group",
    tutor: "Alice Johnson",
    time: "Tuesdays, 6 PM - 8 PM",
    location: "Library Room 203",
    link: "https://example.com/datascience",
  },
  {
    subject: "Intro to Python Tutoring",
    tutor: "Michael Lee",
    time: "Wednesdays, 4 PM - 6 PM",
    location: "Online (Zoom)",
    link: "https://example.com/python",
  },
  {
    subject: "Machine Learning Workshop",
    tutor: "Dr. Sarah Kim",
    time: "Fridays, 3 PM - 5 PM",
    location: "CS Building Room 101",
    link: "https://example.com/mlworkshop",
  },
  {
    subject: "Linear Algebra Study Group",
    tutor: "Jake Thompson",
    time: "Saturdays, 2 PM - 4 PM",
    location: "Math Lab 301",
    link: "https://example.com/linearalgebra",
  },
  {
    subject: "Frontend Web Development Session",
    tutor: "Emma Davis",
    time: "Mondays, 5 PM - 7 PM",
    location: "Computer Lab B",
    link: "https://example.com/frontend",
  },
  {
    subject: "Cybersecurity 101",
    tutor: "Brian Parker",
    time: "Thursdays, 6 PM - 8 PM",
    location: "Online (Discord)",
    link: "https://example.com/cybersecurity",
  },
  {
    subject: "AI & Deep Learning Seminar",
    tutor: "Dr. Rebecca White",
    time: "Wednesdays, 3 PM - 5 PM",
    location: "Engineering Hall 402",
    link: "https://example.com/ai-deeplearning",
  },
  {
    subject: "Game Development Study Group",
    tutor: "Lucas Gonzalez",
    time: "Sundays, 4 PM - 6 PM",
    location: "Library Media Lab",
    link: "https://example.com/gamedev",
  },
  {
    subject: "Full-Stack Development Bootcamp",
    tutor: "Jessica Taylor",
    time: "Fridays, 6 PM - 9 PM",
    location: "Online (Zoom)",
    link: "https://example.com/fullstack",
  },
  {
    subject: "Quantum Computing Intro",
    tutor: "Dr. Richard Feynman",
    time: "Tuesdays, 2 PM - 4 PM",
    location: "Physics Department 101",
    link: "https://example.com/quantumcomputing",
  },
  {
    subject: "UI/UX Design Principles",
    tutor: "Sophia Martinez",
    time: "Thursdays, 7 PM - 9 PM",
    location: "Design Lab A",
    link: "https://example.com/uiux",
  },
  {
    subject: "Data Structures & Algorithms",
    tutor: "Kevin Brown",
    time: "Saturdays, 10 AM - 12 PM",
    location: "CS Lecture Hall",
    link: "https://example.com/dsa",
  },
];

const CardList = ({ searchQuery }) => {
  const filteredGroups = studyGroups.filter(
    (group) =>
      group.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.tutor.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="card-list">
      {filteredGroups.length > 0 ? (
        filteredGroups.map((group, index) => (
          <Card
            key={index}
            subject={group.subject}
            tutor={group.tutor}
            time={group.time}
            location={group.location}
            link={group.link}
          />
        ))
      ) : (
        <p>No study groups found.</p>
      )}
    </div>
  );
};

export default CardList;
