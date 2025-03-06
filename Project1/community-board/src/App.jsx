import React from "react";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">📚 Study Groups & Tutoring Board</h1>
      <p className="description">
        Find the best study groups and tutoring sessions to help you succeed!
      </p>
      <CardList />
    </div>
  );
};

export default App;
