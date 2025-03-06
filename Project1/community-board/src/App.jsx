import React from "react";
import { useState } from "react";

import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="app">
      <img
        src="/imgs/study.jpg"
        alt="Study Group Banner"
        className="banner-image"
      />

      <h1 className="title">📚 Study Groups & Tutoring Board</h1>
      <p className="description">
        Find the best study groups and tutoring sessions to help you succeed!
      </p>

      <input
        type="text"
        placeholder="Search by subject or tutor"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <CardList searchQuery={searchQuery} />
    </div>
  );
};

export default App;
